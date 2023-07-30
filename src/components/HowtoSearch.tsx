'use client';
import { useState } from 'react';
import initialHowtos from '../data/itemtype_howtos.json';

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
				className="text-3xl placeholder-slate-300 text-slate-500 rounded p-1 mb-5 "
				autoFocus
				placeholder="search howtos"
			/>
			{howtos.map((howto) => {
				return (
					<div key={howto.id} className='mb-3'>
						<div className='text-yellow-400 smallcaps text-sm text-opacity-70'>{howto.systemWhenCreated} - {howto.category}</div>
						<div className='text-slate-50 text-xl'>{howto.title}</div>
					</div>
				);
			})}
		</>
	);
}
