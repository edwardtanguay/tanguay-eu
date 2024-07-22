'use client';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import SkillSearch from '@/components/SkillSearch';

export default function Howtos() {

	const {skills} = useContext(AppContext);

	return (
		<SkillSearch />
	);
}
