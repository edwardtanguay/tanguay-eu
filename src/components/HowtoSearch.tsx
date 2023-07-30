'use client';
import { useState, useEffect, useRef } from 'react';
import rawHowtos from '../data/itemtype_howtos.json';
import * as qdat from '../qtools/qdat';
import * as qstr from '../qtools/qstr';
import { FaSpinner } from 'react-icons/fa';

interface IHowto {
	id: number;
	category: string;
	title: string;
	body: string;
	systemWhenCreated: string;
}

let initialHowtos: IHowto[] = [];
for (const rawHowto of rawHowtos) {
	const howto: IHowto = {
		id: rawHowto.id,
		category: rawHowto.category,
		title: rawHowto.title,
		body: rawHowto.body,
		systemWhenCreated: rawHowto.systemWhenCreated
	};
	initialHowtos.push(howto);
}

export default function Howtos() {
	const [searchText, setSearchText] = useState('');
	const [howtos, setHowtos] = useState<IHowto[]>([]);
	const searchTextRef = useRef<HTMLInputElement>(null);

	const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const _searchText = e.target.value;
		const titleMatchHowtos = initialHowtos.filter((m) => {
			const bulkSearch = m.category + '|' + m.title + '|' + m.body;
			return qstr.textContainsAllTerms(bulkSearch, _searchText);
		});
		let _howtos = [...titleMatchHowtos];

		setHowtos(_howtos);
		setSearchText(_searchText);
	};

	useEffect(() => {
		initialHowtos = initialHowtos.sort((a, b) =>
			a.systemWhenCreated < b.systemWhenCreated ? 1 : 0
		);
		setHowtos(initialHowtos);
	}, []);

	// focuses cursor after waiting graphic
	useEffect(() => {
		if (howtos.length > 0) {
			setTimeout(() => {
				if (searchTextRef.current) {
					searchTextRef.current.focus();
				}
			}, 10);
		}
	}, [howtos]);

	const howtosAreReady = () => howtos.length > 0 || searchText.trim() !== '';

	return (
		<>
			{howtosAreReady() ? (
				<p className="text-3xl mb-3">{howtos.length} Howtos</p>
			) : (
				<p className="text-3xl mb-3 flex gap-1">
					<FaSpinner className="loaderIcon" /> Howtos
				</p>
			)}
			<input
				value={searchText}
				onChange={(e) => handleSearchTextChange(e)}
				className="text-3xl placeholder-slate-300 text-slate-500 rounded p-1 mb-5 w-full"
				autoFocus
				ref={searchTextRef}
				disabled={!howtosAreReady()}
				placeholder={howtosAreReady() ? 'search howtos' : ''}
			/>
			{howtos.map((howto, index) => {
				return (
					<div key={index} className="mb-3">
						<div className="text-yellow-400 smallcaps text-sm text-opacity-70">
							{qdat.smartDateWithYear(howto.systemWhenCreated)} -{' '}
							{howto.category}
						</div>
						<div className="text-slate-50 text-xl">
							{howto.title}
						</div>
					</div>
				);
			})}
		</>
	);
}
