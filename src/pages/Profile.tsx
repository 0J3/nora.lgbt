import React from 'react';
import { h } from 'preact';
import Link from '../components/Link';
import Pfp from '../components/pfp';

import './styles/profile.scss';

// eslint-disable-next-line
import Roblox from '../icons/Roblox.png';
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
interface t {
	i?: number;
}

const timeSince = (when: number) => {
	return Date.now() - when;
};

const getYearsSince = (epoch: number) => {
	epoch = epoch * 1000;
	const getMonthDays = (mo: number) => {
		const t31: number[] = [0, 2, 4, 6, 8, 10];
		return t31.includes(mo) ? 31 : mo === 1 ? 28 : 30;
	};

	const date = new Date(timeSince(epoch));
	const mo = date.getUTCMonth();
	let days = (date.getUTCFullYear() - 1970) * 365;
	for (let i = 0; i <= mo; i++) days = days + getMonthDays(i);
	days = days + date.getUTCDay();
	days = days + date.getUTCHours() / 24;
	days = days + date.getUTCMinutes() / 60 / 24;
	days = days + date.getUTCSeconds() / 60 / 60 / 60;
	return days / 365;
};
class TimeSince extends React.Component<
	{
		time: number;
	},
	t
> {
	text: string = '';
	timer: any;

	constructor(props: any) {
		super(props);
		this.state = {
			i: 0,
		};
	}

	getText() {
		const x = 1000000000;
		return (Math.floor(getYearsSince(this.props.time) * x) / x).toString();
	}
	tick() {
		this.text = this.getText();
		this.setState({
			i: (this.state.i || 0) + 1,
		});
		this.forceUpdate();
	}

	componentDidMount() {
		this.timer = setInterval(() => this.tick(), 100);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		const v = <span>{this.text}</span>;

		return v;
	}
}

class TimeSinceBDay extends React.Component<{}> {
	render() {
		return <TimeSince time={1196121600} />;
	}
}
class Experience extends React.Component<{}> {
	render() {
		// Timestamp of the creation of the first GIT repository of mine
		return <TimeSince time={1328367963} />;
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
							{/* <ProfileLink
								dest="https://www.roblox.com/users/137413810/profile"
								img={Roblox}
							/> */}
						</div>
					</div>
				</div>
				<div className="right">
					<div className="widget">
						<p className="aboutText sectionTitle">About</p>
						<p className="aboutValue">
							I'm Nora, a <TimeSinceBDay /> year old Programmer/Computer
							Scientist, Train Enthusiast, Weeb, Furry, Game Developer and Web
							Designer, with <Experience /> years* of experience.
						</p>
					</div>
					<div
						style={{
							display: 'inline',
						}}
					>
						<div
							className="widget"
							style={{
								width: 'fit-content',
								display: 'inline-block',
							}}
						>
							<p className="genderText sectionTitle">Pronouns</p>
							<p className="aboutValue">They/Them</p>
						</div>
					</div>
					<div
						className="widget"
						style={{
							width: 'fit-content',
							display: 'inline-block',
						}}
					>
						<p className="emailText sectionTitle">Email</p>
						<p className="aboutValue">0J3@wafflepowered.com</p>
					</div>
					<div
						className="widget"
						style={{
							width: 'fit-content',
							display: 'inline-block',
						}}
					>
						<p className="occText sectionTitle">Occupation</p>
						<p className="aboutValue">Video Game Developer</p>
					</div>
					<Small>*Time since creation of my first git repository.</Small>
				</div>
			</div>
		);
	}
}
