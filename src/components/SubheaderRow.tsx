import { StarterCell } from "./StarterCell";

interface IProps {
	title: string;
	color: string;
}

export const SubheaderRow = ({ title, color }: IProps) => {
	return (
		<>
			<div style={{color , fontSize: '1.5rem', width: '20rem'}}>{title}</div>
			<div>
			</div>
			<div>
			</div>
			<div>
			</div>
		</>
	)
}