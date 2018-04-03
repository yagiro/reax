import { createStore, applyMiddleware } from 'redux';
import logger from './middlewares/loggerMiddleware';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
