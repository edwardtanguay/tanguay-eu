'use client';
import { useEffect, useRef } from 'react';
import rawHowtos from '../data/itemtype_howtos.json';
import * as qdat from '../qtools/qdat';
import * as qstr from '../qtools/qstr';
import { FaSpinner } from 'react-icons/fa';
import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

let initialHowtos: IHowto[] = [];

for (const rawHowto of rawHowtos) {
	const howto: IHowto = {
		id: rawHowto.id,
		category: rawHowto.category,
		title: rawHowto.title,
		body: rawHowto.body,
		systemWhenCreated: rawHowto.systemWhenCreated,
		selectedForSearch: false,
		styledTitle: rawHowto.title,
		styledCategory: rawHowto.category
	};
	initialHowtos.push(howto);
}

export default function HowtoSearch() {
	const searchTextRef = useRef<HTMLInputElement>(null);
	const { searchText, setSearchText, howtos, setHowtos } = useContext(AppContext);

	const handleSearchTextChange = (_searchText: string) => {
		if (_searchText.length >= 3) {

			const _howtos: IHowto[] = [];

			initialHowtos.forEach(m => m.selectedForSearch = false);

			// primary result group
			for (const initialHowto of initialHowtos) {
				const bulkSearch = initialHowto.category + '|' + initialHowto.title;
				if (qstr.textContainsAllTerms(bulkSearch, _searchText)) {
					_howtos.push(initialHowto);
					initialHowto.selectedForSearch = true;
				}
			}
			// secondary result group
			for (const initialHowto of initialHowtos) {
				const bulkSearch = initialHowto.category + '|' + initialHowto.title + '|' + initialHowto.body;
				if (qstr.textContainsAllTerms(bulkSearch, _searchText)) {
					if (!initialHowto.selectedForSearch) {
						_howtos.push(initialHowto);
						initialHowto.selectedForSearch = true;
					}
				}
			}

			for (const _howto of _howtos) {
				_howto.styledTitle = qstr.wrapFoundSearchWordsWithClassElement(_howto.title, _searchText);
				_howto.styledCategory = qstr.wrapFoundSearchWordsWithClassElement(_howto.category, _searchText);
			}

			setHowtos(_howtos);
		}
		setSearchText(_searchText);
	};

	useEffect(() => {
		initialHowtos = initialHowtos.sort((a, b) =>
			a.systemWhenCreated < b.systemWhenCreated ? 1 : -1
		);
		setHowtos(initialHowtos);
		handleSearchTextChange(searchText);
	}, []);

	// focuses cursor after loading graphic
	useEffect(() => {
		if (howtos.length > 0) {
			setTimeout(() => {
				if (searchTextRef.current) {
					searchTextRef.current.focus();
				}
			}, 10);
		}
	}, [howtos]);

	const howtosAreReady = () => howtos.length > 0 || searchText.trim() !== '';

	return (
		<>
			{howtosAreReady() ? (
				<p className="text-3xl mb-3">{howtos.length} Howtos</p>
			) : (
				<p className="text-3xl mb-3 flex gap-1">
					<FaSpinner className="loaderIcon" /> Howtos
				</p>
			)}
			<input
				value={searchText}
				onChange={(e) => handleSearchTextChange(e.target.value)}
				className="text-3xl placeholder-slate-300 text-slate-500 rounded p-1 mb-5 sm:w-full lg:w-[30rem] "
				autoFocus
				ref={searchTextRef}
				disabled={!howtosAreReady()}
				placeholder={howtosAreReady() ? 'search howtos' : ''}
			/>
			{howtos.map((howto, index) => {
				return (
					<div key={index} className="mb-3">
						<div className="text-yellow-400 smallcaps text-sm text-opacity-70">
							{qdat.smartDateWithYear(howto.systemWhenCreated)} -{' '}
							<span dangerouslySetInnerHTML={{ __html: howto.styledCategory }}></span>
						</div>
						<div><span className="searchHighlight"></span></div>
						<Link href={`/howtos/${howto.id}`} className='howtoLink'>
							<span className="text-slate-50 text-xl" dangerouslySetInnerHTML={{ __html: howto.styledTitle }}></span>
						</Link>
					</div>
				);
			})}
		</>
	);
}
