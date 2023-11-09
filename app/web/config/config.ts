import {defineConfig} from 'umi';
import {join} from 'path';
import {routes} from "./routes";

const cwd = process.cwd();
// @ts-ignore
const manifest = join(cwd, 'config/manifest.json');

export default defineConfig({
  ssr: {
    devServerRender: false,
  },
  exportStatic: {},
  targets: {
    ie: 11,
  },
  hash: true,
  outputPath: '../public',
  manifest: {
    fileName: '../../config/manifest.json',
    publicPath: '',
  },
  headScripts: [
    `
        var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?10245fc6ee5650a88ba1f06bd17d83b1";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      `,
  ],
  // locale: {
  //   default: 'zh-CN',
  //   antd: false,
  //   title: false,
  //   baseNavigator: true,
  //   baseSeparator: '-',
  // },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  //对按照 css modules 方式引入的 css 或 less 等样式文件，自动生成 ts 类型定义文件。
  cssModulesTypescriptLoader: {},
  dva: {
    immer: true,
    // hmr: false,
  },
  fastRefresh: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
});
