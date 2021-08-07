import { Component } from 'preact';

import style from './style.scss';
import getGSF from '../../getStyle';
const Class = getGSF(style);

// import { typeinterval, cursor } from '../vars';

export default class AboutBg extends Component {
  render() {
    return (
      <div className={Class('aboutBg')}>
        <h1>bg</h1>
        <p>
          Have you ever wanted to pretend your screen was off? Have you ever
          just needed some light from your monitor to see something?
          <br />
          <b>bg</b> attempts to solve this issue - simply visit{' '}
          <code>
            <a href='https://nora.lgbt/bg/'>https://nora.lgbt/bg/</a>:clr
          </code>{' '}
          where :clr is either a hex colour (supports: <code>#XXX</code>,
          <code>#XXXX</code>,<code>#XXXXXX</code>,<code>#XXXXXXXX</code> and any
          other CSS Colours), and fullscreen the page!
        </p>
      </div>
    );
  }
}
