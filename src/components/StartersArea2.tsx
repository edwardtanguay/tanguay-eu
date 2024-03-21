/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { AppContext } from "@/AppContext";
import { useContext } from "react";
import { StarterCell } from "./StarterCell";
import { TechnologyRow } from "./TechnologyRow";

export const StartersArea2 = () => {
	const { handleFlip, frontendStarterTechnologies } = useContext(AppContext);

	return (
		<div className="startersArea startersArea2">
			<div className="flip"><button onClick={handleFlip}><img src="images/starters-astronaut2.jpg" /></button></div>
			<div className="header">
				<div>
					<div className="title title4">4-Showcases</div>
					<div className="subtitle">Projects created while learning the basics of a technology, useful for returning to find basic code that works.</div>
				</div>
			</div>
			<div className="header">
				<div>
					<div className="title title5">5-Templates</div>
					<div className="subtitle">Base projects that are good starters for projects, e.g. have basic settings and tools set up for specific purposes.</div>
				</div>
			</div>
			<div className="header">
				<div>
					<div className="title title6">6-Datapods</div>
					<div className="subtitle">A datapod is a framework for creating schemas that automatically create a CRUD user experience to manage data.</div>
				</div>
			</div>

			{frontendStarterTechnologies.map(fst => {
				return (
					<TechnologyRow sectionArea={2} idCode={fst.idCode} title={fst.title} key={fst.idCode} />
				)
			})}
		</div>
	)
}