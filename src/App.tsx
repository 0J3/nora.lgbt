import React from 'react';
import { h } from 'preact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './App.scss';

import Index from './pages/Index';
import Soon from './pages/Soon';
import Profile from './pages/Profile';
import TestsCounter from './pages/Counter';
import Goto from './pages/goto';
import Disabilities from './pages/Disabilities';

const getRedirComponent = (target: string) => {
	return () => {
		document.location.replace(target);
		return <div>Redirecting...</div>;
	};
};
const grc = getRedirComponent;

const ghComponent = getRedirComponent('https://github.com/0j3/?ref=nora.lgbt');

const routes = [
	{ path: '/', Component: Index, Exact: true },
	{ path: '/bio', Component: Profile },
	{ path: '/about', Component: Profile },
	{ path: '/profile', Component: Profile },
	{ path: '/Tests.Counter', Component: TestsCounter },
	{ path: '/goto/', Component: Goto, Exact: false },
	{ path: '/reroute/', Component: Goto, Exact: false },
	{ path: '/redir/', Component: Goto, Exact: false },
	{ path: '/redirect/', Component: Goto, Exact: false },
	{ path: '/github', Component: ghComponent, Exact: false },
	{ path: '/gh', Component: ghComponent, Exact: false },
	{ path: '/soon', Component: Soon, Exact: true },
	{
		path: '/wip/disabilities.4958709237645',
		Component: Disabilities,
		Exact: true,
	},
	{
		path: '/source',
		Component: grc('https://github.com/0j3/nora.lgbt/?ref=nora.lgbt'),
		Exact: false,
	},
];

const App = () => {
	// routes.forEach(({ path, Component, Exact }) => {
	// 	if (
	// 		document.location.pathname === path ||
	// 		(document.location.pathname.startsWith(path) && Exact === false)
	// 	) {
	// 	}
	// });
	return (
		<Router>
			{/* <Switch> */}
			{routes.map(({ path, Component, Exact = true }) => (
				<Route key={path} exact={Exact ? true : false} path={path}>
					{({ match }) => (
						<CSSTransition
							in={match != null}
							timeout={300}
							classNames="page"
							unmountOnExit
						>
							<div className="page">
								<div className="App">
									<header className="App-header">
										<Component />
									</header>
								</div>
							</div>
						</CSSTransition>
					)}
				</Route>
			))}
			{/* </Switch> */}
			{/* <Switch>
						<Route exact path="/">
							<Index />
						</Route>
						<Route path="*">
							<E404 />
						</Route>
					</Switch> */}
		</Router>
	);
};

export default App;
