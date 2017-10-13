import * as Router from 'koa-router';

const router = new Router();

router.post('/regist', async (ctx) => {
    ctx.body = 'Hello world';
});

export default router;