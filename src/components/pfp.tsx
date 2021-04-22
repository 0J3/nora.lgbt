import React from 'react';
import styles from '../pages/styles/Index.module.scss';
import logo from '../logo.png';

export default class Pfp extends React.Component<{
	className?: string;
}> {
	render() {
		return (
			<img
				src={logo}
				className={`App-logo ${styles['App-logo']} ${this.props.className}`}
				alt="logo"
			>
				{this.props.children}
			</img>
		);
	}
}
