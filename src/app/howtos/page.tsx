'use client';
import { useState } from 'react';
import howtos from '../../data/itemtype_howtos.json';

export default function About() {
	const [searchText, setSearchText] = useState('nnn');
	return (
		<>
			<p className="text-3xl mb-3">{howtos.length} Howtos</p>
			<input className='text-3xl placeholder-slate-300 text-slate-500 rounded p-1 mb-3 ' autoFocus placeholder='search howtos'/>
			{howtos.map((howto) => {
				return <div key={howto.id}>{howto.title}</div>;
			})}
		</>
	);
};
