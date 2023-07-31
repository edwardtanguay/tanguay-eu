"use client";
import { useState} from 'react';
import { createContext } from 'react';

interface IAppContext {
	searchText: string;
	setSearchText: (searchText: string) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [searchText, setSearchText] = useState('');

	return (
		<AppContext.Provider
			value={{
				searchText,
				setSearchText
			}}
		>
			{children}
		</AppContext.Provider>
	)
}