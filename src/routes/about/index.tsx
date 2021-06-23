import { Component } from 'preact';
import MozLink from '../../components/mozAlike/link';

import style from './style.scss';
import getGSF from '../../getStyle';
import Typewriter from '../../components/typewriter';
const Class = getGSF(style);

import projects from '../projects';

const typeinterval = 12; //25
const cursor = 0;

export default class About extends Component {
  render() {
    return (
      <div className={Class('about')}>
        <div className={Class('section aboutSection')}>
          <img
            src='https://cdn.discordapp.com/avatars/596425713347723269/a_105416b95eb704d9acbc0fde682cae98.gif?size=512'
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
                        <MozLink href='/source'>
                          <Typewriter
                            text='This Page'
                            interval={typeinterval}
                            cursorFlashes={cursor}
                          />
                        </MozLink>
                        <Typewriter
                          text={
                            '. The majority of my code is licensed under the AGPL-3.0 License ' +
                            'but a significant portion is under the MIT License - Point being, you can use most of my code (ie libraries, code snippets) almost anywhere.'
                          }
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
      </div>
    );
  }
}
