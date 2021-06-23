import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

const Header: FunctionalComponent = () => {
  return (
    <header class={style.header + ' s-header'} id='header'>
      <h1>0J3</h1>
      <nav>
        <Link activeClassName={style.active} href='/'>
          Home
        </Link>
        <Link activeClassName={style.active} href='/about'>
          About me
        </Link>
        <Link activeClassName={style.active} href='/projects'>
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Header;
