import { request } from '@/utils/request';
import { getRefreshToken } from '@/utils/auth/token';

/** 登录接口 POST /api/login/account */
export async function login(body: LoginParams) {
  return request<CommonResult<AuthToken>>('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });
}


// 刷新访问令牌
export async function logout() {
  return request<CommonResult<Boolean>>('/auth/logout',
    {
      method: 'POST',
    });
}

// 刷新访问令牌
export async function refreshToken() {
  return request<CommonResult<AuthToken>>('/auth/refresh-token',
    {
      method: 'POSt',
      params: { refreshToken: getRefreshToken() },
    });
}
