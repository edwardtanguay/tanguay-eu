import { IForay, blankForay } from '@/interfaces';
import rawForays from '../data/itemtype_forays.json';
import * as qstr from '../qtools/qstr';

class ForayBuilder {

	foray: IForay = blankForay;

	constructor(rawForay: any) {
			this.foray.id = rawForay.id,
			this.foray.category = rawForay.category,
			this.foray.title = rawForay.title,
			this.foray.rank = rawForay.rank,
			this.foray.body = rawForay.body,
			this.foray.bodyHtml = qstr.buildOutlineHtml(rawForay.body),
			this.foray.bodyDescription = qstr.extractDescriptionFromOutline(rawForay.body),
			this.foray.systemWhenCreated = rawForay.systemWhenCreated,
			this.foray.selectedForSearch = false,
			this.foray.styledTitle = rawForay.title,
			this.foray.styledCategory = rawForay.category
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
		_forays.push({...foray});
	}

	_forays.sort((a, b) =>
		a.systemWhenCreated < b.systemWhenCreated ? 1 : -1
	);
	return _forays;
}

