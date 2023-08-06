import { IForay, blankForay } from '@/interfaces';
import rawForays from '../data/itemtype_forays.json';
import * as qstr from '../qtools/qstr';

class ForayBuilder {

	foray: IForay = blankForay;
	lines: string[] = [];

	constructor(rawForay: any) {
		this.foray.id = rawForay.id;
		this.foray.category = rawForay.category;
		this.foray.title = rawForay.title;
		this.foray.rank = rawForay.rank;
		this.foray.body = rawForay.body;
		this.foray.systemWhenCreated = rawForay.systemWhenCreated;
		this.foray.selectedForSearch = false;
		this.foray.styledTitle = rawForay.title;
		this.foray.styledCategory = rawForay.category;

		this.createLines();

		const progressData = this.processProgress();
		// this.foray.progressIdCode = progressData.
		this.foray.bodyHtml = qstr.buildOutlineHtml(rawForay.body);
		this.foray.bodyDescription = qstr.extractDescriptionFromOutline(rawForay.body);
	}

	createLines() {
		this.lines = qstr.convertStringBlockToLines(this.foray.body);
	}

	processProgress() {
		let progressMessage = '';
		let progressIdCode = '';
		for (const line of this.lines) {
			if (line.startsWith('- >>')) {
				progressMessage = '<span class="progressUnstartedIcon">START: </span>' + qstr.chopLeft(line, '- >>');
				progressIdCode = 'unstarted';
			}
			if (line.startsWith('- ..')) {
				progressMessage = '<span class="progressDoingIcon">DOING: </span>' + qstr.chopLeft(line, '- ..') + '...';
				progressIdCode = 'doing';
			}
			if (line.startsWith('- ))')) {
				progressMessage = '<span class="progressNextStepIcon">CONTINUE: </span>' + qstr.chopLeft(line, '- ))');
				progressIdCode = 'nextStep';
			}
			if (line.startsWith('- ]]')) {
				progressMessage = '<span class="progressParkedIcon">PARKED: </span>' + qstr.chopLeft(line, '- ]]');
				progressIdCode = 'parked';
			}
			if (line.startsWith('- %%')) {
				progressMessage = '<span class="progressSucceededIcon">SUCCEEDED: </span>' + qstr.chopLeft(line, '- %%');
				progressIdCode = 'succeeded';
			}
		}
		this.foray.progressIdCode = progressIdCode;
		this.foray.progressMessage = qstr.parseMarkDown(progressMessage);
	}

	getForay() {
		return this.foray;
	}
}

export const buildForays = () => {
	let _forays: IForay[] = [];

	for (const rawForay of rawForays) {
		const forayBuilder = new ForayBuilder(rawForay);
		const foray = forayBuilder.getForay();
		_forays.push({ ...foray });
	}

	_forays.sort((a, b) =>
		a.systemWhenCreated < b.systemWhenCreated ? 1 : -1
	);
	return _forays;
}

