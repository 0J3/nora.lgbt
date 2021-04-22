import React from 'react';
import Link from '../components/Link';
import Pfp from '../components/pfp';

import './styles/profile.scss';

import GitHub from '../GitHub.png';

class ProfileLink extends React.Component<{
	dest: string;
	img: string;
	alt?: string;
}> {
	render() {
		return (
			<Link href={this.props.dest} external>
				<img
					src={this.props.img}
					alt={this.props.alt}
					style={{
						maxHeight: '1.5em',
					}}
				/>
			</Link>
		);
	}
}

export default class ProfilePage extends React.Component {
	headRender() {
		return (
			<div>
				<meta name="description" content="0J3#0001's profile" />
			</div>
		);
	}
	render() {
		return (
			<div className="profile">
				<div className="left">
					<div className="top">
						<div className="profilePagePfp">
							<Pfp className="profilePagePfpImg" />
						</div>
					</div>
					<div
						className="middle"
						style={{
							textAlign: 'left',
							paddingTop: 20 + 'px',
						}}
					>
						<span
							className="username"
							style={{
								textAlign: 'center',
								left: '50%',
								position: 'relative',
								display: 'block',
								transform: 'translate(-50%,0)',
							}}
						>
							<span className="user">0J3</span>
							<span className="tag">#0001</span>
						</span>
					</div>
					<div className="bottom">
						<div className="links">
							<ProfileLink
								dest="https://github.com/0j3/?ref=nora.lgbt/profile"
								img={GitHub}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
