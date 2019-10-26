import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/App';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

import store from './store';

import './style.css';

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<Router>
				<App />
			</Router>
		</ErrorBoundary>
	</Provider>

	, document.querySelector('#root'));