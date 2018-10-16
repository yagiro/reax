import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './app/store/configureStore';

import './sass/index.scss';
import App from './app/App';

const rootDom = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
	<Provider store={ store }>
		<App/>
	</Provider>
	,rootDom
);