import React from 'react';

import Pfp from '../components/pfp';
import Link from '../components/Link';

import styles from './styles/Index.module.scss';
import './styles/Index.scss';
import './styles/Logo.scss';

export default class e404 extends React.Component {
	render() {
		return (
			<div>
				<Pfp />
				{/* <Counter /> */}
				<p className={`ComingSoon ${styles.ComingSoonText}`}>Coming Soon.</p>
				<Link to="/profile">Profile</Link>
				<span></span>
			</div>
		);
	}
}
