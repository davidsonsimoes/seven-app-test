import { compose, applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import middleware from './middleware';

// dev tool
const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const configureStore = (services: any) =>
  createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware.map((f) => f(services))))
  );
