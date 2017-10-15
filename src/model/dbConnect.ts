
import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';

(<any>mongoose).Promise = bluebird;

const DB_URL = "mongodb://mongo:27017/Blog_dev";

/**
 * 连接
 */
mongoose.connect(DB_URL, {
    server: {
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 10000,
        auto_reconnect: true,
        poolSize: 10,
    },
});

/**
  * 连接成功
  */
mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected');
});

/**
 * 重新连接
 */
mongoose.connection.on('reconnected', () => {
    console.log('Mongoose connection reconnected');
});

export default mongoose;
