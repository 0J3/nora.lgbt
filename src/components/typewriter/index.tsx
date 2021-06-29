import { Component, h, FunctionalComponent } from 'preact';
import styles from './styles.scss';
import getGetStyleFunc from '../../getStyle';
const style = getGetStyleFunc(styles);

const cursorFlashSpeed = 500; // in milliseconds, how fast it should flash

export default class Typewriter extends Component<
  {
    text: string;
    interval?: number;
    cursorFlashes?: number;
    done?: (typewr?: Typewriter) => any;
    doneEl?: any;
    // done_precursorend?: (typewr?: Typewriter) => any;
  },
  {
    textLengthLeft?: number;
    runs?: number;
    state?: number;
    done: boolean;
  }
> {
  timer: any;
  cursorFlashSpeed: number;

  text: string;

  constructor() {
    super();
    this.state = {
      runs: 0,
      done: false,
    };
  }

  tick2() {
    this.setState({
      state:
        this.state.state < this.cursorFlashSpeed * 2 ? this.state.state + 1 : 0,
      runs:
        (this.state.runs || 0) +
        (this.state.state < this.cursorFlashSpeed &&
        this.state.textLengthLeft <= 0
          ? 1
          : 0),
    });
    if (
      this.state.runs >= (this.props.cursorFlashes || 0) &&
      this.state.textLengthLeft <= 0
    ) {
      this.clearTimer();
      this.props.done ? this.props.done(this) : void 0;
      this.setState({
        done: true,
      });
    }
    this.forceUpdate();
  }

  tick() {
    this.tick2();
    if (this.state.textLengthLeft <= 0) return;
    this.setState({
      textLengthLeft: this.state.textLengthLeft - 1,
    });
    this.forceUpdate();
  }

  clearTimer() {
    clearInterval(this.timer);
    this.setState({
      state: 0,
    });
  }

  componentDidMount() {
    this.text = this.props.text;

    this.cursorFlashSpeed = cursorFlashSpeed / this.props.interval;
    this.setState({
      textLengthLeft: this.props.text.length,
      state: this.cursorFlashSpeed,
      runs: 0,
      done: false,
    });
    this.timer = setInterval(() => this.tick(), this.props.interval || 100);
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  componentDidUpdate() {
    if (this.text !== this.props.text) {
      // catch text prop update
      console.log('Props Update Detected, un- and re-typewritering');
      this.setState({
        runs: 0,
      });
      this.setState({
        done: false,
      });
      this.timer = setInterval(() => {
        this.setState({
          textLengthLeft: this.state.textLengthLeft + 1,
          runs: 0,
        });
        this.tick2();
        if (this.state.textLengthLeft >= this.text.length) {
          this.clearTimer();
          this.componentDidMount();
          this.text = this.props.text;
        }
      }, this.props.interval);
    } else this.text = this.props.text;
  }

  render() {
    const DoneEl = this.props['done' + 'El'];
    return (
      <>
        <span
          class={style(
            `typewriter${
              this.state.state >= this.cursorFlashSpeed ? ' cursor' : ''
            }`,
          )}
        >
          {this.props.text.substr(
            0,
            this.props.text.length - this.state.textLengthLeft,
          )}
        </span>
        {this.state.done && DoneEl ? DoneEl : ''}
      </>
    );
  }
}
