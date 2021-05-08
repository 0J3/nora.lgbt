import React from 'react';
import Link from '../components/Link';
import Pfp from '../components/pfp';

import './styles/profile.scss';

// eslint-disable-next-line
import GitHub from '../icons/GitHub.png';
import Twitch from '../icons/Twitch.png';

if (!Date.now) {
	Date.now = () => new Date().getTime();
}

class Small extends React.Component {
	render() {
		return (
			<p
				style={{
					fontSize: '0.5em',
				}}
			>
				{this.props.children}
			</p>
		);
	}
}

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
export default class Disabilities extends React.Component {
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
							<span className="tag">
								's
								<br />
								Disorders
							</span>
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
							{/* <ProfileLink
								dest="https://www.roblox.com/users/137413810/profile"
								img={Roblox}
							/> */}
						</div>
					</div>
				</div>
				<div className="right">
					<div
						style={{
							width: 'max-content',
						}}
					>
						<h3>
							List of my disabilities, ordered
							<br /> from most impact in my day-to-day life,
							<br /> to least impact
						</h3>
						<ol
							style={{
								textAlign: 'left',
								width: 'auto',
							}}
						>
							<li>Dissassociative Identity Disorder</li>
							<li>Bipolar Disorder</li>
							<li>Dyslexia</li>
							<li>Major Depressive Disorder (Recurrent)</li>
							<li>Autism</li>
							<li>ADHD</li>
							<li>Colourblindness (Red-Green)</li>
						</ol>
						<Small>This list may not be fully finished yet</Small>
					</div>
					<span></span>
				</div>
			</div>
		);
	}
}
