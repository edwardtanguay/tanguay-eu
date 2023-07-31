"use client";
import { useState} from 'react';
import { createContext } from 'react';

interface IAppContext {
	searchText: string;
	setSearchText: (searchText: string) => void;
	howtos: IHowto[];
	setHowtos: (howtos: IHowto[]) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [searchText, setSearchText] = useState('');
	const [howtos, setHowtos] = useState<IHowto[]>([]);

	return (
		<AppContext.Provider
			value={{
				searchText,
				setSearchText,
				howtos,
				setHowtos
			}}
		>
			{children}
		</AppContext.Provider>
	)
}