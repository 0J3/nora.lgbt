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

export default class index extends Component<
  {},
  {
    s: number;
  }
> {
  render() {
    if (
      typeof window === 'undefined' || // prevent error with the below code, and prevent prerendering this page everywhere (idk why preact does that but it did)
      (document.location.pathname !== '/' && document.location.pathname !== '') // only if the pathname is `/`, render it (fixes it showing when loading any page for a few frames)
    )
      return <></>;
    return (
      <div class={Class('home')}>
        <h2>0J3</h2>
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
        <br />
        {this.state.s >= 1 ? (
          <Link href='/about'>
            <Typewriter
              text={'About me'}
              interval={25}
              cursorFlashes={1}
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
              interval={25}
              cursorFlashes={1}
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
              interval={25}
              cursorFlashes={5}
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
