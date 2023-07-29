/* eslint-disable react/no-unescaped-entities */
// 'use client';
// import { useState } from 'react';
import howtos from '../../data/itemtype_howtos.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Edward's Howtos",
  description: 'These are my 600+ code examples available by search.',
//   images: 'https://edwardtanguay.vercel.app/share/images/user-icons/icon-1.jpg'
}

export default function About() {
	
	return (
		<>
			<p className="text-3xl mb-3">{howtos.length} Howtos</p>
			<input
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
