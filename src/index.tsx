import React from 'react';
import { render } from 'preact';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

export default App;

/*
let l: { x: any }; // bend typescript over and fuck it in the ass
l = {
	x: document,
};
const v = l.x['getElem' + 'entById'];

render(
	// <React.StrictMode>
	//<Provider store={store}>
	<App />,
	//</Provider>,
	//</React.StrictMode>,
	v('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
