import MozLink from '../../components/mozAlike/link';
import Typewriter from '../../components/typewriter';

import { cursor, typeinterval } from './var';

export default (Class: (a: string) => string) => {
  return (
    <div className={Class('section aboutSection')}>
      <img
        src='https://github.com/0J3/nora.lgbt/raw/v3/src/assets/icons/nezuko.png'
        alt='Profile Picture'
        className={Class('pfpImg')}
        style={{
          minHeight: '300px',
        }}
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
                      text={'. You can find some of my interests '}
                      interval={typeinterval}
                      cursorFlashes={cursor}
                      doneEl={
                        <>
                          <MozLink href='#interests'>here</MozLink>
                          <Typewriter
                            text={'. Here are some social medias of mine:'}
                            interval={typeinterval}
                            cursorFlashes={1}
                            doneEl={
                              <>
                                <br />
                                <MozLink
                                  href='https://nora.lgbt/gh'
                                  target='_blank'
                                >
                                  Github
                                </MozLink>
                                <br />
                                <MozLink
                                  href='https://nora.lgbt/yt'
                                  target='_blank'
                                >
                                  Youtube
                                </MozLink>
                                <br />
                                <MozLink
                                  href='https://twitter.com/0J3_3'
                                  target='_blank'
                                >
                                  Twitter
                                </MozLink>{' '}
                                <Typewriter
                                  text={'(More Professional)'}
                                  interval={typeinterval}
                                  cursorFlashes={1}
                                  doneEl={
                                    <>
                                      <br />
                                      <MozLink
                                        href='https://twitter.com/0J3_3'
                                        target='_blank'
                                      >
                                        Twitter
                                      </MozLink>{' '}
                                      <Typewriter
                                        text={'(Less Professional)'}
                                        interval={typeinterval}
                                        cursorFlashes={1}
                                        doneEl={
                                          <>
                                            <br />
                                            <MozLink
                                              href='https://discord.com/users/596425713347723269'
                                              target='_blank'
                                            >
                                              Discord
                                            </MozLink>{' '}
                                            <Typewriter
                                              text={'(pwease fwiend me)'}
                                              interval={typeinterval}
                                              cursorFlashes={25}
                                            />
                                          </>
                                        }
                                      />
                                    </>
                                  }
                                />
                              </>
                            }
                          />
                        </>
                      }
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
