import React from 'react';
import { h } from 'preact';

import Pfp from '../components/pfp';
import Link from '../components/Link';

import styles from './styles/Index.module.scss';
import './styles/Index.scss';
import './styles/Logo.scss';

export default class index extends React.Component {
	render() {
		return (
			<div>
				<Pfp />
				{/* <Counter /> */}
				<p className={`ComingSoon ${styles.ComingSoonText}`}>Coming Soon.</p>
				<Link to="/bio">About me</Link>
				<span
					style={{
						cursor: 'none',
					}}
				>
					&nbsp;&nbsp;&nbsp;
				</span>
				<a href="/CodeSigningCert.crt" download="0J3-code-signing-cert.crt">
					Code-signing Certificate*
				</a>
				<span></span>
				<br />
				<small
					style={{
						fontSize: '0.5em',
					}}
				>
					*Certificate not used for all my code yet
				</small>
			</div>
		);
	}
}
