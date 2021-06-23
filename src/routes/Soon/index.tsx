import { Component, h } from 'preact';

export default class Soon extends Component {
  render() {
    return (
      <div>
        {/* <Counter /> */}
        <p className={`ComingSoon`}>
          This{' '}
          {document.location.hash
            ? document.location.hash.replace('#', '')
            : 'project'}{' '}
          is coming soon.
        </p>
        <span></span>
      </div>
    );
  }
}
