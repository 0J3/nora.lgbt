import { Link } from 'preact-router';
import { Component } from 'preact';

export default class CustomLink extends Component<{
  href: string;
  target?: string;
  download?: string | boolean;
  external?: boolean;
  class?: string;
  className?: string;
}> {
  render() {
    return (
      <Link
        href={this.props.href}
        target={this.props.target}
        {...(this.props.download ? `download=${this.props.download}` : '')}
        class={`${this.props.class || ''} ${
          this.props.className || ''
        } link customlink`}
      >
        {this.props.children}
      </Link>
    );
  }
}
