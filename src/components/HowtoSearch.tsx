'use client';
import { useEffect, useRef, useState } from 'react';
import * as qdat from '../qtools/qdat';
import * as qstr from '../qtools/qstr';
import { FaSpinner } from 'react-icons/fa';
import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

export default function HowtoSearch() {
	const searchTextRef = useRef<HTMLInputElement>(null);
	const { searchText, setSearchText, filteredHowtos, setFilteredHowtos, howtos } = useContext(AppContext);
	const [clickedAndWaiting, setClickedAndWaiting] = useState(false);

	const handleSearchTextChange = (_searchText: string) => {
		if (_searchText.length >= 3) {

			const _howtos: IHowto[] = [];

			howtos.forEach(m => m.selectedForSearch = false);

			// primary result group
			for (const howto of howtos) {
				const bulkSearch = howto.category + '|' + howto.title;
				if (qstr.textContainsAllTerms(bulkSearch, _searchText)) {
					_howtos.push(howto);
					howto.selectedForSearch = true;
				}
			}
			// secondary result group
			for (const howto of howtos) {
				const bulkSearch = howto.category + '|' + howto.title + '|' + howto.body;
				if (qstr.textContainsAllTerms(bulkSearch, _searchText)) {
					if (!howto.selectedForSearch) {
						_howtos.push(howto);
						howto.selectedForSearch = true;
					}
				}
			}

			for (const _howto of _howtos) {
				_howto.styledTitle = qstr.wrapFoundSearchWordsWithClassElement(_howto.title, _searchText);
				_howto.styledCategory = qstr.wrapFoundSearchWordsWithClassElement(_howto.category, _searchText);
			}

			setFilteredHowtos(_howtos);
		} else {
			if (_searchText.trim().length === 0) {
				const _howtos = [...howtos];
				for (const _howto of _howtos) {
					_howto.styledTitle = _howto.title;
					_howto.styledCategory = _howto.category;
				}
				setFilteredHowtos(_howtos);
			} else {
				for (const filteredHowto of filteredHowtos) {
					filteredHowto.styledTitle = qstr.wrapFoundSearchWordsWithClassElement(filteredHowto.title, _searchText);
					filteredHowto.styledCategory = qstr.wrapFoundSearchWordsWithClassElement(filteredHowto.category, _searchText);
				}
			}
		}
		setSearchText(_searchText);
	};

	useEffect(() => {
		setFilteredHowtos(howtos);
		handleSearchTextChange(searchText);
	}, []);

	// focuses cursor after loading graphic
	useEffect(() => {
		if (filteredHowtos.length > 0) {
			setTimeout(() => {
				if (searchTextRef.current) {
					searchTextRef.current.focus();
				}
			}, 10);
		}
	}, [filteredHowtos]);

	const howtosAreReady = () => filteredHowtos.length > 0 || searchText.trim() !== '';

	const userUxLoadSinglePage = () => {
		setClickedAndWaiting(true);
	}

	return (
		<>
			{clickedAndWaiting ? (
				<FaSpinner className="loaderIcon text-9xl text-slate-600" />
			) : (
				<>
					{howtosAreReady() ? (
						<p className="text-3xl mb-3">{filteredHowtos.length} Howtos</p>
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
					{filteredHowtos.map((filteredHowto, index: number) => {
						return (
							<div key={index} className="mb-3">
								<div className="text-yellow-400 smallcaps text-sm text-opacity-70">
									{qdat.smartDateWithYear(filteredHowto.systemWhenCreated)} -{' '}
									<span dangerouslySetInnerHTML={{ __html: filteredHowto.styledCategory }}></span>
								</div>
								<div><span className="searchHighlight"></span></div>
								<Link href={`/howtos/${filteredHowto.id}`} className='howtoLink' onClick={(e) => { userUxLoadSinglePage() }}>
									<span className="text-slate-50 text-xl" dangerouslySetInnerHTML={{ __html: filteredHowto.styledTitle }}></span>
								</Link>
							</div>
						);
					})}
				</>
			)}
		</>
	);
}
