
export interface IHowto {
	id: number;
	category: string;
	title: string;
	body: string;
	bodyHtml: string;
	bodyDescription: string;
	systemWhenCreated: string;
	selectedForSearch: boolean;
	styledTitle: string;
	styledCategory: string;
}

export interface IForay {
	id: number;
	category: string;
	title: string;
	rank: number;
	body: string;
	bodyHtml: string;
	bodyDescription: string;
	systemWhenCreated: string;
	selectedForSearch: boolean;
	styledTitle: string;
	styledCategory: string;
	progressIdCode: string;
}

export const blankForay = {
	id: 0,
	category: '',
	title: '',
	rank: 0,
	body: '',
	bodyHtml: '',
	bodyDescription: '',
	systemWhenCreated: '',
	selectedForSearch: false,
	styledTitle: '',
	styledCategory: '',
	progressIdCode: ''
}

