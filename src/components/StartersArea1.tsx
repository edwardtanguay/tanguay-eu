/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { AppContext } from "@/AppContext"
import { useContext } from "react";
import { TechnologyRow } from "./TechnologyRow";

/* eslint-disable react/no-unescaped-entities */
export const StartersArea1 = () => {
	const { handleFlip, frontendDatapodStarterTechnologies } = useContext(AppContext);

	return (
		<div className="startersArea startersArea1">
			<div className="flip"><button onClick={handleFlip}><img src="images/starters-astronaut2.jpg" /></button></div>
			<div className="header">
				<div>
					<div className="title title1">1-Links</div>
					<div className="subtitle">External resources to learn from such as courses, tutorials, videos, articles, etc. </div>
				</div>
			</div>
			<div className="header">
				<div>
					<div className="title title2">2-Forays</div>
					<div className="subtitle">Notes on something I try to accomplish which may or may not be successful.</div>
				</div>
			</div>
			<div className="header">
				<div>
					<div className="title title3">3-Howtos</div>
					<div className="subtitle">Step-by-step instructions on how to accomplish a specific task.</div>
				</div>
			</div>

			{frontendDatapodStarterTechnologies.map(fst => {
				return (
					<TechnologyRow sectionArea={1} idCode={fst.idCode} title={fst.title} key={fst.idCode} />
				)
			})}

		</div >
	)
}