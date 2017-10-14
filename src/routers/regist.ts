import * as Router from 'koa-router';

import { regist } from '../bll/regist/regist';
import { checkUserName } from '../bll/regist/checkUserName';

const router = new Router();

router.get('/getUserName/:userName', async (ctx) => {
    try {
        let req_query = ctx.request.query;

        let dbUserName = await checkUserName(req_query.userName);

        ctx.body = dbUserName;
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    }
});

router.post('/regist', async (ctx) => {
    try {
        let postData = ctx.request.body;

        if (!await checkUserName({ userName: postData.newUserName })) {
            let registUser = await regist(postData);

            ctx.body = registUser;
        } else {
            throw new Error(`${postData.newUserName} is exist.`)
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    }
});

export default router;