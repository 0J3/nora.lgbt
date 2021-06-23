import { Component, h } from 'preact';

import Pfp from '../../components/pfp';

// import './styles/Index.scss';
// import './styles/Logo.scss';

export default class Soon extends Component {
  render() {
    return (
      <div>
        <Pfp />
        {/* <Counter /> */}
        <p className={`ComingSoon`}>Working on it...</p>
        <span></span>
      </div>
    );
  }
}
