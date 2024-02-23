'use client';
/* eslint-disable react/no-unescaped-entities */
import ForaySearch from '@/components/ForaySearch';
import forays from '../../data/itemtype_forays.json';
import { Metadata } from 'next'

const pageTitle = "Edward's Forays";
// export const metadata: Metadata = {
// 	title: pageTitle,
// 	openGraph: {
// 		title: pageTitle,
// 		description: `These are my ${forays.length} forays available by search.`,
// 		images: ['https://tanguay-eu.vercel.app/images/howtos.png']
// 	}
// };

export default function Howtos() {
	return (
		<ForaySearch />
	);
}
