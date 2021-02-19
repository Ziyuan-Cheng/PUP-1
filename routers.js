const Router = require('koa-router');
const router = new Router();
const {find,create,createMore} = require('./controllers');

module.exports = (app) => {
  router.get('/',find);
  router.post('/',create);
  router.post('/createMore',createMore);
  
  app.use(router.routes()).use(router.allowedMethods());
}