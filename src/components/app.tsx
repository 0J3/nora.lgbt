import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Goto from '../routes/goto';

import Header from './header';
import styles from './app.scss';

const App: FunctionalComponent = () => {
  return (
    <div id='preact_root'>
      <Header />
      <div class={`s-pageContents ${styles.pageContents}`}>
        <Router>
          <Route path='/' component={Home} />
          <Route path='/goto/:url*' component={Goto} />
          <Route path='/about' component={Profile} />
          <Route path='/bio' component={Profile} />
          <Route path='/profile' component={Profile} />
          <NotFoundPage default />
        </Router>
      </div>
    </div>
  );
};

export default App;
