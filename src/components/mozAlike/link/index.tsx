import { Component } from 'preact';
import { Link } from 'preact-router';
import stylesheet from './style.scss';
import gss from '../getStyle';
const style = gss(stylesheet);

export default class MozLink extends Component<{
  LinkComponent?: typeof Component;
  href?: string;
  className?: string;
  class?: string;
  target?: string;
}> {
  render() {
    const Classes = `${style('mozLink')}${
      this.props.className ? ' ' + this.props.className : ''
    }${this.props.class ? ' ' + this.props.class : ''}`;

    if (this.props.LinkComponent)
      return (
        <this.props.LinkComponent
          href={this.props.href}
          class={Classes}
          className={Classes}
          target={this.props.target}
        >
          {this.props.children}
        </this.props.LinkComponent>
      );
    else
      return (
        <Link
          href={this.props.href}
          class={Classes}
          target={this.props.target}
          onClick={
            this.props.target === 'blank'
              ? () => {
                  window.open(this.props.href);
                }
              : () => {}
          }
        >
          {this.props.children}
        </Link>
      );
  }
}
