import { AppContext } from "@/AppContext";
import { useContext } from "react";

interface IProps {
	technology: string;
	section: string;
}

export const StarterCell = ({technology, section}: IProps) => {
	const { frontendStarters } = useContext(AppContext);

	const currentFrontendStarters = frontendStarters.filter(m => m.technology === technology && m.section === section);

	return (
		<ul>
			{currentFrontendStarters.map((cfs,index) => {
				return (
					<li key={index}><a href={cfs.url} target="_blank">{cfs.title}</a> - {cfs.description}</li>
				)
			})}
		</ul>
	)
}