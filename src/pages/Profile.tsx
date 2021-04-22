import React from 'react';
import Link from '../components/Link';
import Pfp from '../components/pfp';

import './styles/profile.scss';

import GitHub from '../icons/GitHub.png';
import Roblox from '../icons/Roblox.png';
import Twitch from '../icons/Twitch.png';

class ProfileLink extends React.Component<{
	dest: string;
	img: string;
	alt?: string;
	invertedIcon?: boolean;
	transform?: string;
}> {
	render() {
		return (
			<Link href={this.props.dest} external className="SocialButton">
				<img
					src={this.props.img}
					alt={this.props.alt}
					style={{
						maxHeight: '1.5em',
						...(this.props.invertedIcon
							? {
									filter: 'invert(1) hue-rotate(180deg)',
							  }
							: {}),
						...(this.props.transform
							? {
									transform: this.props.transform,
							  }
							: {}),
					}}
				/>
			</Link>
		);
	}
}
export default class ProfilePage extends React.Component {
	render() {
		return (
			<div className="profile" id="profileDiv">
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
							<ProfileLink
								dest="https://twitch.tv/0J3_0?ref=nora.lgbt/profile"
								img={Twitch}
								transform="scale(1.05)"
							/>
							<ProfileLink
								dest="https://www.roblox.com/users/137413810/profile"
								img={Roblox}
							/>
						</div>
					</div>
				</div>
				<div className="right">
					<h2 className="aboutText">About</h2>
					<p></p>
				</div>
			</div>
		);
	}
}
