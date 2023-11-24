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
  cssLoader: {
    localsConvention: 'camelCase',
  },
  extraPostCSSPlugins: [
    // eslint-disable-next-line
    require('tailwindcss'),
    require("autoprefixer"),
  ],
  cssModulesTypescriptLoader: {},
  dva: {
    immer: true,
  },
  fastRefresh: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
});
