import { Component, FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import Typewriter from '../../components/typewriter';
import style from './style.css';

class Notfound extends Component<
  {},
  {
    hasBack: boolean;
  }
> {
  render() {
    return (
      <div class={style.notfound}>
        <h1>Error 404</h1>
        <p>
          <Typewriter
            text={`That page doesn't exist`}
            done={() => {
              this.setState({
                hasBack: true,
              });
              this.forceUpdate();
            }}
          />
        </p>
        <Link href='/' {...(this.state.hasBack ? '' : 'hidden')}>
          <h4>Back to Home</h4>
        </Link>
      </div>
    );
  }
}

export default Notfound;
