'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as config from '../config';

/* eslint-disable react/no-unescaped-entities */
export const Header = () => {
	const activeSegment = useSelectedLayoutSegment();

	return (
		<div>
			<div className="flex justify-between">
				<h1 className="text-4xl mb-3">Edward's Tech Site</h1>
			</div>
			<nav className="bg-slate-900 p-2 mainnav">
				<ul className="flex gap-3">
					<li>
						<Link
							href="/"
							className={`border-0 ${activeSegment === null ? 'text-yellow-200' : ''
								}`}
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
			<div className='devInfo text-right'>
				<div className="text-slate-500">Version {config.appVersion()}</div>
			</div>
		</div>
	);
};
