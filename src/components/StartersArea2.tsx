/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { AppContext } from "@/AppContext";
import { useContext } from "react";
import { StarterCell } from "./StarterCell";

export const StartersArea2 = () => {
	const { handleFlip } = useContext(AppContext);

	return (
		<div className="startersArea startersArea2">
			<div className="flip"><button onClick={handleFlip}><img src="images/starters-astronaut2.jpg" /></button></div>
			<div className="header">
				<div>
					<div className="title title4">4 Showcases</div>
					<div className="subtitle">Projects created while learning the basics of a technology, useful for returning to find basic code that works.</div>
				</div>
			</div>
			<div className="header">
				<div>
					<div className="title title5">5 Templates</div>
					<div className="subtitle">Base projects that are good starters for projects, e.g. have basic settings and tools set up for specific purposes.</div>
				</div>
			</div>
			<div className="header">
				<div>
					<div className="title title6">6 Datapods</div>
					<div className="subtitle">Datapod is a framework for creating schemas that automatically create a CRUD user experience to manage data.</div>
				</div>
			</div>

			<div className="col1">React</div>
			<div className="col2"></div>
			<div className="col3">
				<StarterCell technology="react" section="templates"/>
			</div>
			<div className="col4"></div>

			<div className="col1">Node/Express</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Nuxt</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Vue</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Go</div>
			<div className="col2">
				<StarterCell technology="go" section="showcases"/>
			</div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Next.js</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Python</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Angular 17</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Svelte</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">SvelteKit</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Electron</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">React Native</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Flutter</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Astro</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Solid</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Qwik</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Phoenix</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Laravel</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>

			<div className="col1">Flask</div>
			<div className="col2"></div>
			<div className="col3"></div>
			<div className="col4"></div>
		</div>
	)
}