import { h, Component } from 'preact';
import CustomLink from '../../components/link';
import MozButton from '../../components/mozAlike/btn';
import MozLink from '../../components/mozAlike/link';
import getGetStyleFunc from '../../getStyle';

import styles from './styles.scss';
const style = getGetStyleFunc(styles);

const valURL = (u: string) => {
  // eslint-disable-next-line
  const rg =
    /^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{1,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?(\#([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?)?$/;

  return rg.test(u);
};

export class InvalidURL {
  static create(link: string) {
    return (
      <div class={style('invalidurl content')}>
        <h1>Hmm. This url seems invalid.</h1>
        <p class={style('shortdescription')}>The url {link} seems invalid</p>
        <div class={style('padding')} />
        <b>Here are three things you should try if you haven't already</b>
        <ul>
          <li>Check to make sure the link is correct</li>
          <li>
            Check that the link is prefixed with `https://` - other "protocols"
            (ie http://) can sometimes cause this error
          </li>
          <li>Click the Proceed to link anyway button</li>
        </ul>
        <CustomLink href={link}>
          <MozButton
            class={style('primary')}
            onClick={() => {
              try {
                document.location.href = link;
              } catch (error) {
                alert(
                  'Your browser returned an error:\n' +
                    error +
                    '\nCheck the console for details.\nThis usually means that the link IS actually invalid, and we cannot navigate to it.',
                );
                throw error;
              }
            }}
          >
            Proceed to link anyway
          </MozButton>
        </CustomLink>
      </div>
    );
  }
}

export default class Goto extends Component<{
  destination?: string;
}> {
  render() {
    let t: string;
    if (this.props.destination) {
      t = this.props.destination;
    } else {
      t = document.location.href
        .replace(
          `${document.location.protocol}//${document.location.host}/goto/`,
          '',
        )
        .replace(
          `${document.location.protocol}//${document.location.host}/reroute/`,
          '',
        )
        .replace(
          `${document.location.protocol}//${document.location.host}/redir/`,
          '',
        )
        .replace(
          `${document.location.protocol}//${document.location.host}/redirect/`,
          '',
        );
      if (t.toLowerCase().startsWith('gh/')) {
        t = t.replace('gh/', '');
        t = `https://github.com/${t}`;
      }
      if (t.toLowerCase().startsWith('ghp/')) {
        const rawt = t;
        t = t.replace('ghp/', '');
        const v = t.split('/');
        if (v[0]) {
          t = `https://${v.shift()}.github.io/${v.join('/')}`;
        } else {
          return InvalidURL.create(rawt);
        }
      }
      if (t.toLowerCase().startsWith('disbot/')) {
        t = t.replace('disbot/', '');
        const split = t.split('/');
        t = `https://discord.com/oauth2/authorize?client_id=${
          split[0]
        }&scope=bot+applications.commands&permissions=${split[1] || -1}`;
      }

      t = t.toLowerCase().startsWith('yt/')
        ? t.split('?').join('&').replace('yt/', 'https://youtu.be/')
        : t;
      t = t.toLowerCase().startsWith('https://youtu.be/')
        ? t.split('?').join('&').replace('youtu.be/', 'youtube.com/watch?v=')
        : t;
      t =
        t.startsWith('https://youtube.com/watch?v=') ||
        t.startsWith('https://www.youtube.com/watch?v=')
          ? t + '&has_verified=true'
          : t;

      // eslint-disable-next-line
      if (t.toLowerCase().startsWith('javascript:')) {
        if (typeof window !== 'undefined') {
          document.body.className += ' ' + style('xsswarning');
          document.title = 'Warning: Potential XSS Attack';
        }
        const back = () => {
          window.history.back();
          setTimeout(() => {
            // give it 5 seconds
            document.location.href = '/timeout'; // go to /timeout
          }, 5000);
        };

        // Inspired by Firefox's Invalid Cert Warning Page
        return (
          <>
            <div class={style('xss warning content')}>
              <h1>Warning: Potential XSS Attack</h1>
              <p>
                We have not redirected to the <code>JavaScript:</code> url
                specified, to protect your security.
              </p>
              <p>
                <code>JavaScript:</code> links can contain "Cookie Loggers" and
                run any code, as if it were from nora.lgbt!
              </p>
              <p>
                If you trust this code, you can click the button labeled{' '}
                <span class='AcceptAndContinueText'>
                  Accept the risk and continue
                </span>{' '}
                below. <br />
                Otherwise, please click{' '}
                <span onClick={back} class='GoBackText'>
                  Go Back (Recommended)
                </span>
              </p>
              <MozLink
                href='/goto/https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss'
                class={style('learnMoreLink')}
                target='_blank'
              >
                Learn more...
              </MozLink>
              <br />
              <MozButton
                secondary={true}
                class={style('secondary')}
                onClick={() => (document.location.href = t)}
              >
                Accept the risk and continue
              </MozButton>
              <MozButton primary={true} class={style('primary')} onClick={back}>
                Go Back (Recommended)
              </MozButton>
            </div>
          </>
        );
      }

      if (
        !(
          t.toLowerCase().startsWith('https://') ||
          t.toLowerCase().startsWith('http://')
        )
      )
        t = 'https://' + t;

      if (!valURL(t)) {
        return InvalidURL.create(t);
      }
    }
    if (typeof document !== 'undefined') {
      document.title = 'Redirecting';
      document.location.replace(t);
    }
    return <div class={style('content')}>Redirecting...</div>;
  }
}
