import React, { useState, useEffect, useContext } from 'react'
import {useNavigate } from 'react-router-dom';
import styles from '../style.module.css';
import { TeamContext } from '../Context/TeamContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Row, Col } from 'react-bootstrap'; // Import Row and Col components from react-bootstrap

const StartGame = () => {
  
  const addPlayer = useNavigate();

  const {team} = useContext(TeamContext)

  const {teamAPlayers} = useContext(TeamContext);
  const {teamBPlayers} = useContext(TeamContext);

  const {battingOrBowling} = useContext(TeamContext);

  //toss is equal to toss won team name
  //let tossWon
  const {toss} = useContext(TeamContext);
  // if (toss === '' && (battingOrBowling==='bowling' || toss === '') ){
  //   tossWon = team.teamA
  // } else {
  //   tossWon= toss
  // }
  // console.log('Batting team', toss)

  const [run, setRun] = useState(0);
 const [wicket, setWicket] = useState(0)


 // batting variables
 const [runScored, setRunScored] = useState(0)
 const [ballFaced, setballFaced] = useState(0)
 const [fourHit, setFourHit] = useState(0)
 const [sixHit, setSixHit] = useState(0)

 //bowling variables
 const [overBowled, setOverBowled] = useState(0.0)
 const [runGiven, setRunGiven] = useState(0);
 const [median, setMedian] = useState(0);
 const [wicketTaken, setWicketTaken] = useState(0);
  
    let battingFirst
    let battingTeam
    let bowlingTeam;

  if (battingOrBowling === 'batting' && toss === team.teamA){
    battingFirst = team.teamA;
    battingTeam = teamAPlayers;
    bowlingTeam = teamBPlayers;

  } else if (battingOrBowling === 'bowling' && toss === team.teamA){
    battingFirst = team.teamB
    battingTeam = teamBPlayers;
    bowlingTeam = teamAPlayers;
  }
  else if(battingOrBowling === 'batting' && toss === team.teamB){
    battingFirst = team.teamB 
    battingTeam = teamBPlayers;
    bowlingTeam = teamAPlayers; 
  }  else if (battingOrBowling === 'bowling' && toss === team.teamB){
    battingFirst = team.teamA;
    battingTeam = teamAPlayers;
    bowlingTeam = teamBPlayers;
  }

  // const battingteamName =() => {

  //   if(battingFirst === team.teamA){
  //     //battingTeam = teamAPlayers;
  //     console.log("Batting team Name: ", teamAPlayers)
  //     return(
        
  //       teamAPlayers.map((playersA, index) =>{
  //         return(
  //          <option key={playersA.id1} value={playersA.nameA}>
  //           {playersA.nameA}
  //          </option>
  //         )
  //     })
  //     )
  //   } else if (battingFirst === team.teamB){
  //     return (
  //       teamBPlayers.map((playersB, index) =>{
  //         return(
  //          <option key={playersB.id2} value={playersB.nameB}>
  //           {playersB.nameB}
  //          </option>
  //         )
  //     })
  //     )
  //   }
  // }
  

  
  // if (battingFirst === team.teamA && battingOrBowling === 'batting') {
  //   battingTeam = teamAPlayers;
  //   bowlingTeam = teamBPlayers;
  // } else if(battingFirst === team.teamB){
  //   battingTeam = teamBPlayers
  //   bowlingTeam = teamAPlayers;
  // }

//   console.log('battingteam:' ,battingTeam)



// if(battingFirst === team.teamA){
//   bowlingTeam = teamBPlayers
// } else if(battingFirst === team.teamB){
//   bowlingTeam = teamAPlayers;
// }
 

  const [selectedBatsmanName, setselectedBatsmanName] = useState('');

  const handleSelectBatsMan = (event) => {
    setselectedBatsmanName(event.target.value);
  };

  const [selectedBowlersName, setselectedBowlersName] = useState('')

  const handleSelectBowler = (e) => {
    setselectedBowlersName(e.target.value)
  }

 const out = () => {
  setWicket(wicket + 1)
 }

 const bye = () => {
  
 }

 const lb = () => {
  
 }

 const wide = () => {
  setRun(run + 1)
 }

 const nb = () => {
  setRun(run + 1)
  
 }
 
 const addRun =(value) => {
  setRun(value + run)
  console.log(run)
 }

  useEffect(() => {
  //  getScore();
  }, [])

  return (
    <>
    <div>
      
<br />
      
    </div>
    <h1 className={styles.teamGroup}>{team.teamA} vs {team.teamB}</h1>
    <h1>Toss won by {toss} and selected {battingOrBowling} first</h1>
     
     <div>
    <h1>Batting Team: {battingFirst}</h1>
          
          <div>
          Select  strike batsman:
            <select value={selectedBatsmanName} onChange={handleSelectBatsMan}>

              {battingTeam.map((playersA, index) =>{
                  return(
                   <option key={playersA.id1} value={playersA.nameA}>
                    {playersA.nameA}
                   </option>
                  )
              })}

            </select>
            &nbsp; &nbsp;
          Select non-strike batsman:
          <select value={selectedBatsmanName} onChange={handleSelectBatsMan}>
             {/* (battingTeam === team.teamB)  */}

             {battingTeam.map((playersB, index) =>{
                  return(
                   <option key={playersB.id2} value={playersB.nameB}>
                    {playersB.nameB}
                   </option>
                  )
              })}
            </select>
          </div>
              <br />
          <div className={styles.teamGroup}>
            <Row>
              <Col>Batsman Name</Col>
              <Col>Run</Col>
              <Col>Ball</Col>
              <Col>4's</Col>
              <Col>6's</Col>
            </Row>
            <Row>
            <Col>{selectedBatsmanName}</Col>
              <Col>{runScored}</Col>
              <Col>{ballFaced}</Col>
              <Col>{fourHit}</Col>
              <Col>{sixHit}</Col>
            </Row>
          </div>


         <h1> Select  Bowler:</h1>
          <div>
          Select  Bowler:
            <select value={selectedBowlersName} onChange={handleSelectBowler}>

          {bowlingTeam.map((playersB, index) =>{
            console.log('BowlingTeamMap: ')
              return(
               <option key={playersB.id2} value={playersB.nameB}>
                {playersB.nameB}
               </option>
              )
          })}
            </select>
          </div>

          <br />
          <div className={styles.teamGroup}>
            <Row>
              <Col>Bowler Name</Col>
              <Col>OVER</Col>
              <Col>RUN</Col>
              <Col>MEDIAN</Col>
              <Col>Wicket</Col>
            </Row>
            <Row>
            <Col>{selectedBowlersName}</Col>
              <Col>{overBowled}</Col>
              <Col>{runGiven}</Col>
              <Col>{median}</Col>
              <Col>{wicketTaken}</Col>
            </Row>
          </div>

     </div>  
     <br /> 

     <h1>Total: {run}-{wicket} </h1>

    <div className={styles.teamGroup}>

      <Row>
        <Col><button onClick={() => addRun(0)}>0</button> </Col>
        <Col><button onClick={() => addRun(1)}>1</button></Col>
        <Col><button  onClick={() => addRun(2)}>2</button></Col>
      </Row>

      <Row>
        <Col><button onClick={() => addRun(3)}>3</button> </Col>
        <Col><button onClick={() => addRun(4)}>4</button></Col>
        <Col><button onClick={() => addRun(6)}>6</button></Col>
      </Row>

      <Row>
        <Col><button onClick={out}>OUT</button> </Col>
        <Col><button onClick={bye}>BYE</button></Col>
        <Col><button onClick={lb}>LB</button></Col>
      </Row>

      <Row>
        <Col><button onClick={wide}>WIDE</button> </Col>
        <Col><button onClick={nb}>NB</button></Col>

      </Row>
    </div>

    <button className= {styles.startGameButton} onClick={() => addPlayer('/addPlayers')}>Previous</button>

      
    </>
  )
}
export default StartGame;