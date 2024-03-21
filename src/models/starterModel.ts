import rawStarters from '../data/starters.json';
import { FrontendStarter } from '../interfaces';

export const buildFrontendStarters = () => {
	const frontendStarters: FrontendStarter[] = [];
	for(const rawStarter of rawStarters) {
		const frontendStarter: FrontendStarter = {
			technology: rawStarter.technology,
			section: rawStarter.technology,
			title: rawStarter.technology,
			description: rawStarter.technology,
			url: rawStarter.technology,
		}
		frontendStarters.push(frontendStarter);
	}
	return frontendStarters;
}