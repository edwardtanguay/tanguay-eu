'use client';
import { useState } from 'react';
import _initialHowtos from '../data/itemtype_howtos.json';
import * as qdat from '../qtools/qdat';

const initialHowtos = _initialHowtos.sort((a, b) => a.systemWhenCreated < b.systemWhenCreated ? 1 : 0);

export default function Howtos() {
	const [searchText, setSearchText] = useState('');
	const [howtos, setHowtos] = useState(initialHowtos);

	const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const _searchText = e.target.value;
		const titleMatchHowtos = initialHowtos.filter((m) =>
			m.title.toLowerCase().includes(_searchText.toLowerCase())
		);
		const restMatchHowtos = initialHowtos.filter((m) =>
			m.body.toLowerCase().includes(_searchText.toLowerCase()) && !m.title.toLowerCase().includes(_searchText.toLowerCase())
		);
		let _howtos = [...titleMatchHowtos, ...restMatchHowtos];

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
						<div className='text-yellow-400 smallcaps text-sm text-opacity-70'>{qdat.smartDateWithYear(howto.systemWhenCreated)} - {howto.category}</div>
						<div className='text-slate-50 text-xl'>{howto.title}</div>
					</div>
				);
			})}
		</>
	);
}
