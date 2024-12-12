'use client';
import { LevelUpLink } from "@/components/LevelUpLink";
import { LevelUpSkill } from "@/components/LevelUpSkill";
/* eslint-disable react/no-unescaped-entities */

// test001

import { ProjectListing } from "@/components/ProjectListing";

//force deployment
const test = 123444;
console.log(test);

export default function Home() {
	return (
		<main>
			<h3 className="text-xl mb-3 text-yellow-100">2024-08 Level Up</h3>

			<section className="ml-2 md:ml-6">

				<h4 className="text-[1.2rem] text-orange-300">Skills</h4>
				<section className="ml-2 md:ml-6">

					<LevelUpSkill title="Easy Peasy">
						<LevelUpLink status="doing" what="foray" url="https://tanguay-eu.vercel.app/forays/321" title="Get easy-peasy up and running in a React site" />
					</LevelUpSkill>

					<LevelUpSkill title="React Flow">
						<LevelUpLink status="doing" what="foray" url="https://tanguay-eu.vercel.app/forays/320" title="Get a React Flow showcase up and running" />
						<LevelUpLink status="doing" what="showcase" url="https://showcase-react-flow.vercel.app" title="React Flow" github="https://github.com/edwardtanguay/showcase-react-flow" />
					</LevelUpSkill>

					<LevelUpSkill title="ArangoDB">
						<LevelUpLink status="doing" what="foray" url="https://tanguay-eu.vercel.app/forays/319" title="Get ArangoDB running locally on Windows" />
						<LevelUpLink status="todo" what="courses" url="https://university.arangodb.com" title="official ArangoDB courses" />
					</LevelUpSkill>

					<LevelUpSkill title="GraphQL">
						<LevelUpLink status="doing" what="showcase" url="https://github.com/edwardtanguay/et002-graphql-backend" title="revisit this: GraphQL Backend" />
						<LevelUpLink status="doing" what="showcase" url="https://github.com/edwardtanguay/et002-graphql-frontend" title="revisit this: GraphQL Frontend" />
						<LevelUpLink status="doing" what="course" url="https://tanguay-eu.vercel.app/howtos/886" title="Ray Villalobos's Building a GraphQL Project with React.js course" />
					</LevelUpSkill>

					<LevelUpSkill title="GitLab">
						<LevelUpLink status="todo" what="course" url="https://www.linkedin.com/learning/continuous-integration-and-continuous-delivery-with-gitlab" title="LinkedInLearning: CI/CD with GitLab" />
					</LevelUpSkill>

					<LevelUpSkill title="MongoDB">
						<LevelUpLink status="todo" what="course" url="https://www.linkedin.com/learning/mongodb-essential-training/an-introduction-to-mongodb-23754278" title="MongoDB Essential Training" />
						<LevelUpLink status="todo" what="course" url="https://www.linkedin.com/learning/advanced-mongodb-efficient-and-secure-data-management/advanced-mongodb" title="Advanced MongoDB: Efficient and Secure Data Management" />
						<LevelUpLink status="todo" what="course" url="https://www.linkedin.com/learning/data-modeling-in-mongodb/introduction-to-data-modeling" title="Data Modeling in MongoDB" />
						<LevelUpLink status="todo" what="course" url="https://www.linkedin.com/learning/mongodb-esencial/cambiar-el-tamano-de-lote-de-shell-mongo" title="MongoDB esencial" />
					</LevelUpSkill>

					<LevelUpSkill title="Redux Toolkit">
						<LevelUpLink status="todo" what="course" url="https://www.linkedin.com/learning/learning-redux-toolkit/why-you-should-take-this-course" title="Learning Redux Toolkit" />
						<LevelUpLink status="todo" what="course" url="nnn" title="nnnn" />
					</LevelUpSkill>

					<LevelUpSkill title="Swagger">
						<LevelUpLink status="todo" what="course" url="https://www.linkedin.com/learning/building-apis-with-swagger-and-the-openapi-specification/building-apis-with-swagger" title="LinkedInLearning: Building APIs with Swagger and the OpenAPI Specification" />
					</LevelUpSkill>

					<LevelUpSkill title="MUI">
						<LevelUpLink status="todo" what="course" url="https://www.youtube.com/watch?v=0KEpWHtG10M&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58" title="Net Ninja Matieral UI (18 videos)" />
						<LevelUpLink status="doing" what="tutorial" url="https://mui.com/system/getting-started/the-sx-prop" title="sx" />
					</LevelUpSkill>

					<LevelUpSkill title="Unity">
						<LevelUpLink status="todo" what="Course" url="https://www.linkedin.com/learning/unity-2023-essential-training/creating-prefabs" title="Unity 2023 Essential Training" />
						<LevelUpLink status="todo" what="video tutorial" url="https://www.youtube.com/watch?v=nCDGjLRecrs" title="Build a beautiful 3D open world in 5 minutes with Unity" />
						<LevelUpLink status="todo" what="video tutorial" url="https://www.youtube.com/watch?v=ddy12WHqt-M" title="How to Make Beautiful Terrain in Unity 2020 | Beginner Tutorial" />
						<LevelUpLink status="todo" what="video course (52 parts)" url="https://www.youtube.com/watch?v=Nxg0vQk05os&list=PLtLToKUhgzwnk4U2eQYridNnObc2gqWo-&pp=iAQB" title="3D Survival Game Tutorial | Unity" />
						<LevelUpLink status="todo" what="course" url="https://www.youtube.com/watch?v=xw6DR7uuNz0&list=PL0eyrZgxdwhwQZ9zPUC7TnJ-S0KxqGlrN" title="Unity for Beginners (17 videos)" />
					</LevelUpSkill>

					<LevelUpSkill title="KeyCloak">
						<LevelUpLink status="todo" what="tutorial" url="https://www.keycloak.org/documentation" title="KeyCloak documentation" />
						<LevelUpLink status="todo" what="youtube" url="https://www.youtube.com/results?search_query=keycloak" title="tutorials about KeyCloak" />
					</LevelUpSkill>

					<LevelUpSkill title="Bash">
						<LevelUpLink status="todo" what="tutorial" url="https://www.linkedin.com/learning/search?entityType=COURSE&keywords=bash" title="Bash courses" />
					</LevelUpSkill>

					<LevelUpSkill title="Go">
						<LevelUpLink status="finished" what="course" url="https://tanguay-eu.vercel.app/forays/310" title="David Gassner's Learning Go course" />
						<LevelUpLink status="finished" what="course" url="https://tanguay-eu.vercel.app/howtos/881" title="Joe Marini's Learning the Go Standard Library course" />
						<LevelUpLink status="finished" what="showcase" url="https://github.com/edwardtanguay/go-showcase-examples" title="GitHub repository of all Go learning examples" />
						<LevelUpLink status="finished" what="project" url="https://showcase-go-use-api.vercel.app" title="Vercel-Hetzner-Go-MongoDBAtlas fullstack site" github="https://github.com/edwardtanguay/showcase-go-use-api" />
						<LevelUpLink status="todo" what="course" url="https://www.linkedin.com/learning/go-recipes-practical-projects/recipes-for-practical-projects-with-go" title="Miki Tebeca's Go Recipes: Practical Projects course (2023)" />
						<LevelUpLink status="todo" what="course" url="https://www.linkedin.com/learning/go-design-patterns/go-design-patterns" title="Joe Marini's Go Design Patterns (2021)" />
						<LevelUpLink status="todo" what="course" url="https://www.youtube.com/watch?v=aLVJY-1dKz8" title="Build a CRUD Rest API in Go using Mux, Postgres, Docker and Docker Compose" />
					</LevelUpSkill>

					<LevelUpSkill title="VSCode workspaces">

						<LevelUpLink status="finished" what="site" url="https://github.com/edwardtanguay/reactnative002/blob/main/reactnative002.code-workspace" title="React Native site with workshop implemented" />
						<LevelUpLink status="todo" what="tutorial" url="https://code.visualstudio.com/docs/editor/workspaces" title="VSCode Workspaces documentation" />
						<LevelUpLink status="todo" what="youtube" url="https://www.youtube.com/results?search_query=vscode+workspaces" title="tutorials about VSCode Workspaces" />
					</LevelUpSkill>

					<LevelUpSkill title="react-i18next">
						<LevelUpLink status="todo" what="tutorial" url="https://react.i18next.com" title="react-i18next documentation" />
					</LevelUpSkill>

					<LevelUpSkill title="react-dropzone">
						<LevelUpLink status="todo" what="tutorial" url="https://react-dropzone.js.org" title="react-dropzone documentation" />
					</LevelUpSkill>

					<LevelUpSkill title="react-hook-form">
						<LevelUpLink status="todo" what="tutorial" url="https://react-hook-form.com" title="react-hook-form" />
					</LevelUpSkill>

					<LevelUpSkill title="ink">
						<LevelUpLink status="todo" what="documentation" url="https://www.inklestudios.com/ink" title="Foray: get Ink running" />
					</LevelUpSkill>

					<LevelUpSkill title="Macbook">
						<LevelUpLink status="finished" what="course" url="https://tanguay-eu.vercel.app/forays/317" title="Anton Ochsenkühn's macOS Sonoma Grundkurs" />
						<LevelUpLink status="finished" what="course" url="https://tanguay-eu.vercel.app/howtos/889" title="Scott Simpson's course: Learning Zsh" />
						<LevelUpLink status="doing" what="course" url="https://www.youtube.com/watch?v=GK7zLYAXdDs" title="Set up a Mac in 2024 for Power Users and Developers" />
					</LevelUpSkill>
				</section>

				<h4 className="text-[1.2rem] text-orange-300">Projects</h4>
				<section className="ml-6">
					<h5 className="mt-3 text-green-500 w-fit bg-slate-700 px-2 rounded">Learniverse</h5>
					<ul className="list-disc ml-4 mb-5">
						<li>user moves around planets/places </li>
					</ul>
					<h5 className="mt-3 text-green-500 w-fit bg-slate-700 px-2 rounded">Learnmap</h5>
					<ul className="list-disc ml-4 mb-5">
						<li>linked mindmaps with Datapod-like items</li>
					</ul>
				</section>

			</section>
			<h3 className="text-xl mb-3 text-yellow-100">My projects, sites and tools</h3>
			<ul className="list-disc ml-4 mb-5">
				<ProjectListing url="https://github.com/edwardtanguay/fastapi-showcase" title="fastapi-showcase" />
				<ProjectListing url="https://github.com/edwardtanguay/sveltekit5-showcase" title="sveltekit5-showcase" />
				<ProjectListing url="https://tanguay.info/apps" title="React Native apps" />
				<ProjectListing url="https://github.com/edwardtanguay/reactnative002" title="React Native showcase app (easy-peasy, etc.)" />
				<ProjectListing url="https://langcore.vercel.app/dutchVerbs" title="Dutch Verbs" />
				<ProjectListing url="https://tanguay-eu.vercel.app/share" title="API data" />
				<ProjectListing url="https://starters.tanguay.eu" title="Starter sites" />
				<ProjectListing url="https://jobs.tanguay.eu" title="Web developer jobs in Germany" />
				<ProjectListing url="https://et284-jsdom-flex-grid.vercel.app" title="Flex, Grid and Animation Practice" github="https://github.com/edwardtanguay/et284-jsdom-flex-grid" />
				<ProjectListing url="https://jsdomtodo.vercel.app" title="Vite JS-DOM Todo App with state manager" github="https://github.com/edwardtanguay/jsdomtodo" />
				<li>
					<a href="https://github.com/edwardtanguay/jsdom-team-project-2023">GitHub for JS-DOM Team Project 2023</a>
				</li>
				<ProjectListing url="https://nuxt-learning-showcase.vercel.app" title="Nuxt Learning Showcase" github="https://github.com/edwardtanguay/nuxt-learning-showcase" />
				<ProjectListing url="https://coggle.it/diagram/ZE-oXwAjwnrf-l8P/t/web-development" title="Web Development Mind Map" />
			</ul>
			<h3 className="text-xl mb-3 text-yellow-100">Starter Tools</h3>
			<ul className="list-disc ml-4 mb-5">
				<ProjectListing url="https://github.com/edwardtanguay/starter-mongo-mongoose-atlas" title="Mongo/Mongoose connection from CLI" />
				<ProjectListing url="https://github.com/edwardtanguay/et892-typescript-course-001" title="TypeScript notes to Mike North's TypeScript Fundamentals class" />
			</ul>
			<h3 className="text-xl mb-3 text-yellow-100">Templates</h3>
			<ul className="list-disc ml-4 mb-5">
				<ProjectListing url="https://github.com/edwardtanguay/vite-react-menu-browserrouter" title="Vite-React Site with React Router 6.4 BrowserRouter" />
				<ProjectListing url="https://github.com/edwardtanguay/vite-react-menu-createbrowserrouter" title="Vite-React Site with React Router 6.4 createBrowserRouter" />
				<ProjectListing url="https://github.com/edwardtanguay/vite-react-menu-createbrowserrouter-context" title="Vite-React Site with React Router 6.4 createBrowserRouter + Context" />
				<ProjectListing url="https://github.com/edwardtanguay/vite-react-menu-createbrowserrouter-easypeasy" title="Vite-React Site with React Router 6.4 createBrowserRouter + easy-peasy Redux" />
				<ProjectListing url="https://github.com/edwardtanguay/template-api-node-express-typescript-es6-modules-lowdb" title="Node/Express API Starter Template" />
				<ProjectListing url="https://github.com/edwardtanguay/template-node-express-ejs-website-typescript/tree/dev" title="Node/Express EJS Website Template with TypeScript" />
				<ProjectListing url="https://github.com/edwardtanguay/template-simple-react-with-node-express-api-one-directory" title="Vite-React with simple Node/Express API in one directory" />
				<ProjectListing url="https://github.com/edwardtanguay/vite-react-menu-appcontext" title="Vite React site with TypeScript, React Router, AppContext" />
				<ProjectListing url="https://github.com/edwardtanguay/830-mongo-book-app" title="Full-Stack MongoDB site in one directory with Vite React frontend and Node/Express backend" />
				<ProjectListing url="https://github.com/edwardtanguay/template-minimal-node-express-api" title="Minimal TypeScript Node/Express API that can be hosted at Render" />
				<ProjectListing url="https://github.com/edwardtanguay/vite-react-node-api-one-directory" title="This is a one-directory project that has Vite React frontend, Node/Express backend, JSON Server, meant to be used as a local application that has a JSON-file database." />
				<ProjectListing url="https://github.com/edwardtanguay/nuxt-starter-site" title="This site is a Nuxt site created with npx nuxi init and has minimal page routing and Tailwind styling to serve as a simple base site for applications." />
				<ProjectListing url="https://template-vue3-typescript-tailwind-router.vercel.app" title="Vue 3 starter template with TypeScript, Tailwind, Router, Vitest Unit-Testing" github="https://github.com/edwardtanguay/template-vue3-typescript-tailwind-router" />
				<ProjectListing url="https://github.com/edwardtanguay/vue3-showcase-site" title="vue3-showcase-site with list/single book pages, 404 page, JSON file datasource" />
				<ProjectListing url="https://github.com/edwardtanguay/python-showcase-examples" title="python-showcase-examples" />
				<ProjectListing url="https://langcore.vercel.app/dutchVerbs" title="Language Core (Dutch Verbs)" />
			</ul>

			<h3 className="text-xl mb-3 text-yellow-100">Learning Resources</h3>
			<ul className="list-disc ml-4 mb-5">
				<ProjectListing url="https://www.youtube.com/watch?v=8sXRyHI3bLw" title="Web Development In 2024 - A Practical Guide" />
				<ProjectListing url="https://www.youtube.com/@PrismaData" title="Prisma Video Channel" />
				<ProjectListing url="https://www.youtube.com/playlist?list=PLn2e1F9Rfr6mmmlwyxznax1HjnaiLBEy4" title="Prisma Features Highlights" />
				<ProjectListing url="https://www.youtube.com/watch?v=iEzKs-B36WI" title="ThePrimeagen: VIM (btw), Streaming, & Content Creation | The Frontend Masters Podcast Ep.9" />
			</ul>
			<h3 className="text-xl mb-3 text-yellow-100">Moving my stuff</h3>
			<ul>
				<li className="main">
					<p className="mb-3">
						I am in the process of moving all my tech content to
						this site. Until then, here is where to find most of it:
					</p>
					<ul className="list-disc ml-4 mb-5">
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
					</ul>
				</li>
			</ul>

			<h3 className="text-xl mb-3 text-yellow-100">Forays</h3>
			<p className="mb-3">
				A foray is "a sudden incursion into a territory, especially to
				obtain something, a raid". In terms of learning technology, it
				is any attempt to get a quick and better overview of a tool,
				what one would use it for, or try a particular thing out. Unlike
				a Howto, it doesn't have to succeed, in fact, if it fails, this
				is just as instructive. But often forays are quick ways to
				discover low-hanging fruit, a new way to accomplish something
				you didn't know about, or the discovery of a new tool that you
				use, or decide to investigate further, or do a complete howto on
				in order to teach to others.
			</p>
			<ul className="list-disc ml-4 mb-5">
				<li>
					validate incoming API data with{' '}
					<a href="https://github.com/colinhacks/zod">Zod</a>
				</li>
				<li>
					create a website that has social-media-preview SEO with{' '}
					<a href="https://astro.build">Astro</a>
				</li>
				<li>
					create a Next.js site with{' '}
					<a href="https://create.t3.gg/">create-t3-app</a>
				</li>
				<li>
					create and deploy at Vercel a{' '}
					<a href="https://freshman.tech/web-development-with-go/">
						website with Go
					</a>
				</li>
				<li>
					make a typesafe API with <a href="https://trpc.io/">trpc</a>
				</li>
				<li>
					set up a{' '}
					<a href="https://vitux.com/how-to-setup-a-cron-job-in-debian-10/">
						cron job
					</a>{' '}
					at Hetzner for a site to pull its repository site every
					night at midnight
				</li>
				<li>
					create an API with <a href="https://swagger.io">Swagger</a>
				</li>
				<li>
					create a useful example with{' '}
					<a href="https://blixtdev.com/all-about-reacts-new-use-hook/">
						React's new use() hook
					</a>
				</li>
				<li>
					use <a href="https://www.figma.com/">Figma</a> to create
					simple website graphics as{' '}
					<a href="https://zubia.de/home">Zubia's examples</a>
				</li>
			</ul>

		</main>
	);
}
