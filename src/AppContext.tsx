"use client";
import { createContext } from 'react';

interface IAppContext {
	message: string;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const message = 'this is a variable from AppContext';

	return (
		<AppContext.Provider
			value={{
				message
			}}
		>
			{children}
		</AppContext.Provider>
	)
}