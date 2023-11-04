interface IProps {
	url: string;
	title: string;
	github?: string;
}

export const ProjectListing = ({ url, title, github = '' } : IProps) => {
	return (
		<li>
			<a target="_blank" href={url}>{title}{github && (<>{' '} (<a target="_blank">GitHub</a>)</>)}</a>
		</li>
	)
}