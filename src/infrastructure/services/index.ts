import consoleLogger from './logger/console';
import elasticSearchLogger from './logger/elastic-search';
import api from './api';

const env: string = 'production'; /* = process.NODE_ENV */

const services: object = {
  log: env === 'development' ? consoleLogger : elasticSearchLogger,
  api
};

export default services;
