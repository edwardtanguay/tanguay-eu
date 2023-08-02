import rawHowtos from '../data/itemtype_howtos.json';
import rawForays from '../data/itemtype_forays.json';
import * as qstr from '../qtools/qstr';

const buildHowtos = () => {
	let _howtos: IHowto[] = [];
	for (const rawHowto of rawHowtos) {
		const howto: IHowto = {
			id: rawHowto.id,
			category: rawHowto.category,
			title: rawHowto.title,
			body: rawHowto.body,
			bodyHtml: qstr.buildOutlineHtml(rawHowto.body),
			bodyDescription: qstr.extractDescriptionFromOutline(rawHowto.body),
			systemWhenCreated: rawHowto.systemWhenCreated,
			selectedForSearch: false,
			styledTitle: rawHowto.title,
			styledCategory: rawHowto.category
		};
		_howtos.push(howto);
	}

	_howtos.sort((a, b) =>
		a.systemWhenCreated < b.systemWhenCreated ? 1 : -1
	);
	return _howtos;
}

const buildForays = () => {
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

export const howtos = buildHowtos();
export const forays = buildForays();