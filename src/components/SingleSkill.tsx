import { Skill } from "@/interfaces"

interface IProps {
	skill: Skill;
}

export const SingleSkill = ({ skill }: IProps) => {
	return (
	<div>
		<div>{skill.title}</div>
	</div>
	)
}