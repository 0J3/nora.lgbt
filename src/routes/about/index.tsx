import { Component } from 'preact';

import style from './style.scss';
import getGSF from '../../getStyle';
import Typewriter from '../../components/typewriter';
const Class = getGSF(style);

import Projects from '../projects';
import AboutSection from './AboutSection';

// import { typeinterval, cursor } from '../vars';

export default class About extends Component {
  render() {
    return (
      <div className={Class('about')}>
        {AboutSection(Class)}
        <div className={Class('section projectsSection')}>
          <div className={Class('sectionContents')}>
            <h2 className={Class('sectionTitle')}>My Projects</h2>
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}
