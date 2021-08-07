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
  }
  render() {
    return (
      <div
        className={Class('bg')}
        style={{
          backgroundColor: this.props.clr
            ? '#' + decodeURIComponent(this.props.clr)
            : this.props.a
            ? `rgba(${this.props.r},${this.props.g},${this.props.b},${this.props.a})`
            : `rgb(${this.props.r},${this.props.g},${this.props.b})`,
        }}
      />
    );
  }
}
