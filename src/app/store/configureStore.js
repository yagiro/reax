import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import rootReducer from '../reducers/rootReducer';

export default function configureStore(preloadedState) {
	const middlewares = [loggerMiddleware, thunkMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer];
	const composedEnhancers = compose(...enhancers);

	const store = createStore(rootReducer, preloadedState, composedEnhancers);

	window.store = store;

	if (process.env.NODE_ENV !== 'production' && module.hot) {
		module.hot.accept('../reducers/rootReducer', () =>
			store.replaceReducer(rootReducer)
		);
	}

	return store;
}