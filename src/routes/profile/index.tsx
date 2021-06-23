import { Component, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.scss';
import Link from '../../components/link';
import Pfp from '../../components/pfp';

import Roblox from './Roblox.png';
import GitHub from './GitHub.png';
import Twitch from './Twitch.png';

import TimeSince from '../../components/timeSince';

import getGSF from '../../getStyle';
import Typewriter from '../../components/typewriter';
const getStyle = getGSF(style);

interface Props {
  user: string;
}

class Small extends Component {
  render() {
    return (
      <p
        style={{
          fontSize: '0.7em',
        }}
      >
        {this.props.children}
      </p>
    );
  }
}

class TimeSinceBDay extends Component<{}> {
  render() {
    return <TimeSince time={1196121600} />;
  }
}
class Experience extends Component<{}> {
  render() {
    // Timestamp of the creation of the first GIT repository of mine
    return <TimeSince time={1328367963} />;
  }
}

class ProfileLink extends Component<{
  dest: string;
  img: string;
  alt?: string;
  invertedIcon?: boolean;
  transform?: string;
}> {
  render() {
    return (
      <Link
        href={this.props.dest}
        external
        className={getStyle('SocialButton')}
      >
        <img
          src={this.props.img}
          alt={this.props.alt}
          style={{
            maxHeight: '1.5em',
            ...(this.props.invertedIcon
              ? {
                  filter: 'invert(1) hue-rotate(180deg)',
                }
              : {}),
            ...(this.props.transform
              ? {
                  transform: this.props.transform,
                }
              : {}),
          }}
        />
      </Link>
    );
  }
}
class ProfilePageContent extends Component<
  {},
  {
    stage: number;
  }
> {
  render() {
    return (
      <div className={getStyle('profile')} id='profileDiv'>
        <div className={getStyle('left')}>
          <div className={getStyle('top')}>
            <div className={getStyle('profilePagePfp')}>
              <Pfp className={getStyle('profilePagePfpImg')} />
            </div>
          </div>
          <div
            className={getStyle('middle')}
            style={{
              textAlign: 'left',
              paddingTop: 20 + 'px',
            }}
          >
            <span
              className={getStyle('username')}
              style={{
                textAlign: 'center',
                left: '50%',
                position: 'relative',
                display: 'block',
                transform: 'translate(-50%,0)',
              }}
            >
              <span className={getStyle('user')}>0J3</span>
              <span className={getStyle('tag')}>#0001</span>
            </span>
          </div>
          <div className={getStyle('bottom')}>
            <div className={getStyle('ProfileIcons')}>
              <ProfileLink
                dest='https://github.com/0j3/?ref=nora.lgbt/profile'
                img={GitHub}
              />
              <ProfileLink
                dest='https://twitch.tv/0J3_0?ref=nora.lgbt/profile'
                img={Twitch}
                transform='scale(1.05)'
              />
              <ProfileLink
                dest='https://www.roblox.com/users/137413810/profile'
                img={Roblox}
              />
            </div>
          </div>
        </div>
        <div class={getStyle('right')}>
          <div className={getStyle('widget')}>
            <p className={getStyle('aboutText sectionTitle')}>About</p>
            <p
              className={getStyle(
                'aboutValue' +
                  (this.state.stage >= 1
                    ? ' showAdditionalContent'
                    : ' hideAdditionalContent'),
              )}
            >
              I'm Nora, a <TimeSinceBDay />{' '}
              <Typewriter
                text='year old Programmer/Computer
              Scientist, Train Enthusiast, Weeb, Furry, Game Developer and Web
              Designer, with'
                cursorFlashes={1}
                interval={75}
                done={() => {
                  if (this.state.stage >= 1) return;
                  this.setState({
                    stage: 1,
                  });
                  setTimeout(() => {
                    // transition finish
                    this.setState({
                      stage: 2,
                    });
                  }, 1000);
                }}
              />
              <span class={getStyle('additionalContent')}>
                {' '}
                <Experience /> years* of experience.
              </span>
            </p>
          </div>
          <div
            style={{
              display: 'inline',
            }}
          >
            <div
              className={getStyle('widget')}
              style={{
                width: 'fit-content',
                display: 'inline-block',
              }}
            >
              <p className={getStyle('genderText sectionTitle')}>Pronouns</p>
              <p className={getStyle('aboutValue')}>
                {this.state.stage >= 2 ? (
                  <Typewriter
                    text='They/Them'
                    interval={100}
                    cursorFlashes={3}
                    done={() => {
                      if (this.state.stage >= 3) return;
                      this.setState({
                        stage: 3,
                      });
                    }}
                  />
                ) : (
                  ''
                )}
                &nbsp;
              </p>
            </div>
          </div>
          <div
            className={getStyle('widget')}
            style={{
              width: 'fit-content',
              display: 'inline-block',
            }}
          >
            <p className={getStyle('emailText sectionTitle')}>Email</p>
            <p className={getStyle('aboutValue')}>
              <a href='mailto:0J3@wafflepowered.com'>
                {this.state.stage >= 3 ? (
                  <Typewriter
                    text='0J3@wafflepowered.com'
                    interval={100}
                    cursorFlashes={3}
                    done={() => {
                      if (this.state.stage >= 4) return;
                      this.setState({
                        stage: 4,
                      });
                    }}
                  />
                ) : (
                  ''
                )}
              </a>
              &nbsp;
            </p>
          </div>
          <div
            className={getStyle('widget')}
            style={{
              width: 'fit-content',
              display: 'inline-block',
            }}
          >
            <p className={getStyle('occText sectionTitle')}>Occupation</p>
            <p className={getStyle('aboutValue')}>
              {this.state.stage >= 4 ? (
                <Typewriter
                  text='Programmer'
                  interval={100}
                  cursorFlashes={25}
                  done={() => {
                    if (this.state.stage >= 5) return;
                    this.setState({
                      stage: 5,
                    });
                  }}
                />
              ) : (
                ''
              )}
              &nbsp;
            </p>
          </div>
          <Small>*Time since creation of my first git repository.</Small>
        </div>
      </div>
    );
  }
}
export default class ProfilePage extends Component {
  render() {
    return (
      <div class={getStyle('profileWrapper')}>
        <ProfilePageContent />
      </div>
    );
  }
}
