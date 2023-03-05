'use client';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';

function Info() {
	const { siteTitle, jobs, skills } = useContext(AppContext);

	return (
		<div className="page pageInfo">
			<p>This is the info page.</p>
		</div>
	);
}

export default Info;
