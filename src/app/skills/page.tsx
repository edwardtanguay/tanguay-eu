'use client';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import skills from '../../data/itemtype_skills.json';

export default function Howtos() {

	const { searchText, setSearchText, filteredHowtos, setFilteredHowtos, howtos } = useContext(AppContext);

	return (
		<h2>There are {skills.length} skills</h2>
	);
}
