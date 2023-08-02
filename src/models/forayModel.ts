import rawForays from '../data/itemtype_forays.json';
import * as qstr from '../qtools/qstr';

export const buildForays = () => {
	let _forays: IForay[] = [];
	for (const rawForay of rawForays) {
		const foray: IForay = {
			id: rawForay.id,
			category: rawForay.category,
			title: rawForay.title,
			rank: rawForay.rank,
			body: rawForay.body,
			bodyHtml: qstr.buildOutlineHtml(rawForay.body),
			bodyDescription: qstr.extractDescriptionFromOutline(rawForay.body),
			systemWhenCreated: rawForay.systemWhenCreated,
			selectedForSearch: false,
			styledTitle: rawForay.title,
			styledCategory: rawForay.category
		};
		_forays.push(foray);
	}

	_forays.sort((a, b) =>
		a.systemWhenCreated < b.systemWhenCreated ? 1 : -1
	);
	return _forays;
}

