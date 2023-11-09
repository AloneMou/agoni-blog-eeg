import {Controller} from 'egg';

export default class HomeController extends Controller {
  constructor(ctx) {
    super(ctx);
    // @ts-ignore
    this.serverRender = require('../public/umi.server');
  }

  async index() {
    // @ts-ignore
    try {
      const {ctx, app} = this;
      global.host = `${ctx.request.protocol}://${ctx.request.host}`;
      global.href = ctx.request.href;
      global._cookies = ctx.helper.parseCookie(ctx);
      global._navigatorLang = ctx.helper.parseNavLang(ctx);

      // 先走 eggjs 的view 渲染
      const htmlTemplate = await ctx.view.render('index.html');
      console.log("渲染");
      // 将 html 模板传到服务端渲染函数中
      // @ts-ignore
      const {error, html} = await this.serverRender({
        path: ctx.url,
        getInitialPropsCtx: {},
        htmlTemplate,
      });
      console.log("渲染");

      if (error) {
        ctx.logger.error(
          '[SSR ERROR] 渲染报错，切换至客户端渲染',
          error,
          ctx.url,
        );
      }
      ctx.type = 'text/html';
      ctx.status = 200;
      ctx.body = html;
    } finally {
      console.error("渲染异常");
    }

  }
}

// module.exports = HomeController;
