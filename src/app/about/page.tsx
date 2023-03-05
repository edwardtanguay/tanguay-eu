import React from 'react';

function About() {
	return (
		<div className="page pageAbout">
			<ul>
				<li className="main">
					this site is part of my <b>2023 Datapod Project</b> (
					<a href="https://onespace.pages.dev/forays?id=257">
						see roadmap
					</a>
					) which currently contains these three sites, each which auto-generate their respective framework:
					<ul>
						<li>
							<a href="https://tanguay-eu.vercel.app">
								Edward's Tech Site
							</a>
							<ul>
								<li>
									<i>
										my tech site with all my howtos, tech
										items, forays, site starters, job
										listings, etc.
									</i>
								</li>
								<li>
									made with <b>Next.js</b>
								</li>
								<li>
									auto-generates my <b>Datapod-for-Next.js</b>{' '}
									framework
								</li>
							</ul>
						</li>
						<li>
							<a href="https://datapod-tanguay-eu.vercel.app">
								Datapod Project
							</a>
							<ul>
								<li>
									<i>
										landing site for my Datapod project with
										documentation, current versions, ticket
										system
									</i>
								</li>
								<li>
									made with <b>Vue 3</b>
								</li>
								<li>
									auto-generates my <b>Datapod-for-Vue.js</b>{' '}
									framework
								</li>
							</ul>
						</li>
						<li>
							<a href="https://edward-tanguay-eu.vercel.app">
								Edward Tanguay
							</a>
							<ul>
								<li>
									<i>
										my personal site: books, languages,
										online class notes, blog, philosophy,
										politics, etc.
									</i>
								</li>
								<li>
									made with <b>Angular 15</b>
								</li>
								<li>
									auto-generates my <b>Datapod-for-Angular</b>{' '}
									framework
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}

export default About;
