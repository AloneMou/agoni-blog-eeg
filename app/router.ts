import {Application} from 'egg';


/**
 * @param {Application} app - egg application
 */
export default (app: Application) => {
  const {router, controller} = app;
  router.get('*', controller.home.index);
};
