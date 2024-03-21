import { StarterCell } from "./StarterCell";

interface IProps {
	idCode: string;
	title: string;
	sectionArea: number;
}

export const TechnologyRow = ({ idCode, title, sectionArea }: IProps) => {
	return (
		<>
			{sectionArea === 1 ? (
				<>
					<div className="col1">{title}</div>
					<div className="col2">
							<StarterCell technology={idCode} section="links" />
					</div>
					<div className="col3">
							<StarterCell technology={idCode} section="forays" />
					</div>
					<div className="col4">
							<StarterCell technology={idCode} section="howtos" />
					</div>
				</>
			) : (
				<>
					<div className="col1">{title}</div>
					<div className="col2">
							<StarterCell technology={idCode} section="showcases" />
					</div>
					<div className="col3">
							<StarterCell technology={idCode} section="templates" />
					</div>
					<div className="col4">
							<StarterCell technology={idCode} section="datapods" />
					</div>
				</>
			)}
		</>
	)
}