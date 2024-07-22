'use client';
import { AppContext } from '@/AppContext';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useContext } from 'react';

/* eslint-disable react/no-unescaped-entities */
export const Header = () => {
	const activeSegment = useSelectedLayoutSegment();
	const { siteTitle } = useContext(AppContext);

	return (
		<div>
			<div>
				<h1 className="text-4xl">{siteTitle}</h1>
				<h2 className='mb-3 italic'>this site made with <span className='text-orange-300'>Next.js 13</span>, see <a className='text-orange-300' target="_blank" href="https://github.com/edwardtanguay/tanguay-eu">the code</a></h2>
			</div>
			<nav className="bg-slate-900 p-2 mainnav mb-6">
				<ul className="flex gap-x-2 gap-y-0 flex-wrap">
					<li>
						<Link
							href="/"
							className={`border-0 ${activeSegment === null ? 'text-yellow-200' : '' }`}
						>
							Welcome
						</Link>
					</li>
					<li>
						<Link
							href="/howtos"
							className={`border-0 ${activeSegment === 'howtos'
									? 'text-yellow-200'
									: ''
								}`}
						>
							Howtos
						</Link>
					</li>
					<li>
						<Link
							href="/forays"
							className={`border-0 ${activeSegment === 'forays'
									? 'text-yellow-200'
									: ''
								}`}
						>
							Forays
						</Link>
					</li>
					<li>
						<Link
							href="/skills"
							className={`border-0 ${activeSegment === 'skills'
									? 'text-yellow-200'
									: ''
								}`}
						>
							Skills
						</Link>
					</li>
					<li>
						<Link
							href="/starters"
							className={`border-0 ${activeSegment === 'starters'
									? 'text-yellow-200'
									: ''
								}`}
						>
							Starters
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className={`border-0 ${activeSegment === 'about'
									? 'text-yellow-200'
									: ''
								}`}
						>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
