import React, { useContext, useState } from 'react';

export const TeamContext = React.createContext();

export function TeamProvider({ children }) {
	const [ team, setTeam ] = useState({
		teamA: '',
		teamB: '',
		over: 20
	});

	function updateTeamsStatus(field, value) {
		setTeam((prevTeam) => ({
			...prevTeam,
			[field]: value
		}));
	}

	const [ toss, setToss ] = useState(team.teamA);

	const [ battingOrBowling, setBattingOrBowling ] = useState('batting');

	const [ teamAPlayers, setTeamAPlayers ] = useState([]);
	const [ teamBPlayers, setTeamBPlayers ] = useState([]);

	const [ run, setRun ] = useState(0);
	const [ wicket, setWicket ] = useState(0);

	return (
		<TeamContext.Provider
			value={{
				//set Team
				team,
				updateTeamsStatus,
				//set Toss
				toss,
				setToss,
				//Select BattingOrBowling
				battingOrBowling,
				setBattingOrBowling,

				teamAPlayers,
				setTeamAPlayers,

				teamBPlayers,
				setTeamBPlayers,

				run,
				setRun,

				wicket,
				setWicket
			}}
		>
			{children}
		</TeamContext.Provider>
	);
}
