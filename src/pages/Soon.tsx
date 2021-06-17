import React from 'react';
import { h } from 'preact';

import Pfp from '../components/pfp';

import styles from './styles/Index.module.scss';
import './styles/Index.scss';
import './styles/Logo.scss';

export default class Soon extends React.Component {
	render() {
		return (
			<div>
				<Pfp />
				{/* <Counter /> */}
				<p className={`ComingSoon ${styles.ComingSoonText}`}>
					This{' '}
					{document.location.hash
						? document.location.hash.replace('#', '')
						: 'project'}{' '}
					is coming soon.
				</p>
				<span></span>
			</div>
		);
	}
}
