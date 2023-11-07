"ues strict";

module.exports = {
  write: true,
  plugin: "autod-egg",
  prefix: "^",
  devprefix: "^",
  exclude: [
    "examples",
    "docs",
    "run",
    "app/web/pages/.umi",
    "app/web/pages/.umi-production"
  ],
  devdep: [
    "egg-bin",
    "eslint",
    "eslint-config-egg",
    "umi-plugin-ecma5-validator"
  ],
  dep: ["egg", "egg-scripts"],
  semver: [],
  test: "scripts"
};
