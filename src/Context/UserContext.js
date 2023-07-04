import React, { useContext, useState } from 'react';

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export function useUser() {
	return useContext(UserContext);
}

export function useUserUpdate() {
	return useContext(UserUpdateContext);
}

export function UserProvider({ children }) {
	const [ isUserLogedIn, setIsUserLogedIn ] = useState(true);

	function updateLogedInStatus() {
		setIsUserLogedIn((logedInStatus) => !logedInStatus);
	}

	return (
		<UserContext.Provider value={isUserLogedIn}>
			<UserUpdateContext.Provider value={updateLogedInStatus}>{children}</UserUpdateContext.Provider>
		</UserContext.Provider>
	);
}
