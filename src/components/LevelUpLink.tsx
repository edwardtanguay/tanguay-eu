import { LevelUpStatus } from "@/interfaces";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckboxOutline } from "react-icons/io5";
import { MdConstruction } from "react-icons/md";

interface IProps {
	what: string;
	url: string;
	title: string;
	status?: LevelUpStatus;
	github?: string;
}

export const LevelUpLink = ({ what, url, title, status = "todo", github = '' }: IProps) => {
	const getColor = () => {
		switch (status) {
			case "todo":
				return 'text-yellow-200';
			case "doing":
				return 'text-yellow-500';
			case "finished":
				return 'text-green-500';
		}
	}
	return (
		<div className={`${getColor()} text-[.7rem] md:text-[1rem] flex gap-1`}>
			{status === "todo" && (
				<>☐</>
			)}
			{status === "doing" && (
				<span className="text-[.6rem] md:text-[.8rem] md:mt-1 -ml-[.2rem]">🛠️</span>
			)}
			{status === "finished" && (
				<>🗹</>
			)}
			<div>
				<span className="font-mono">{what.toUpperCase()}:</span> <a target="_blank" href={url} className="text-gray-200">{title}</a>{github && (<> - <a className="text-xs text-orange-300" target="_blank" href={github}>GitHub</a></>)}
			</div>
		</div>
	)
}