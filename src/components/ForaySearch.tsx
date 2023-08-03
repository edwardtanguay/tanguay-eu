'use client';
import { useEffect, useRef, useState } from 'react';
import * as qdat from '../qtools/qdat';
import * as qstr from '../qtools/qstr';
import { FaSpinner } from 'react-icons/fa';
import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { IForay } from '../interfaces';
import { BiSolidCircle } from 'react-icons/bi';
import { BiSolidRightArrow } from 'react-icons/bi';
import * as config from '../config';

let siteMode = '';

export default function ForaySearch() {
	const searchTextRef = useRef<HTMLInputElement>(null);
	const { searchText, setSearchText, filteredForays, setFilteredForays, forays } = useContext(AppContext);
	const [clickedAndWaiting, setClickedAndWaiting] = useState(false);

	const handleSearchTextChange = (_searchText: string) => {
		if (_searchText.length >= 3) {

			const _forays: IForay[] = [];

			forays.forEach(m => m.selectedForSearch = false);

			// primary result group
			for (const foray of forays) {
				const bulkSearch = foray.category + '|' + foray.title;
				if (qstr.textContainsAllTerms(bulkSearch, _searchText)) {
					_forays.push(foray);
					foray.selectedForSearch = true;
				}
			}
			// secondary result group
			for (const foray of forays) {
				const bulkSearch = foray.category + '|' + foray.title + '|' + foray.body;
				if (qstr.textContainsAllTerms(bulkSearch, _searchText)) {
					if (!foray.selectedForSearch) {
						_forays.push(foray);
						foray.selectedForSearch = true;
					}
				}
			}

			for (const _foray of _forays) {
				_foray.styledTitle = qstr.wrapFoundSearchWordsWithClassElement(_foray.title, _searchText);
				_foray.styledCategory = qstr.wrapFoundSearchWordsWithClassElement(_foray.category, _searchText);
			}

			setFilteredForays(_forays);
		} else {
			if (_searchText.trim().length === 0) {
				const _forays = [...forays];
				for (const _foray of _forays) {
					_foray.styledTitle = _foray.title;
					_foray.styledCategory = _foray.category;
				}
				setFilteredForays(_forays);
			} else {
				for (const filteredForay of filteredForays) {
					filteredForay.styledTitle = qstr.wrapFoundSearchWordsWithClassElement(filteredForay.title, _searchText);
					filteredForay.styledCategory = qstr.wrapFoundSearchWordsWithClassElement(filteredForay.category, _searchText);
				}
			}
		}
		setSearchText(_searchText);
	};

	useEffect(() => {
		setFilteredForays(forays);
		handleSearchTextChange(searchText);
		siteMode = config.siteMode();
	}, []);

	// focuses cursor after loading graphic
	useEffect(() => {
		if (filteredForays.length > 0) {
			setTimeout(() => {
				if (searchTextRef.current) {
					searchTextRef.current.focus();
				}
			}, 10);
		}
	}, [filteredForays]);

	const foraysAreReady = () => filteredForays.length > 0 || searchText.trim() !== '';

	const userUxLoadSinglePage = () => {
		setClickedAndWaiting(true);
	}

	return (
		<>
			{clickedAndWaiting ? (
				<FaSpinner className="loaderIcon text-9xl text-slate-600" />
			) : (
				<>
					{foraysAreReady() ? (
						<>
							<p className='mb-4'><span className='text-yellow-200'>foray n.</span> <span>a sudden incursion into a tool or technology, especially to obtain knowledge or skills; a learning raid</span></p>
							<p className="text-3xl mb-3">{qstr.smartPlural(filteredForays.length, 'Foray')}</p>
						</>
					) : (
						<p className="text-3xl mb-3 flex gap-1">
							<FaSpinner className="loaderIcon" /> Forays
						</p>
					)}
					<input
						value={searchText}
						onChange={(e) => handleSearchTextChange(e.target.value)}
						className="text-3xl placeholder-slate-300 text-slate-500 rounded p-1 mb-5 sm:w-full lg:w-[30rem] "
						autoFocus
						ref={searchTextRef}
						disabled={!foraysAreReady()}
						placeholder={foraysAreReady() ? 'search forays' : ''}
					/>
					{filteredForays.map((filteredForay, index: number) => {
						return (
							<div key={index} className="forayItem mb-3">
								<div className="text-yellow-400 smallcaps text-sm text-opacity-70">
									{qdat.smartDateWithYear(filteredForay.systemWhenCreated)} -{' '}

									{siteMode === 'development' && (
										<span> <a target="_blank" href={`http://localhost:29900/manageForay?returnUrl=forays%C2%A7openItemIds=${filteredForay.id}|id=${filteredForay.id}&command=edit&id=${filteredForay.id}`}>EDIT</a> - </span>
									)}
									<span dangerouslySetInnerHTML={{ __html: filteredForay.styledCategory }}></span>
									<span> - {filteredForay.rank} stars</span>
								</div>
								<div><span className="searchHighlight"></span></div>
								<Link href={`/forays/${filteredForay.id}`} className='forayLink' onClick={(e) => { userUxLoadSinglePage() }}>
									<span className="text-slate-50 text-xl" dangerouslySetInnerHTML={{ __html: filteredForay.styledTitle }}></span>
								</Link>
								<div className='flex items-start gap-1 '>
									{filteredForay.progressIdCode === 'unstarted' && (
										<>
											<BiSolidRightArrow className="progressUnstartedIcon progressIcon" />
												<span className='progressUnstarted' dangerouslySetInnerHTML={{ __html: filteredForay.progressMessage }}></span>
										</>
									)}
									{filteredForay.progressIdCode === 'doing' && (
										<>
											<BiSolidRightArrow className="progressDoingIcon progressIcon" />
											<span className='progressDoing' dangerouslySetInnerHTML={{ __html: filteredForay.progressMessage }}></span>
										</>
									)}
									{filteredForay.progressIdCode === 'nextStep' && (
										<>
											<BiSolidRightArrow className="progressNextStepIcon progressIcon" />
											<span className='progressNextStep' dangerouslySetInnerHTML={{ __html: filteredForay.progressMessage }}></span>
										</>
									)}
								</div>
							</div>
						);
					})}
				</>
			)}
		</>
	);
}
