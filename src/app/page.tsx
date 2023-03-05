'use client';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

function Welcome() {
	const { siteTitle, jobs, skills } = useContext(AppContext);
	return (
		<div className="page pageWelcome">
			<ul>
				<li className="main">
					this site is part of my <b>2023 Datapod Project</b> (
					<a href="https://onespace.pages.dev/forays?id=257">
						see roadmap
					</a>
					) which currently contains these three frameworks:
					<ul>
						<li>
							<a href="https://tanguay-eu.vercel.app">
								Edward's Tech Site
							</a>
							<ul>
								<li>
									<i>my tech site with all my howtos, tech items, forays, site starters, job listings, etc.</i>
								</li>
								<li>
									made with <b>Next.js</b>
								</li>
								<li>
									auto-generates my <b>Datapod-for-Next.js</b> framework
								</li>
							</ul>
						</li>
						<li>
							<a href="https://datapod-tanguay-eu.vercel.app">
								Datapod Project
							</a>
							<ul>
								<li>
									<i>landing site for my Datapod project with documentation, current versions, ticket system</i>
								</li>
								<li>
									made with <b>Vue 3</b>
								</li>
								<li>
									auto-generates my <b>Datapod-for-Vue.js</b> framework
								</li>
							</ul>
							
						</li>
						<li>
							<a href="https://edward-tanguay-eu.vercel.app">
								Edward Tanguay
							</a>
							<ul>
								<li>
									<i>my personal site: books, languages, online
									class notes, blog, philosophy, politics,
										etc.</i>
								</li>
								<li>
									made with <b>Angular 15</b>
								</li>
								<li>
									auto-generates my <b>Datapod-for-Angular</b> framework
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li className="main">
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
