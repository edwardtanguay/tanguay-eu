interface IProps {
	what: string;
	url: string;
	title: string;
	github?: string;
}

export const LevelUpLink = ({ what, url, title, github = '' }: IProps) => {
	return (
		<li>
			<span className="text-yellow-500 text-xs font-mono">{what.toUpperCase()}:</span> <a target="_blank" href={url} className="text-gray-200">{title}</a>{github && (<> - <a className="text-xs text-orange-300" target="_blank" href={github}>GitHub</a></>)}
		</li>
	)
}