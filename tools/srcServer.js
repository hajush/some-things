import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import open from 'open';
import colors from 'colors';
import mongoose from 'mongoose';
import uriUtil from 'mongodb-uri';
import thingsRoute from '../routes/thingsRoute';
import bodyParser from 'body-parser';

mongoose.Promise = global.Promise;

const mongodbUri = process.env.MONGODB_URI
  || 'mongodb://localhost/somethings';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
mongoose.connect(mongooseUri, options);
/* eslint-disable no-console */

const port = 3000;
const app = express();
const PROD = process.env.NODE_ENV === 'production';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', thingsRoute);

if (PROD) {
  app.use('/', express.static('dist'));
} else {
  // When not in production, enable hot reloading
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else if (!PROD) {
    console.log(('Starting app in dev mode, listening on port ' + port).green);
    open(`http://localhost:${port}`);
  } else {
    console.log('Starting app in production mode, listening on port ' + port);
  }
});
