import { Component } from 'preact';
import MozLink from '../../components/mozAlike/link';

import style from './style.scss';
import getGSF from '../../getStyle';
const Class = getGSF(style);

export default class About extends Component {
  render() {
    return (
      <div className={Class('about')}>
        <div className={Class('aboutPanel')}>
          <h2>Hi</h2>
        </div>
      </div>
    );
  }
}
