// import { FunctionalComponent, h } from 'preact';
import { Component, h } from 'preact';

import style from './styles.scss';

import getGSF from '../../getStyle';
import TimeSince from '../../components/timeSince';
import Typewriter from '../../components/typewriter';
const Class = getGSF(style);

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
      <div class={Class('home')}>
        <h2>0J3</h2>
        <TimeSince time={1196121600} precision={0} />
        <Typewriter text={' year old C#/TS Developer, Weeb, '} interval={50} />

        <span></span>
      </div>
    );
  }
}

// export default Home;
