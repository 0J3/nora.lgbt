// import { FunctionalComponent, h } from 'preact';
import { Component, h } from 'preact';

import style from './styles.scss';

import getGSF from '../../getStyle';
import TimeSince from '../../components/timeSince';
import Typewriter from '../../components/typewriter';
import Link from '../../components/mozAlike/link';
const Class = getGSF(style);

// const Home: FunctionalComponent = () => {
//     return (
//         <div class={style.home}>
//             <h1>Home</h1>
//             <p>This is the Home component.</p>
//         </div>
//     );
// };

export default class Index extends Component<
	any,
	{
		s: number;
	}
> {
	render() {
		interface L {
			label: string;
			location: string;
		}
		const links: L[] = [
			{
				label: 'About Me',
				location: '/about',
			},
			{
				label: 'Projects',
				location: '/projects',
			},
			{
				label: 'Github',
				location: '/gh',
			},
			{
				label: 'GPG Sig.',
				location: '/pgp',
			},
			{
				label: 'bg',
				location: '/bg',
			},
			{
				label: 'Source',
				location: '/source',
			},
			{
				label: 'NezukoBD',
				location: 'https://nezuko.nora.lgbt/',
			},
		];

		if (
			typeof window === 'undefined' || // prevent error with the below code, and prevent prerendering this page everywhere (idk why preact does that but it did)
			(document.location.pathname !== '/' && document.location.pathname !== '') // only if the pathname is `/`, render it (fixes it showing when loading any page for a few frames)
		)
			return <></>;
		return (
			<div class={Class('home')}>
				<h2>Mokiy</h2>
				A <TimeSince time={1196121600} precision={0} />
				<Typewriter
					text={
						' year old C#/TS Developer, Weeb, and otherwise dumbass. Here are some links:'
					}
					interval={12}
					cursorFlashes={2}
					done={() => {
						if (this.state.s >= 1) return;
						this.setState({
							s: 1,
						});
						// this.forceUpdate();
					}}
				/>
				{links.map((l, i) => (
					<>
						<br />
						{this.state.s >= i + 1 ? (
							<Link href={l.location}>
								<Typewriter
									text={l.label}
									interval={25}
									cursorFlashes={5}
									done={() => {
										if (this.state.s >= i + 2) return;
										this.setState({
											s: i + 2,
										});
									}}
								/>
							</Link>
						) : (
							''
						)}
					</>
				))}
				<span />
			</div>
		);
	}
}

// export default Home;
