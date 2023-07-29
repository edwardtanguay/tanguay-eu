/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';
import initialHowtos from '../../data/itemtype_howtos.json';

// import { Metadata } from 'next';
// const pageTitle = "Edward's Howtos 222";
// export const metadata: Metadata = {
// 	title: pageTitle,
// 	openGraph: {
// 		title: pageTitle,
// 		description: 'These are my 650+ code examples available by search.'
// 	}
// };

export default function Howtos() {
	const [searchText, setSearchText] = useState('');
	const [howtos, setHowtos] = useState(initialHowtos);

	const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const _searchText = e.target.value;
		const _howtos = initialHowtos.filter((m) =>
			m.title.toLowerCase().includes(_searchText.toLowerCase())
		);

		setHowtos(_howtos);
		setSearchText(_searchText);
	};

	return (
		<>
			<p className="text-3xl mb-3">{howtos.length} Howtos</p>
			<input
				value={searchText}
				onChange={(e) => handleSearchTextChange(e)}
				className="text-3xl placeholder-slate-300 text-slate-500 rounded p-1 mb-3 "
				autoFocus
				placeholder="search howtos"
			/>
			{howtos.map((howto) => {
				return <div key={howto.id}>{howto.title}</div>;
			})}
		</>
	);
}
