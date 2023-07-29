import { Header } from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const pageTitle = "Edward's Tech Site";

export const metadata: Metadata = {
	title: pageTitle,
	openGraph: {
		title: pageTitle,
		description:
			'This is where I keep all code, links and information about web development.',
		images: [
			{
				url: 'https://vitest.dev/og.png',
				type: 'image/png',
				width: '500',
				height: '300'
			}
		]
	}
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning={true}
				className={`${inter.className} bg-slate-800 container mx-auto p-4 text-gray-400`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
