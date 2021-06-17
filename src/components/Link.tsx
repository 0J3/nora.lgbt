import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { h } from 'preact';

export default class Link extends React.Component<{
	href?: string;
	to?: string;
	external?: boolean; // use a instead of nav link
	className?: any;
}> {
	render() {
		return this.props.external ? (
			<Link
				href={`/goto/${this.props.to || this.props.href || '/'}`}
				className={this.props.className}
			>
				{this.props.children}
			</Link>
		) : (
			<Nav.Link
				key={this.props.to || this.props.href || '/'}
				as={NavLink}
				to={this.props.to || this.props.href || '/'}
				activeClassName="active"
				exact
				className={this.props.className}
			>
				{this.props.children}
			</Nav.Link>
		);
	}
}
