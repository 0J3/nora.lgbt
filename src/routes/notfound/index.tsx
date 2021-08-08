import { Component, FunctionalComponent, h } from 'preact';
import MozLink from '../../components/mozAlike/link';
import Typewriter from '../../components/typewriter';
import style from './style.css';

class Notfound extends Component<
  {},
  {
    hasBack: boolean;
  }
> {
  render() {
    if (typeof this.state.hasBack == 'undefined')
      this.setState({
        hasBack: false,
      });
    return (
      <div class={style.notfound}>
        <h1>Error 404</h1>
        <p>
          <Typewriter
            text={'That page doesn\'t exist'}
            interval={75}
            cursorFlashes={2}
            done={() => {
              if (this.state.hasBack == true) return;
              this.setState({
                hasBack: true,
              });
              // this.forceUpdate();
            }}
          />
        </p>
        {this.state.hasBack === true ? (
          <MozLink href='/'>
            <h4>
              <Typewriter
                text={'Back to Home'}
                interval={75}
                cursorFlashes={100}
              />
            </h4>
          </MozLink>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Notfound;
