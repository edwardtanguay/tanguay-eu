'use client';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { SingleSkill } from '@/components/SingleSkill';

export default function Howtos() {

	const {skills} = useContext(AppContext);

	return (
		<>
		<h2>There are {skills.length} skills</h2>
		<section>
				{skills.map(skill => {
					return (
						<SingleSkill key={skill.dpodId} skill={skill}/>
				)
			})}
		</section>
		</>
	);
}
