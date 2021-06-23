// import { FunctionalComponent, h } from 'preact';
import { Component, h } from 'preact';
import { Link } from 'preact-router';
import styles from './style.css';
import Pfp from '../../components/pfp';

// const Home: FunctionalComponent = () => {
//     return (
//         <div class={style.home}>
//             <h1>Home</h1>
//             <p>This is the Home component.</p>
//         </div>
//     );
// };

export default class index extends Component {
	render() {
		return (
			<div>
				<Pfp />
				{/* <Counter /> */}
				<p className={`ComingSoon ${styles.ComingSoonText}`}>Coming Soon.</p>
				<Link href="/bio">About me</Link>
				<span
					style={{
						cursor: 'none',
					}}
				>
					&nbsp;&nbsp;&nbsp;
				</span>
				<span></span>
			</div>
		);
	}
}

// export default Home;
