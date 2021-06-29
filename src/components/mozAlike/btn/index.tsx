import { Component } from 'preact';
import getGetStyleFunc from '../getStyle';
import styles from './style.scss';
const style = getGetStyleFunc(styles);

export default class MozButton extends Component<{
  class?: string;
  onClick?: () => any;
  primary?: boolean;
  secondary?: boolean;
}> {
  render() {
    let btnType: string = 'Primary';
    if (this.props.secondary) {
      btnType = 'Secondary';
    }
    return (
      <button
        className={
          style(`mozBtn ${btnType}`) +
          (this.props.class ? ` ${this.props.class}` : '')
        }
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
