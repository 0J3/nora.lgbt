import { Component } from 'preact';

import style from './style.scss';
import getGSF from '../../getStyle';
const Class = getGSF(style);

// import { typeinterval, cursor } from '../vars';

export default class Bg extends Component<{
  clr?: string;
  r?: number;
  g?: number;
  b?: number;
  a?: number;
}> {
  componentDidMount() {
    document.documentElement.setAttribute('data-transparentBg', 'true');
    document.body.setAttribute('data-noHeader', 'true');
    document.documentElement.setAttribute('data-noCursor', 'true');
  }
  render() {
    return typeof this.props.b === 'undefined' &&
      typeof this.props.clr === 'undefined' ? (
      <div
        className={Class('bg')}
        style={{
          background: `url('${
            document?.location?.hash?.replace('#', '') ??
            'https://wallpapercave.com/wp/wp5702075.png'
          }')`,
        }}
      />
    ) : (
      <div
        className={Class('bg')}
        style={{
          backgroundColor: this.props.clr
            ? `#${decodeURIComponent(this.props.clr)}`
            : this.props.a
            ? `rgba(${this.props.r},${this.props.g},${this.props.b},${this.props.a})`
            : `rgb(${this.props.r},${this.props.g},${this.props.b})`,
        }}
      />
    );
  }
}
