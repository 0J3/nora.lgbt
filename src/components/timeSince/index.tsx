import { PureComponent } from 'preact/compat';

interface t {
  i?: number;
}

const timeSince = (when: number) => {
  return Date.now() - when;
};

const getYearsSince = (epoch: number) => {
  epoch = epoch * 1000;
  const getMonthDays = (mo: number) => {
    const t31: number[] = [0, 2, 4, 6, 8, 10];
    return t31.includes(mo) ? 31 : mo === 1 ? 28 : 30;
  };

  const date = new Date(timeSince(epoch));
  const mo = date.getUTCMonth();
  let days = (date.getUTCFullYear() - 1970) * 365;
  for (let i = 0; i <= mo; i++) days = days + getMonthDays(i);
  days = days + date.getUTCDay();
  days = days + date.getUTCHours() / 24;
  days = days + date.getUTCMinutes() / 60 / 24;
  days = days + date.getUTCSeconds() / 60 / 60 / 60;
  return days / 365;
};
class TimeSince extends PureComponent<
  {
    time: number;
    precision?: number;
  },
  t
> {
  text = '';
  timer: any;

  constructor(props: any) {
    super(props);
    this.state = {
      i: 0,
    };
  }

  getText() {
    const precision: number =
      typeof this.props.precision !== typeof undefined
        ? this.props.precision
        : 9;
    const x = Math.pow(10, precision);

    return (Math.floor(getYearsSince(this.props.time) * x) / x).toString();
  }
  tick() {
    this.text = this.getText();
    this.setState({
      i: (this.state.i || 0) + 1,
    });
    this.forceUpdate();
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const v = <span>{this.text}</span>;

    return v;
  }
}

export default TimeSince;
