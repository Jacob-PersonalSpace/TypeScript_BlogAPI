const isProdEnv: Boolean = process.env.NODE_ENV === 'production';
let listenPort: Number = 8008;
let mongoDB = {
    port: '6379',
}

if(isProdEnv) {
    listenPort = 3000;
    mongoDB = {
        port: '6379'
    }
}

export default {
    listenPort,
    mongoDB,
}