interface IProps {
	title: string;
	children: React.ReactNode;
}

export const LevelUpSkill = ({ title, children }: IProps) => {
	return (
		<>
			<h5 className="text-green-400">{title}</h5>
			<ul className="list-disc ml-4 mb-5">
			{children}
			</ul>
		</>
	)
}