import mongoose from 'mongoose';
import config from './config/env';
import app from './config/express';

const debug = require('debug')('express-mongoose-es6-rest-api:index');

// ======================================================
// Connect database
// ======================================================
// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

// connect to mongo db
mongoose.connect(config.db, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});

// ======================================================
// Launch server
// ======================================================
// // module.parent check is required to support mocha watch
// // src: https://github.com/mochajs/mocha/issues/1912
// if (!module.parent) {
// listen on port config.port
const server = app.listen(config.port, () => {
  debug(`server started on port ${config.port} (${config.env})`);
});
// }

export default app;
