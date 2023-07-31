import rawHowtos from './data/itemtype_howtos.json';

const buildHowtos = () => {
	let _howtos: IHowto[] = [];
	for (const rawHowto of rawHowtos) {
		const howto: IHowto = {
			id: rawHowto.id,
			category: rawHowto.category,
			title: rawHowto.title,
			body: rawHowto.body,
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

export const howtos = buildHowtos();