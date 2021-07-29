// import { FunctionalComponent, h } from 'preact';
import { Component, h } from 'preact';

import style from './styles.scss';

import getGSF from '../../getStyle';
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

export default class Signing extends Component<{}, {}> {
  render() {
    return (
      <div class={Class('Signing')}>
        <h2>0J3's PGP Key(s) and Code Signing Certificate(s)</h2>
        <h3>PGP</h3>
        <p>
          You can find my PGP key{' '}
          <Link href='/goto/gh/0J3/nora.lgbt/blob/v3/pubkey'>here</Link>.
        </p>
        <h3>Code Signing Certificate</h3>
        <p>
          You can find my Code Signing Certificate{' '}
          <Link href='https://github.com/0J3/nora.lgbt/blob/v2/public/CodeSigningCert.crt?raw=true'>
            here
          </Link>
          .<br /> Please note that I do not use this Certificate that often (I'm
          just too lazy to do so for most of my code)
        </p>
        <span></span>
      </div>
    );
  }
}

// export default Home;
