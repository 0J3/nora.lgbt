import React from 'react';
import logo from '../logo.png';
import { Counter } from '../features/counter/Counter';
import { h } from 'preact';

import styles from './styles/General.module.scss';
import './styles/Index.scss';
import './styles/Logo.scss';

export default class e404 extends React.Component {
	render() {
		return (
			<div>
				<img
					src={logo}
					className={`App-logo ${styles['App-logo']}`}
					alt="logo"
				/>
				<p
					className={`TestPageCounterPageTitle ${styles.TestPageCounterPageTitle}`}
				>
					Test Counter
				</p>
				<Counter />
				<span></span>
			</div>
		);
	}
}
