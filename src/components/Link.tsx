import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default class Link extends React.Component<{
	href?: string;
	to?: string;
	external?: boolean; // use a instead of nav link
}> {
	render() {
		return this.props.external ? (
			<Link href={`/goto/${this.props.to || this.props.href || '/'}`}>
				{this.props.children}
			</Link>
		) : (
			<Nav.Link
				key={this.props.to || this.props.href || '/'}
				as={NavLink}
				to={this.props.to || this.props.href || '/'}
				activeClassName="active"
				exact
			>
				{this.props.children}
			</Nav.Link>
		);
	}
}
