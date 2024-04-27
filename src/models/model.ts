import { buildForays } from './forayModel';
import { buildHowtos } from './howtoModel';
import { buildFrontendStarters } from './starterModel';
import { buildFrontendDatapodStarterTechnologies } from './starterTechnologyModel';
import { buildFrontendOtherStarterTechnologies } from './starterTechnologyModel';

export const howtos = buildHowtos();
export const forays = buildForays();
export const frontendStarters = buildFrontendStarters();
export const frontendDatapodStarterTechnologies = buildFrontendDatapodStarterTechnologies();
export const frontendOtherStarterTechnologies = buildFrontendOtherStarterTechnologies();