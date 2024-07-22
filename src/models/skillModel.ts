import { RawSkill, Skill } from '@/interfaces';
import _rawSkills from '../data/itemtype_skills.json';
import * as qstr from '../qtools/qstr';

const rawSkills:RawSkill[] = _rawSkills as RawSkill[]

const buildPostText = (skill: Skill) => {
	return `
${skill.category.toUpperCase()} ${skill.subcategory.toUpperCase()} SKILL: ${skill.title}

${qstr.cleanContentOfOutlineImageMarkers(skill.body)}

https://tanguay-eu.vercel.app/skills/${skill.dpodId}
	`.trim();
}

export const buildSkills = () => {
	const skills: Skill[] = [];
	for (const rawSkill of rawSkills) {
		const [ category, subcategory ] = qstr.breakIntoParts(rawSkill.categories, ' ');

		const skill: Skill = {
			dpodId: rawSkill.dpodId,
			dpodWhenCreated: rawSkill.dpodWhenCreated,
			category,
			subcategory,
			title: rawSkill.title,
			body: rawSkill.body,
			bodyHtml: qstr.buildOutlineHtml(rawSkill.body, true),
			extras: rawSkill.extras,
			selectedForSearch: false,
			styledTitle: rawSkill.title,
			styledCategory: category,
			showingPostText: false,
			postText: ''
		};

		skill.postText = buildPostText(skill)
		skills.push(skill);
	}

	skills.sort((a, b) =>
		a.dpodWhenCreated < b.dpodWhenCreated ? 1 : -1
	);
	return skills;
}

