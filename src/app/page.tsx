'use client';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

function Welcome() {
	const { siteTitle, jobs, skills } = useContext(AppContext);
	return (
		<div className="page pageWelcome">
			This site is part of my <a href="https://onespace.pages.dev/forays?id=257">2023 Datapod Project</a>.
		</div>
	);
}

export default Welcome;
