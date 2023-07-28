/* eslint-disable react/no-unescaped-entities */
export default function Home() {
	return (
		<main>
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
					<a href="https://zubia.de/home">Zubia did here</a>
				</li>
			</ul>
		</main>
	);
}
