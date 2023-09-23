const Router = require('koa-router');
const api = new Router();

api.get('/test', (ctx) => {
    ctx.body = '테스트 성공';
});

// 라우터 아웃
module.exports = api;
