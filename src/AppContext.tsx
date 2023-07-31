"use client";
import { useState, useEffect } from 'react';
import { createContext } from 'react';
import * as appModel from './appModel';

interface IAppContext {
	searchText: string;
	setSearchText: (searchText: string) => void;
	filteredHowtos: IHowto[];
	setFilteredHowtos: (howtos: IHowto[]) => void;
	howtos: IHowto[];
	setHowtos: (howtos: IHowto[]) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [searchText, setSearchText] = useState('');
	const [filteredHowtos, setFilteredHowtos] = useState<IHowto[]>([]);
	const [howtos, setHowtos] = useState<IHowto[]>([]);

	useEffect(() => {
		setHowtos(appModel.howtos);
		setFilteredHowtos(appModel.howtos);
	}, []);

	return (
		<AppContext.Provider
			value={{
				searchText,
				setSearchText,
				filteredHowtos,
				setFilteredHowtos,
				howtos,
				setHowtos
			}}
		>
			{children}
		</AppContext.Provider>
	)
}