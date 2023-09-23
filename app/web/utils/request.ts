import { notification, message, Modal } from 'antd';
import { extend } from 'umi-request';
import { history } from 'umi';
import { clearAuthCache, getRefreshToken, getToken, setAuthCache } from '@/utils/auth/token';
import { AUTHORIZATION_BEARER, AUTHORIZATION_HEADER, REFRESH_TOKEN_KEY, TOKEN_KEY } from '@/enums/cacheEnum';
import { refreshToken } from '@/api/login';
import errorCode from '@/utils/errorCode';

let isRefreshToken = false;
// 请求队列
let requestList: (() => void)[] = [];
// 是否显示重新登录
export const isRelogin = { show: false };

const errorHandler = (error: Error) => {
  // 网络异常
  if (error.message === 'Failed to fetch') {
    notification.error({
      message: '网络异常',
      description: error.message,
    });
    // 阻断执行，并将错误信息传递下去
    return Promise.reject(error);
  }
  // HTTP 错误
  if (error.name === 'HttpError') {
    notification.error({
      message: 'HTTP 错误',
      description: error.message,
      duration: 0,
    });
    return Promise.reject(error);
  }
  // 系统错误
  if (error.name === 'SystemError') {
    notification.error({
      message: '系统错误',
      duration: 0,
      description: error.message,
    });
    return Promise.reject(error);
  }
  // 前置错误
  if (error.name === 'PremiseError') {
    notification.error({
      message: '前置错误',
      duration: 0,
      description: error.message,
    });
    return Promise.reject(error);
  }
  return Promise.reject(error);
};

//对 extend 实例进行简单的封装
export const request = extend({
  prefix: 'http://127.0.0.1:18080',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  errorHandler: errorHandler,
});


// 对实例request进行请求拦截
// 可以在里面对url、option中的参数进行进一步处理
request.interceptors.request.use((_url, options) => {
  if (getToken()) {
    // @ts-ignore
    options.headers[AUTHORIZATION_HEADER] = AUTHORIZATION_BEARER + getToken();
  }
  return {
    options: {
      ...options,
      interceptors: true,
    },
  };
});

// 对实例request进行响应拦截, 统一处理接口错误信息
request.interceptors.response.use(async (res, options) => {
  // @ts-ignore
  const common: CommonResult<any> = await res.clone().json() || {};
  const code = common.code || 200;
  const msg = common.message || errorCode[code] || errorCode.default;
  if (res.status === 404) {
    return Promise.reject(new Error(`【${options.url}】接口不存在！`));
  } else if (code === 401) {
    if (!isRefreshToken) {
      isRefreshToken = true;
      if (!getRefreshToken()) {
        return handleAuthorized();
      }
      // 2. 进行刷新访问令牌
      try {
        const refreshTokenRes = await refreshToken();
        setAuthCache(TOKEN_KEY, refreshTokenRes.data.accessToken);
        setAuthCache(REFRESH_TOKEN_KEY, refreshTokenRes.data.refreshToken);
        requestList.forEach(cb => cb());
        return request(options.url, options);
      } catch (e) {
        // 2.2 刷新失败，只回放队列的请求
        requestList.forEach(cb => cb());
        // 提示是否要登出。即不回放当前请求！不然会形成递归
        return handleAuthorized();
      } finally {
        requestList = [];
        isRefreshToken = false;
      }
    } else {
      // 添加到队列，等待刷新获取到新的令牌
      return new Promise(resolve => {
        requestList.push(() => {
          res.headers[AUTHORIZATION_HEADER] = AUTHORIZATION_BEARER + getToken();
          resolve(request(res.url, options));
        });
      });
    }
  } else if (code === 500) {
    message.error({
      content: msg,
    });
    return Promise.reject({
      code: 'STATUS ERROR',
      status: code,
      statusText: msg,
    });
  } else if (code === 501) {
    message.error({
      type: 'error',
      duration: 0,
      message: msg,
    });
    return Promise.reject(new Error(msg));
  } else if (code !== 200) {
    if (msg === '无效的刷新令牌') { // hard coding：忽略这个提示，直接登出
      console.log(msg);
    } else {
      message.error({
        content: msg,
      });
    }
    return Promise.reject({
      code: 'STATUS ERROR',
      status: code,
      statusText: msg,
    });
  }
  return res;
});

function handleAuthorized() {
  if (!isRelogin.show) {
    isRelogin.show = true;
    Modal.confirm({
      title: '系统提示',
      content: '登录状态已过期，您可以继续留在该页面，或者重新登录',
      onOk: () => {
        isRelogin.show = false;
        clearAuthCache();
        history.push('/user/login');
      },
      onCancel: () => {
        isRelogin.show = false;
      },
    });
  }

  return Promise.reject({
    code: 'STATUS ERROR',
    status: 401,
    statusText: '无效的会话，或者会话已过期，请重新登录',
  });
}



