interface IProps {
	technology: string;
	section: string;
}

export const StarterCell = ({technology, section}: IProps) => {
	return (
		<span>{technology}|{section}</span>
	)
}