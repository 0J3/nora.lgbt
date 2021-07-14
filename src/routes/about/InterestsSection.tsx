import { h } from 'preact';
import MozLink from '../../components/mozAlike/link';
import Typewriter from '../../components/typewriter';

import { cursor, typeinterval } from './var';

export default (Class: (a: string) => string) => {
  return (
    <div className={Class('section interestsSection')}>
      <div className={Class('sectionContents')}>
        <h2 className={Class('sectionTitle aboutMe')} id={'interests'}>
          My Interests
        </h2>
        <Typewriter
          text={
            `I am a Train Enthusiast, Plane Enthusiast, Phone Enthusiast, Computer Hardware Enthusiast (or whatever you wanna call it). I'm also an Open-Source-Focused Programmer,` +
            ` a Youtuber, an anarchist, and a lot of other things which are very fucking boring.`
          }
          interval={typeinterval}
          cursorFlashes={cursor}
        />
      </div>
      {/* <img
        src='https://cdn.discordapp.com/avatars/596425713347723269/f077cef846cc41fb4e5c4fbf0a6c30d7.webp?size=512'
        alt='Profile Picture'
        className={Class('pfpImg')}
        style={{
          minHeight: '300px',
        }}
      /> */}
    </div>
  );
};
