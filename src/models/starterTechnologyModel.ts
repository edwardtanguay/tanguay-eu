import rawStarterTechnologies from '../data/starterTechnologies.json';
import { FrontendStarterTechnology } from '../interfaces';

export const buildFrontendStarterTechnologies = () => {
	const frontendStarters: FrontendStarterTechnology[] = [];
	for(const rawStarter of rawStarterTechnologies) {
		const frontendStarter: FrontendStarterTechnology = {
			idCode: rawStarter.idCode,
			title: rawStarter.title
		}
		frontendStarters.push(frontendStarter);
	}
	return frontendStarters;
}