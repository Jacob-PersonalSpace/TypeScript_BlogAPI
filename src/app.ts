import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import cors = require('@koa/cors');

import registRouter from './routers/regist';

const app = new Koa();

app.use(cors());
app.use(bodyParser());

let router = new Router();
router.use('/api/regist', registRouter.routes(), registRouter.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());

app.listen(8007, () => {
    console.log(`[demo] start-quick is starting at port 8007`);
});