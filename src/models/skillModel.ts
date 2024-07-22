import { RawSkill, Skill } from '@/interfaces';
import _rawSkills from '../data/itemtype_skills.json';
import * as qstr from '../qtools/qstr';

const rawSkills:RawSkill[] = _rawSkills as RawSkill[]

export const buildSkills = () => {
	const skills: Skill[] = [];
	for (const rawSkill of rawSkills) {
		const skill: Skill = {
			dpodId: rawSkill.dpodId,
			dpodWhenCreated: rawSkill.dpodWhenCreated,
			categories: rawSkill.categories,
			title: rawSkill.title,
			body: rawSkill.body,
			htmlBody: qstr.buildOutlineHtml(rawSkill.body),
			extras: rawSkill.extras,
		};
		skills.push(skill);
	}

	skills.sort((a, b) =>
		a.dpodWhenCreated < b.dpodWhenCreated ? 1 : -1
	);
	return skills;
}

