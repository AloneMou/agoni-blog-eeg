import { DefaultConfig } from './config.default';


export default () => {
  const config: DefaultConfig = {};
  config.logger = {
    level: 'NONE',
    consoleLevel: 'DEBUG',
  };
  config.assets = {
    devServer: {
      debug: true,
      autoPort: true,
    },
    dynamicLocalIP: false,
  };
  return config;
};
