'use client';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

function Welcome() {
	const { siteTitle, jobs, skills } = useContext(AppContext);
	return (
		<div className="page pageWelcome">
			<ul>
				<li className="main">
					I am in the process of moving all my tech content to this site. Until then, you can find it here:
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
								Tech Flashcards
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
