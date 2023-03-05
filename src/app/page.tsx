'use client';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

function Welcome() {
	const { siteTitle, jobs, skills } = useContext(AppContext);
	return (
		<div className="page pageWelcome">
			<ul>
				<li>
					this site is part of my{' '}
					<a href="https://onespace.pages.dev/forays?id=257">
						2023 Datapod Projects
					</a>
				</li>
				<li>made with Next.js</li>
				<li>
					much of the content for this site is currently available at
					other sites:
					<ul>
						<li>
							<a href="https://edwardtanguay.vercel.app/howtos">
								Howtos
							</a>
						</li>
						<li>
							<a href="https://onespace.pages.dev/forays">
								Forays
							</a>
						</li>
						<li>
							<a href="https://onespace.pages.dev/techItems">
								Tech Items
							</a>
						</li>
						<li>
							<a href="https://onespace.pages.dev/flashcards">
								Flashcards
							</a>
						</li>
						<li>
							<a href="https://jobs.tanguay.eu">
								Web developer jobs in Germany
							</a>
						</li>
						<li>
							<a href="https://starters.tanguay.eu">
								Mern stack starter sites
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}

export default Welcome;
