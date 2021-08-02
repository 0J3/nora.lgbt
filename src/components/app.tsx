import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import Profile from '../routes/profile';
import About from '../routes/about';
import NotFoundPage from '../routes/notfound';
import Goto from '../routes/goto';

import Header from './header';
import styles from './app.scss';
import projects from '../routes/projects';
import Signing from '../routes/signing';

const App: FunctionalComponent = () => {
  return (
    <div
      id='preact_root'
      class={
        typeof window !== 'undefined'
          ? `route_${document.location.pathname
              .replace('/', '')
              .replace(/\//g, '_')}`
          : ''
      }
    >
      <Header />
      <div class={`s_pageContents ${styles.pageContents}`} id='pageContents'>
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
          {/* ROUTE /source */}
          <Route
            path='/source'
            component={Goto}
            destination='https://github.com/0J3/nora.lgbt'
          />
          {/* ROUTE /yt */}
          <Route
            path='/yt'
            component={Goto}
            destination='https://www.youtube.com/channel/UCZ8hX_GHqRrKfiEGsCl48gA'
          />
          {/* ROUTE /goto/[url] */}
          <Route path='/goto/:url*' component={Goto} />
          {/* ROUTE /about */}
          <Route path='/about' component={About} />
          {/* ROUTE /bio */}
          <Route path='/bio' component={Profile} />
          {/* ROUTE /profile */}
          <Route path='/profile' component={Profile} />
          {/* ROUTE /projects */}
          <Route
            path='/projects'
            component={Goto}
            destination='/about#Projects'
          />
          {/* ROUTE /pgp */}
          <Route path='/pgp' component={Goto} destination='/signing' />
          {/* ROUTE /gpg */}
          <Route path='/gpg' component={Goto} destination='/signing' />
          {/* ROUTE /crt */}
          <Route path='/crt' component={Goto} destination='/signing' />
          {/* ROUTE /cert */}
          <Route path='/cert' component={Goto} destination='/signing' />
          {/* ROUTE /signing */}
          <Route path='/signing' component={Signing} />
          {/* ROUTE 404 */}
          <NotFoundPage default />
          {/* !SECTION */}
        </Router>
      </div>
    </div>
  );
};

export default App;
