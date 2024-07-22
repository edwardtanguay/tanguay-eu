'use client';
import { useEffect, useRef, useState } from 'react';
import * as qdat from '../qtools/qdat';
import * as qstr from '../qtools/qstr';
import { FaSpinner } from 'react-icons/fa';
import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Skill } from '../interfaces';

export default function SkillSearch() {
	const searchTextRef = useRef<HTMLInputElement>(null);
	const { searchText, setSearchText, filteredSkills, setFilteredSkills, skills } = useContext(AppContext);
	const [clickedAndWaiting, setClickedAndWaiting] = useState(false);

	const handleSearchTextChange = (_searchText: string) => {
		if (_searchText.length >= 3) {

			const _skills: Skill[] = [];

			skills.forEach(m => m.selectedForSearch = false);

			// primary result group
			for (const skill of skills) {
				const bulkSearch = skill.category + '|' + skill.title;
				if (qstr.textContainsAllTerms(bulkSearch, _searchText)) {
					_skills.push(skill);
					skill.selectedForSearch = true;
				}
			}
			// secondary result group
			for (const skill of skills) {
				const bulkSearch = skill.category + '|' + skill.title + '|' + skill.body;
				if (qstr.textContainsAllTerms(bulkSearch, _searchText)) {
					if (!skill.selectedForSearch) {
						_skills.push(skill);
						skill.selectedForSearch = true;
					}
				}
			}

			for (const _skill of _skills) {
				_skill.styledTitle = qstr.wrapFoundSearchWordsWithClassElement(_skill.title, _searchText);
				_skill.styledCategory = qstr.wrapFoundSearchWordsWithClassElement(_skill.category, _searchText);
			}

			setFilteredSkills(_skills);
		} else {
			if (_searchText.trim().length === 0) {
				const _skills = [...skills];
				for (const _skill of _skills) {
					_skill.styledTitle = _skill.title;
					_skill.styledCategory = _skill.category;
				}
				setFilteredSkills(_skills);
			} else {
				for (const filteredSkill of filteredSkills) {
					filteredSkill.styledTitle = qstr.wrapFoundSearchWordsWithClassElement(filteredSkill.title, _searchText);
					filteredSkill.styledCategory = qstr.wrapFoundSearchWordsWithClassElement(filteredSkill.category, _searchText);
				}
			}
		}
		setSearchText(_searchText);
	};

	useEffect(() => {
		setFilteredSkills(skills);
		handleSearchTextChange(searchText);
	}, []);

	// focuses cursor after loading graphic
	useEffect(() => {
		if (filteredSkills.length > 0) {
			setTimeout(() => {
				if (searchTextRef.current) {
					searchTextRef.current.focus();
				}
			}, 10);
		}
	}, [filteredSkills]);

	const skillsAreReady = () => filteredSkills.length > 0 || searchText.trim() !== '';

	const userUxLoadSinglePage = () => {
		setClickedAndWaiting(true);
	}

	return (
		<>
			{clickedAndWaiting ? (
				<FaSpinner className="loaderIcon text-9xl text-slate-600" />
			) : (
				<>
					{skillsAreReady() ? (
						<p className="text-3xl mb-3">{qstr.smartPlural(filteredSkills.length, 'Skill')}</p>
					) : (
						<p className="text-3xl mb-3 flex gap-1">
							<FaSpinner className="loaderIcon" /> Skills
						</p>
					)}
					<input
						value={searchText}
						onChange={(e) => handleSearchTextChange(e.target.value)}
						className="text-3xl placeholder-slate-300 text-slate-500 rounded p-1 mb-5 sm:w-full lg:w-[30rem] "
						autoFocus
						ref={searchTextRef}
						disabled={!skillsAreReady()}
						placeholder={skillsAreReady() ? 'search skills' : ''}
					/>
					{filteredSkills.map((filteredSkill, index: number) => {
						return (
							<div key={index} className="mb-3">
								<div className="text-yellow-400 smallcaps text-sm text-opacity-70">
									{qdat.smartDateWithYear(filteredSkill.dpodWhenCreated)} -{' '}
									<span dangerouslySetInnerHTML={{ __html: filteredSkill.styledCategory }}></span>
								</div>
								<div><span className="searchHighlight"></span></div>
								<Link href={`/skills/${filteredSkill.dpodId}`} className='skillLink' onClick={(e) => { userUxLoadSinglePage() }}>
									<span className="text-slate-50 text-xl" dangerouslySetInnerHTML={{ __html: filteredSkill.styledTitle }}></span>
								</Link>
							</div>
						);
					})}
				</>
			)}
		</>
	);
}
