import logo from './logo.png';
import { Component, h } from 'preact';
import styles from './styles.scss';

export default class Pfp extends Component<{
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
