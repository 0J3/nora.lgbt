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
      <div class={`s_pageContents ${styles.pageContents}`}>
        <Router>
          {/* SECTION Routes */}
          {/* ROUTE / */}
          <Route path='/' component={Home} />
          {/* ROUTE /gh */}
          <Route
            path='/gh'
            component={Goto}
            destination='https://github.com/0J3/'
          />
          {/* ROUTE /github */}
          <Route
            path='/github'
            component={Goto}
            destination='https://github.com/0J3/'
          />
          {/* ROUTE /goto/[url] */}
          <Route path='/goto/:url*' component={Goto} />
          {/* ROUTE /about */}
          <Route path='/about' component={Profile} />
          {/* ROUTE /bio */}
          <Route path='/bio' component={Profile} />
          {/* ROUTE /profile */}
          <Route path='/profile' component={Profile} />
          {/* ROUTE 404 */}
          <NotFoundPage default />
          {/* !SECTION */}
        </Router>
      </div>
    </div>
  );
};

export default App;
