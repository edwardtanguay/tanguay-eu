interface IProps {
	url: string;
	title: string;
	github?: string;
}

export const ProjectListing = ({ url, title, github = '' } : IProps) => {
	return (
		<li>
			<a target="_blank" href={url}>{title}</a>{github && (<> - <a className="text-xs text-orange-300" target="_blank" href={github}>GitHub</a></>)}
		</li>
	)
}