import { Project } from '../../types/project';
import { defiChainProject } from './defichain';
import { ecoBlockProject } from './ecoblock';
import { metaverseProject } from './metaverse';
import { aiTokenProject } from './aitoken';
import { gamefiProject } from './gamefi';
import { privacyChainProject } from './privacychain';
import { dataStorageProject } from './datastorage';
import { smartCityProject } from './smartcity';
import { healthchainProject } from './healthchain';
import { quantumProject } from './quantum';
import { solarTokenProject } from './solartoken';
import { identityProject } from './identity';
import { supplyChainProject } from './supplychain';
import { socialFiProject } from './socialfi';
import { educationProject } from './education';

// Upcoming Launches
export const upcomingProjects: Project[] = [
  defiChainProject,
  ecoBlockProject,
  metaverseProject,
  aiTokenProject,
  gamefiProject
];

// Current Active Launches
export const currentProjects: Project[] = [
  privacyChainProject,
  dataStorageProject,
  smartCityProject,
  healthchainProject,
  quantumProject
];

// Completed Launches
export const completedProjects: Project[] = [
  solarTokenProject,
  identityProject,
  supplyChainProject,
  socialFiProject,
  educationProject
];

// Export all projects combined
export const projects = [...upcomingProjects, ...currentProjects, ...completedProjects];