import { Component } from 'preact';
import MozLink from '../../components/mozAlike/link';

import style from './style.scss';
import getGSF from '../../getStyle';
const Class = getGSF(style);

export default class About extends Component {
  render() {
    return (
      <div className={Class('about')}>
        Soon&trade;
        <br />
        For now, you might want to read my{' '}
        <MozLink href='/bio'>bio page</MozLink>
      </div>
    );
  }
}
