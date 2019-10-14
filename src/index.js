import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/App';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { DataServiceProvider } from './components/userServiceContext/UserServiceContext';

import MockService from './services/mockService';


import store from './store';


import './style.css';

const mockService = new MockService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<DataServiceProvider value={mockService}>
				<Router>
					<App />
				</Router>
			</DataServiceProvider>
		</ErrorBoundary>
	</Provider>

	, document.querySelector('#root'));
