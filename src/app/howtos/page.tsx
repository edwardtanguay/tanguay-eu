/* eslint-disable react/no-unescaped-entities */
import HowtoSearch from '@/components/HowtoSearch';
import howtos from '../../data/itemtype_howtos.json';
import { Metadata } from 'next';

const pageTitle = "Edward's Howtos";
export const metadata: Metadata = {
	title: pageTitle,
	openGraph: {
		title: pageTitle,
		description: `These are my ${howtos.length} howtos available by search.`,
		images: ['https://tanguay-eu.vercel.app/images/howtos.png']
	}
};

export default function Howtos() {
	return (
		<HowtoSearch/>
	);
}
