import { buildForays } from './forayModel';
import { buildHowtos } from './howtoModel';
import { buildFrontendStarters } from './starterModel';

export const howtos = buildHowtos();
export const forays = buildForays();
export const frontendStarters = buildFrontendStarters();