import { buildForays } from './forayModel';
import { buildHowtos } from './howtoModel';
import { buildFrontendStarters } from './starterModel';
import { buildFrontendStarterTechnologies } from './starterTechnologyModel';

export const howtos = buildHowtos();
export const forays = buildForays();
export const frontendStarters = buildFrontendStarters();
export const frontendStarterTechnologies = buildFrontendStarterTechnologies();