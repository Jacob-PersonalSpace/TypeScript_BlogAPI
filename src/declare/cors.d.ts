declare module '@koa/cors' {
    import * as Koa from "koa";

    function cors(options?: {
        allowMethods?: string | object;
        credentials?: boolean;
    }): Koa.Middleware;

    export = cors;
}