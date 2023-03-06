'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

function Header() {
	const activeSegment = useSelectedLayoutSegment();

	return (
		<>
			<div className="headerArea">
				<h1>
				Edward's Tech Site	
				</h1>
			</div>
			<nav className="bg-neutral-800 py-1 px-2 mb-4">
				<Link
					href="/"
					className={`mr-3 ${activeSegment === null ? 'active' : ''}`}
				>
					Welcome
				</Link>
				<Link
					href="/about"
					className={`mr-3 ${
						activeSegment === 'about' ? 'active' : ''
					}`}
				>
					About
				</Link>
			</nav>
		</>
	);
}

export default Header;
