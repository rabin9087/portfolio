import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import styles from '../style.module.css';
import shortid from 'shortid';
import {  Link} from 'react-router-dom';
import StartGame from './StartGame';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddPlayers = ({team, setToss, setBattingOrBowling}) => {

  const [formDisplay, setFormDisplay]=useState(true);

    const [players, setPlayers] = useState ({
        addPlayerteamA: '',
        addPlayerteamB: '',
    })

    const [teamAPlayers, setTeamAPlayers] = useState([]);
    const [teamBPlayers, setTeamBPlayers] = useState([]);

    const inputPlayers = (e) => {
      const name = e.target.name;
      const value = e.target.value;

     setPlayers((preValue) => {
      if(name === 'A') {
          return {
            addPlayerteamA: value,
            addPlayerteamB: preValue.addPlayerteamB
      };
    } else if (name === 'B') {
      return {
        addPlayerteamA: preValue.addPlayerteamA,
        addPlayerteamB: value
      }
    }
     })
    }

    const handelSubmitTeamA = (e) => {
      e.preventDefault();
      if(players.addPlayerteamA !== ''){
      setTeamAPlayers([...teamAPlayers, {nameA: players.addPlayerteamA, id1: shortid.generate()}])
      setPlayers( {
        addPlayerteamA: '',
        addPlayerteamB: ''
      })
    } else{
      return (
        <></>
      )
    }
    }
    const handelSubmitTeamB = (e) => {
      e.preventDefault();
      if(players.addPlayerteamB !== ''){
      setTeamBPlayers([...teamBPlayers, {nameB: players.addPlayerteamB, id2: shortid.generate()}])
      setPlayers( {
        addPlayerteamA: '',
        addPlayerteamB: ''
      })
    } else{
      return (
        <></>
      )
    }
    }
  
    const deletePlayerA = (deletingPlayer) => {
    //  alert('Delete successfull')
      
      const newPlayer = teamAPlayers.filter((playerA) => playerA !== deletingPlayer)
        setTeamAPlayers(newPlayer)
        toast.success("Delete successful", {
          position:"top-center",
         theme:"colored"
        });
    }

    const deletePlayerB = (deletingPlayer) => {
      const newPlayer = teamBPlayers.filter((playerB) => playerB !== deletingPlayer)
      setTeamBPlayers(newPlayer)
      toast.success("Delete successful", {
        position:"top-center",
        theme:"colored"
      });
    }

    const  initiateStartGame=(e)=>
 {
  e.preventDefault();
  if(formDisplay){
  setFormDisplay(false)
  } else { 
    setFormDisplay(true)
    
 }
}
    
  return (
    <div className={styles.addPlayers}>
      <div className={formDisplay?styles.display:styles.displayNone}>
        <div className={styles.teamGroup}>
        <form action="">
        <h1 className={styles.addPlayerHeading}>Add players to {team.teamA}</h1>
        <input className={styles.inputPlayersName}
         name='A'
         value={players.addPlayerteamA}
         type='text'
         onChange={inputPlayers}
         placeholder='Add Player Name' />

        <button type='submit' onClick={handelSubmitTeamA} className={styles.teamButton}>Add Player</button>
        </form>

        <div className={styles.addPlayers}>
          {
            teamAPlayers.map((playersA,index) => {
                return(
                  <div key={playersA.id1} className={styles.playername}>
                    {index +1 }. {playersA.nameA} 
                    <button className={styles.deletebutton} onClick={() => deletePlayerA(playersA)}>Delete</button>
                    </div>
                )
            })
          }
        </div>
        </div>
        <div className={styles.teamGroup}>
            <form action="">
        <h1 className={styles.addPlayerHeading} >Add players to {team.teamB}</h1>

        <input className={styles.inputPlayersName}
         name='B'
         onChange={inputPlayers}
         value={players.addPlayerteamB}
         type='text' 
         placeholder='Add Player Name' />

        <button type='submit' onClick={handelSubmitTeamB} className={styles.teamButton}>Add Player</button>
        </form>
        <div className={styles.addPlayers}>
          {
            teamBPlayers.map((playersB,index) => {
                return(
                  <div key={playersB.id2} className={styles.playernameHeading} >
                  {index +1 }. {playersB.nameB} 
                  <button className={styles.deletebutton} onClick={() => deletePlayerB(playersB)}>Delete</button>
                    </div>
                )
            })         
          }  
        </div>
        </div>
        <div className= {styles.startGameDiv}>
       
        {/* <button className= {styles.startGameButton} type='submit' onClick={initiateStartGame}>Start Game</button> */}

        <Link className='content' to="/startgame">
        <button className= {styles.startGameButton} type='submit'>Start Game</button>
        </Link>
        </div>
        </div>

        <div className="">
			        <Routes>
                {/* <Switch> */}
         			<Route path="/startgame" element={ <StartGame 
                team ={team} setToss = {setToss} setBattingOrBowling = {setBattingOrBowling} 
                setTeamAPlayers = {setTeamAPlayers} setTeamBPlayers = {setTeamBPlayers}
                />
              }/>
              {/* </Switch> */}
              </Routes>
		</div>
              <ToastContainer/>
    </div>
  )
}
export default AddPlayers;