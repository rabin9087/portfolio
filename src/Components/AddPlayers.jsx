import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import styles from '../style.module.css';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { teamName } from '../Pages/Home/Home';


const AddPlayers = () => {

  const teams = useContext(teamName)
  const navigateStartGame = useNavigate();

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
   
  return (
    <div className={styles.addPlayers}>
      <div >
        <div className={styles.teamGroup}>
        <form action="">
        <h1 className={styles.addPlayerHeading}>Add players to {teams.teamA}</h1>
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
                  <div key={playersA.id1} className={styles.playernameHeading}>
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
        <h1 className={styles.addPlayerHeading} >Add players to {teams.teamB}</h1>

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
        <button className= {styles.startGameButton} type='submit' onClick={() => navigateStartGame('/startGame')}>Start Game</button>
        </div>
        </div>

              <ToastContainer/>
    </div>
  )
}
export default AddPlayers;