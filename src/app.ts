import * as Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = 'hello koa1';
});

app.listen(8008);

console.log(`[demo] start-quick is starting at port 8008`);