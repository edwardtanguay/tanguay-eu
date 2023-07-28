"use client"
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

/* eslint-disable react/no-unescaped-entities */
export const Header = () => {
	const activeSegment = useSelectedLayoutSegment();

	return (
		<div>
			<h1 className="text-4xl mb-3">Edward's Tech Site</h1>
			<nav className="bg-slate-900 p-2 mb-3">
				<ul className="flex gap-3">
					<li>
						<Link href="/" className={`border-0 ${activeSegment === null ? 'text-yellow-200' : ''}`}>
							Welcome
						</Link>
					</li>
					<li>
						<Link href="/about" className={`border-0 ${activeSegment === 'about' ? 'text-yellow-200' : ''}`}>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
