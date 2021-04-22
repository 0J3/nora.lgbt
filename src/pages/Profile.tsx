import React from 'react';
import Link from '../components/Link';
import Pfp from '../components/pfp';

import './styles/profile.scss';

export default class ProfilePage extends React.Component {
	render() {
		return (
			<div className="profile">
				<div className="profilePagePfp">
					<Pfp className="profilePagePfpImg" />
				</div>
				<br />
				<div className="links">
					<Link href="https://github.com/0j3/" external>
						Github
					</Link>
					<Link to="/">Main</Link>
				</div>
			</div>
		);
	}
}
