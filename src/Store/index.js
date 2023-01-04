import { createStore, applyMiddleware } from 'redux';
import thunk from 'react';
import logger from 'redux-logger';
import reducer from '../Reducers';
let store;
export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk));
  return store;
}
