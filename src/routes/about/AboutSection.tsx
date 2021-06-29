import MozLink from '../../components/mozAlike/link';
import Typewriter from '../../components/typewriter';

import { cursor, typeinterval } from './var';

export default (Class: (a: string) => string) => {
  return (
    <div className={Class('section aboutSection')}>
      <img
        src='https://cdn.discordapp.com/avatars/596425713347723269/e043f094e48c4d93e6daff727b0d6cd9.webp?size=512'
        alt='Profile Picture'
        className={Class('pfpImg')}
      />
      <div className={Class('sectionContents')}>
        <h2 className={Class('sectionTitle')}>About Me</h2>
        <Typewriter
          text={
            `Hi, I'm 0J3, an Autistic, Open-Source-Software-Oriented, Full-Stack, ` +
            `Software developer who primarily writes their code in C#, Lua, and Typescript. A significant portion of my code can be found on my`
          }
          interval={typeinterval}
          cursorFlashes={cursor}
          doneEl={
            <>
              <MozLink href='/gh'>
                <Typewriter
                  text='Github'
                  interval={typeinterval}
                  cursorFlashes={cursor}
                />
              </MozLink>
              <Typewriter
                text='Including, but not limited to,'
                interval={typeinterval}
                cursorFlashes={cursor}
                doneEl={
                  <>
                    <MozLink href='/source'>This Page</MozLink>
                    <Typewriter
                      text={'. '}
                      interval={typeinterval}
                      cursorFlashes={1}
                    />
                  </>
                }
              />
            </>
          }
        />
      </div>
    </div>
  );
};
