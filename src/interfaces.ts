import { z } from "zod";

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

export type RawSkill = {
	dpodId: string;
	dpodWhenCreated: string;
	categories: string;
	title: string;
	body: string;
	extras: string;
}

export type Skill = {
	dpodId: string;
	dpodWhenCreated: string;
	category: string;
	subcategory: string;
	title: string;
	body: string;
	htmlBody: string;
	extras: string;
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
	progressMessage: string;
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
	progressIdCode: '',
	progressMessage: ''
}

export type AreaShowing = 'startersArea1' | 'startersArea2';

export const FrontendStarterSchema = z.object({
	technology: z.string(),
	section: z.string(),
	title: z.string(),
	description: z.string(),
	url: z.string().regex(/^https?:\/\/(?:www\.)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?$/)
});
export type FrontendStarter = z.infer<typeof FrontendStarterSchema>;

export const FrontendStarterTechnologySchema = z.object({
	idCode: z.string(),
	kind: z.string(),
	title: z.string()
});
export type FrontendStarterTechnology = z.infer<typeof FrontendStarterTechnologySchema>;