import rawStarterTechnologies from '../data/starterTechnologies.json';
import { FrontendStarterTechnology } from '../interfaces';

export const buildFrontendDatapodStarterTechnologies = () => {
	const frontendStarters: FrontendStarterTechnology[] = [];
	for(const rawStarter of rawStarterTechnologies) {
		const frontendStarter: FrontendStarterTechnology = {
			idCode: rawStarter.idCode,
			title: rawStarter.title,
			kind: rawStarter.kind
		}
		frontendStarters.push(frontendStarter);
	}
	return frontendStarters;
}

export const buildFrontendOtherStarterTechnologies = () => {
	const frontendStarters: FrontendStarterTechnology[] = [];
	for(const rawStarter of rawStarterTechnologies) {
		const frontendStarter: FrontendStarterTechnology = {
			idCode: rawStarter.idCode,
			title: rawStarter.title,
			kind: rawStarter.kind
		}
		frontendStarters.push(frontendStarter);
	}
	return frontendStarters;
}