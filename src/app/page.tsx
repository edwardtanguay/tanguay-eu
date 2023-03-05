'use client';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

function Welcome() {
	const { siteTitle, jobs, skills } = useContext(AppContext);
	return (
		<div className="page pageWelcome">
			<ul>
				<li>this site is part of my <a href="https://onespace.pages.dev/forays?id=257">2023 Datapod Projects</a></li>
				<li>made with Next.js</li>
			</ul>
		</div>
	);
}

export default Welcome;
