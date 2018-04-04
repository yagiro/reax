import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => {
        const updatedReducer = require('./reducers/rootReducer').default;
        store.replaceReducer(updatedReducer);
    });
}

export default store;