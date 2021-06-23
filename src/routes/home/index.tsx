// import { FunctionalComponent, h } from 'preact';
import { Component, h } from 'preact';

import style from './styles.scss';

import getGSF from '../../getStyle';
import TimeSince from '../../components/timeSince';
import Typewriter from '../../components/typewriter';
import Link from '../../components/link';
const Class = getGSF(style);

// const Home: FunctionalComponent = () => {
//     return (
//         <div class={style.home}>
//             <h1>Home</h1>
//             <p>This is the Home component.</p>
//         </div>
//     );
// };

export default class index extends Component<
  {},
  {
    s: number;
  }
> {
  render() {
    return (
      <div class={Class('home')}>
        <h2>0J3</h2>
        <TimeSince time={1196121600} precision={0} />
        <Typewriter
          text={
            ' year old C#/TS Developer, Weeb, and otherwise dumbass. Here are some links:'
          }
          interval={75}
          cursorFlashes={2}
          done={() => {
            if (this.state.s >= 1) return;
            this.setState({
              s: 1,
            });
            this.forceUpdate();
          }}
        />
        <br />
        {this.state.s >= 1 ? (
          <Link href='/about'>
            <Typewriter
              text={'About me'}
              interval={75}
              cursorFlashes={2}
              done={() => {
                if (this.state.s >= 2) return;
                this.setState({
                  s: 2,
                });
              }}
            />
          </Link>
        ) : (
          ''
        )}
        <br />
        {this.state.s >= 2 ? (
          <Link href='/projects'>
            <Typewriter
              text={'My projects'}
              interval={75}
              cursorFlashes={2}
              done={() => {
                if (this.state.s >= 3) return;
                this.setState({
                  s: 3,
                });
              }}
            />
          </Link>
        ) : (
          ''
        )}
        <br />
        {this.state.s >= 3 ? (
          <Link href='/gh'>
            <Typewriter
              text={'My Github'}
              interval={75}
              cursorFlashes={2}
              done={() => {
                if (this.state.s >= 4) return;
                this.setState({
                  s: 4,
                });
              }}
            />
          </Link>
        ) : (
          ''
        )}

        <span></span>
      </div>
    );
  }
}

// export default Home;
