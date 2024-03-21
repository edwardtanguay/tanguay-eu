import rawStarters from '../data/starters.json';
import { FrontendStarter } from '../interfaces';

export const buildFrontendStarters = () => {
	const frontendStarters: FrontendStarter[] = [];
	for(const rawStarter of rawStarters) {
		const frontendStarter: FrontendStarter = {
			technology: rawStarter.technology,
			section: rawStarter.section,
			title: rawStarter.title,
			description: rawStarter.description,
			url: rawStarter.url,
		}
		frontendStarters.push(frontendStarter);
	}
	return frontendStarters;
}