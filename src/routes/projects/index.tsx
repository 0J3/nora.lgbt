import { Component, h } from 'preact';
import MozLink from '../../components/mozAlike/link';
import style from './styles.scss';
import getGSF from '../../getStyle';
import Typewriter from '../../components/typewriter';
const Class = getGSF(style);

import Pfp from '../../components/pfp';

// import './styles/Index.scss';
// import './styles/Logo.scss';

interface ProjectBase {
  /**
   * @name name
   * @description The (human-readable) name of the Project
   */
  name: string;
  /**
   * @name name
   * @description A short description of the project
   * @maxLength 32 Characters
   */
  description: string;
}
interface ProjectURLs {
  /**
   * @name repoURL
   * @description The url of the repository
   * @notice Either this, discordURL or projURL is required
   */
  repoURL?: string;
  /**
   * @name repoURL
   * @description The url of the site for the project
   * @notice Either this, discordURL or repoURL is required
   */
  projURL?: string;
  /**
   * @name repoURL
   * @description The url of the site for the project
   * @notice Either this, projURL or repoURL is required
   */
  discordURL?: string;
}

interface Project extends ProjectURLs, ProjectBase {}

const projects: Project[] = [
  {
    name: 'AutoUsrBGs',
    description:
      'Custom user backgrounds on BD/Powercord without the need for nitro',
    projURL: 'https://aubg.nora.lgbt/',
  },
  {
    name: 'QuickRPC',
    description:
      'Get started with your own Custom Discord Rich Presence status in a few minutes',
    repoURL: '/goto/gh/0J3/QuickRPC',
    projURL: 'https://quickrpc.nora.lgbt/',
  },
  {
    name: 'GoosemodInstaller',
    description: 'An unofficial Goosemod Installer - Not much more to it',
    repoURL: '/goto/gh/0j3/goosemodinstaller',
    projURL: 'https://github.com/0J3/goosemodinstaller/latest',
  },
  {
    name: 'VideoPlayer',
    description:
      'A simple, generic Video Player - Add the .mp4 link to the end of the URL to play said video',
    repoURL: '/goto/gh/0J3/VideoPlayer',
    projURL: 'https://player.nora.lgbt/',
  },
  {
    name: 'Nora.LGBT',
    description: 'The site you\'re on right now i guess',
    projURL: 'https://nora.lgbt/about',
    repoURL: 'https://github.com/0J3/nora.lgbt',
  },
  {
    name: 'NezukoBD',
    description: 'Nezuko is the best girl',
    projURL: 'https://nezuko.nora.lgbt/',
    repoURL: 'https://github.com/0J3/NezukoBD',
  },
];

/**
 * @name checkProject
 * @description Checks a {Project} object to ensure it's valid
 *
 * @argument {Project} proj
 *
 * @returns {boolean} isValid
 * @internal
 */
const checkProject = (proj: Project): boolean => {
  // SECTION Check Project type
  // ANCHOR Check for Name (in case ts doesn't)
  if (!proj.name) throw new Error('Invalid Project: No Name');

  // ANCHOR Check for Description (in case ts doesn't)
  if (!proj.description) throw new Error('Invalid Project: No Name');

  // ANCHOR Check for URLs (in case ts doesn't)
  if (!proj.projURL && !proj.repoURL && !proj.discordURL)
    throw new Error('Invalid Project: No URL');

  return true;
  // !SECTION
};

export class ProjectComponent extends Component<{
  Project: Project;
}> {
  render() {
    checkProject(this.props.Project);
    return (
      <div class={Class('Project')} id={`Project_${this.props.Project.name}`}>
        <div class={Class('Content')}>
          <h2 class={Class('Name')}>{this.props.Project.name}</h2>
          <p class={Class('Description')}>{this.props.Project.description}</p>
          <div class={Class('Buttons')}>
            {this.props.Project.projURL ? (
              <MozLink class={Class('URL')} href={this.props.Project.projURL} />
            ) : (
              <></>
            )}
            {this.props.Project.repoURL ? (
              <MozLink
                class={Class('Source')}
                href={this.props.Project.repoURL}
              />
            ) : (
              <></>
            )}
            {this.props.Project.discordURL ? (
              <MozLink
                class={Class('Discord')}
                href={this.props.Project.repoURL}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default class ProjectsRoute extends Component {
  render() {
    return (
      <div class={Class('Projects')} id='Projects'>
        {projects.map((project: Project) => {
          return <ProjectComponent Project={project} />;
        })}
      </div>
    );
  }
}
