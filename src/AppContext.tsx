"use client";
import { useState, useEffect } from 'react';
import { createContext } from 'react';
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

	useEffect(() => {
		setHowtos(appModel.howtos);
		setFilteredHowtos(appModel.howtos);
		setForays(appModel.forays);
		setFilteredForays(appModel.forays);
	}, []);

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
				setFilteredForays
			}}
		>
			{children}
		</AppContext.Provider>
	)
}