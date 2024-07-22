"use client";
import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { IHowto, IForay, AreaShowing, FrontendStarter, FrontendStarterTechnology, Skill } from './interfaces';
import * as appModel from './models/model';

interface IAppContext {
	searchText: string;
	setSearchText: (searchText: string) => void;
	howtos: IHowto[];
	setHowtos: (howtos: IHowto[]) => void;
	filteredHowtos: IHowto[];
	setFilteredHowtos: (howtos: IHowto[]) => void;
	forays: IForay[];
	setForays: (forays: IForay[]) => void;
	filteredForays: IForay[];
	setFilteredForays: (forays: IForay[]) => void;
	areaShowing: AreaShowing;
	setAreaShowing: (areaShowing: AreaShowing) => void;
	handleFlip: () => void;
	frontendStarters: FrontendStarter[];
	frontendDatapodStarterTechnologies: FrontendStarterTechnology[];
	frontendOtherStarterTechnologies: FrontendStarterTechnology[];
	skills: Skill[]
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [searchText, setSearchText] = useState('');
	const [howtos, setHowtos] = useState<IHowto[]>([]);
	const [filteredHowtos, setFilteredHowtos] = useState<IHowto[]>([]);
	const [forays, setForays] = useState<IForay[]>([]);
	const [filteredForays, setFilteredForays] = useState<IForay[]>([]);
	const [areaShowing, setAreaShowing] = useState<AreaShowing>('startersArea2');
	const [frontendStarters, setFrontendStarters] = useState<FrontendStarter[]>([]);
	const [frontendDatapodStarterTechnologies, setFrontendDatapodStarterTechnologies] = useState<FrontendStarterTechnology[]>([]);
	const [frontendOtherStarterTechnologies, setFrontendOtherStarterTechnologies] = useState<FrontendStarterTechnology[]>([]);
	const [skills, setSkills] = useState<Skill[]>([]);

	useEffect(() => {
		setHowtos(appModel.howtos);
		setFilteredHowtos(appModel.howtos);
		setForays(appModel.forays);
		setFilteredForays(appModel.forays);
		setFrontendStarters(appModel.frontendStarters)
		setFrontendDatapodStarterTechnologies(appModel.frontendDatapodStarterTechnologies)
		setFrontendOtherStarterTechnologies(appModel.frontendOtherStarterTechnologies)
		setSkills(appModel.skills);
	}, []);

	const handleFlip = () => {
		const _areaShowing: AreaShowing = areaShowing === 'startersArea1' ? 'startersArea2' : 'startersArea1';
		setAreaShowing(_areaShowing);
	}

	return (
		<AppContext.Provider
			value={{
				searchText,
				setSearchText,
				howtos,
				setHowtos,
				filteredHowtos,
				setFilteredHowtos,
				forays,
				setForays,
				filteredForays,
				setFilteredForays,
				areaShowing,
				setAreaShowing,
				handleFlip,
				frontendStarters,
				frontendDatapodStarterTechnologies,
				frontendOtherStarterTechnologies,
				skills
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
