import 'preact/debug';
import React from 'react';
// import { render } from 'preact';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';

// const dom = document.getElementById('root');

// render(
export default () => (
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode> //,
	// dom || document.body
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
