import React, { useContext, useState } from 'react'
import styles from '../../style.module.css';
import Login from '../Login';
import { useUser } from '../../Context/UserContext';
import { TeamContext } from '../../Context/TeamContext';
import { useNavigate } from 'react-router-dom';


const Score = () => {

  const addPlayer = useNavigate();

  const {team, updateTeamsStatus} = useContext(TeamContext);

  const handleTeamName = (e) => {
    const{name, value} = e.target;
    updateTeamsStatus( name, value)
    }
  
  const {toss, setToss} = useContext(TeamContext);
  const {teamA, teamB, over} = team;
  const [formDisplay, setFormDisplay]=useState(true);
  const [registeredTeam, setRegisteredTeam] = useState([]);
  
  const {battingOrBowling, setBattingOrBowling} = useContext(TeamContext);

  const handleTossWon = (e) => {
    setToss(e.target.value);
  }

   
 const  nextAddPlayers=(e)=>
 {
  e.preventDefault();
  if(teamA !== '' && teamB !== ''  && over !== 0) { 
    const newTeam = {...team, id: new Date().getTime.toString}
    setRegisteredTeam([...registeredTeam, newTeam])
  
    if(team.teamA === '' || team.teamB === '' || team.over === 0){
    setFormDisplay(true)
    } else {
      setFormDisplay(false)
   }
  } else {
    alert('Please Enter all Teams name')
  }
 
 }

 const isUserLogedIn = useUser();

  return (<div>
       {isUserLogedIn ? <div>
      <div className={formDisplay?styles.display:styles.displayNone}>
      
      <div>
        <div className= {styles.teamsName}>
        <h1 className={styles.heading}>Enter the teams Name</h1>
          <input className= {styles.teamInput}
          autoComplete='off'
          type='text'
          name='teamA'
          onChange={(handleTeamName)}
          value={team.teamA} 
          placeholder='Enter Your team name' />

          <span 
          style={{ color: "aqua", background: "black", fontSize: "20px", padding: "15px", height: "30px",
          margin: "20px"}}>
            VS
          </span>

          <input className= {styles.teamInput}  type='text' 
          autoComplete='off'
          name='teamB'
          onChange={handleTeamName}
          value={team.teamB}
          placeholder='Enter opponent team name' /> 

          <br /> 

        <label className= {styles.teamInput} > Enter number of Over: </label>
        <input  className= {styles.teamButton}
          type='number' 
          autoComplete='off'
          name='over'
          onChange={handleTeamName}
          value={team.over}
           /> 
        
          <br />

          <button type='submit' className= {styles.teamButton} onClick={nextAddPlayers}>Next</button> 
      </div>

      </div>
      <br />
      </div>  

    <div className={formDisplay?styles.displayNone : styles.display}>
  <div className={styles.registeredTeamsName}>
      {registeredTeam.map((registeredTeamName) => {

        let date = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
      
        return (
            <div key={registeredTeamName.id}>
              
              <h1 className={styles.date}>Date: {date} - {1 + month} - {year}</h1>
                <h1 > {registeredTeamName.teamA} VS {registeredTeamName.teamB} </h1>
                <h1 > {registeredTeamName.over}  Over Game</h1>

               <label className= {styles.toss} > Toss Won By: </label>
                
               <select className={styles.teamButton} value={toss} onChange={handleTossWon}>
               <option value= ''>Select a team</option>
                 <option value= {registeredTeamName.teamA}>{registeredTeamName.teamA}</option>
                 <option value={registeredTeamName.teamB}>{registeredTeamName.teamB}</option>
               </select>

           <br />
        <label className= {styles.toss} > Selected to: </label>
               <select className={styles.teamButton} value={battingOrBowling} onChange={e => setBattingOrBowling(e.target.value) }>
               {/* <option value= ''>Batting or Bowling</option> */}
                 <option value= 'batting'>Batting First</option>
                 <option value='bowling'>Bowling First</option>
        </select>

            <div>
            <button className= {styles.startGameButton} onClick={() => addPlayer('/addPlayers')}>Next</button>
              </div>
         
            </div>     
        )
      })}

    </div>
    </div>
    </div> : <Login/>}
    

    </div>
  )
  }
export default Score;
