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
	return (
		<li className="text-yellow-500 text-[.7rem] flex gap-1">
			{status === "todo" && (
				<MdOutlineCheckBoxOutlineBlank className="text-[.7rem] w-[.7rem] mt-[2px]" />
			)}
			{status === "doing" && (
				<MdConstruction className="text-[.7rem] w-[.7rem] mt-[2px]" />
			)}
			{status === "finished" && (
				<IoCheckboxOutline className="text-[.7rem] mt-[2px]" />
			)}
			<span className="font-mono">{what.toUpperCase()}:</span> <a target="_blank" href={url} className="text-gray-200">{title}</a>{github && (<> - <a className="text-xs text-orange-300" target="_blank" href={github}>GitHub</a></>)}
		</li>
	)
}