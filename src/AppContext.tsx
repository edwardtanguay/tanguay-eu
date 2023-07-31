"use client";
import { useState, useEffect } from 'react';
import { createContext } from 'react';
import rawHowtos from './data/itemtype_howtos.json';

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
		setHowtos(initialHowtos);
		setFilteredHowtos(initialHowtos);
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