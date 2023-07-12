  import React, { useState, useEffect, useContext } from 'react'
  import {useNavigate } from 'react-router-dom';
  import styles from '../style.module.css';
  import { TeamContext } from '../Context/TeamContext';
  import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
  import { Row, Col } from 'react-bootstrap'; // Import Row and Col components from react-bootstrap
  import Modal from 'react-modal';

  const StartGame = () => {
    
    const addPlayer = useNavigate();

    const {team} = useContext(TeamContext)
    const {teamAPlayers} = useContext(TeamContext);
    const {teamBPlayers} = useContext(TeamContext);
    const {toss} = useContext(TeamContext);
    const {battingOrBowling} = useContext(TeamContext);
    const {teamA, teamB, over} = team;

    let battingFirst;
    let battingTeam;
    let bowlingTeam;

  if ((battingOrBowling === 'batting' && toss === teamA) 
        || (battingOrBowling === 'bowling' && toss === teamB)){
    battingFirst = teamA;
    battingTeam = teamAPlayers;
    bowlingTeam = teamBPlayers;

  } else  {
    battingFirst = teamB
    battingTeam = teamBPlayers;
    bowlingTeam = teamAPlayers;
  }

  //Modals for different Input 
  const [openOutModal, setOpenOutModal] = useState(false);
  const [openByeModal, setOpenByeModal] = useState(false);
  const [openLBModal, setOpenLBModal] = useState(false);
  const [openWideModal, setOpenWideModal] = useState(false);
  const [openNBModal, setOpenNBModal] = useState(false);
  const [openBatsmanModal, setOpenBatsmanModal] = useState(false);
  const [openNextBatsmanModal, setOpenNextBatsmanModal] = useState(false);
  const [openNextBowlerModal, setOpenNextBowlerModal] = useState(false);
  const [isNoBallExtraFromBat,setIsNoBalExtraFromBat]=useState(false);
  const [noBallRun, setNoBallRun] = useState(0);
  const [wideBallRun, setWideBallRun] = useState(0);

  const closeOutModal = () => {
    setOpenOutModal(false);
  };
  const closeByeModal = () => {
    setOpenByeModal(false);
  };
  const closLBModal = () => {
    setOpenLBModal(false);
  };
  const closeWideModal = () => {
    setOpenWideModal(false);
  };
  const closeNBModal = () => {
    setOpenNBModal(false);
  };
  const closeBatsmanModal = () => {
    setOpenBatsmanModal(false);
  };
  const closeNextBatsmanModal = () => {
    setOpenNextBatsmanModal(false);
  };
  const closeNextBowlerModal = () => {
    setOpenNextBowlerModal(false);
  };

  const selectBatsman = () => {
    setOpenBatsmanModal(true)
    setIsDisabled(true)
  }
  
  const selectNextBatsMan =() => {
    setOpenNextBatsmanModal(true)
  }

    //toss is equal to toss won team name


  const {run, setRun} = useContext(TeamContext);
  const {wicket, setWicket} = useContext(TeamContext);
  //  const [addExtraRun, setaddExtraRun] = useState(0);

  // batting variables
  const [runScored, setRunScored] = useState(0)
  const [ballFaced, setballFaced] = useState(0)
  const [fourHit, setFourHit] = useState(0)
  const [sixHit, setSixHit] = useState(0)

  //bowling variables
  
  const [overBowled, setOverBowled] = useState(0);
  const [currentBall, setCurrentBall]= useState(0)
  const [runGiven, setRunGiven] = useState(0);
  const [medianOver, setMedianOver] = useState(0);
  const [wicketTaken, setWicketTaken] = useState(0);

  const [selectedStrikeBatsmanName, setSelectedStrikeBatsmanName] = useState();
  const [selectedNonStrikeBatsmanName, setSelectedNonStrikeBatsmanName] = useState();

  // const [batsmanName, setBatsmanName] = useState({
  //   batsmanType: 'strike',
  //   batsmanName: '',
  //   runScored: 0,
  //   ballFaced: 0,
  //   fourHit: 0,
  //   sixHit: 0,
  // });

  const [strikeBatsmanName, setStrikeBatsmanName] = useState({
    batsmanName: 'Strike',
    runScored: 0,
    ballFaced: 0,
    fourHit: 0,
    sixHit: 0,
  });

  const [nonStrikeBatsmanName, setNonStrikeBatsmanName] = useState({
    batsmanName: 'Non-Strike',
    runScored: 0,
    ballFaced: 0,
    fourHit: 0,
    sixHit: 0,
  });

  const [selectedBowlersName, setselectedBowlersName] = useState({
    bowlerName: '',
    overBowled: 0,
    currentBall: 0,
    runGiven: 0,
    medianOver: 0,
    wicketTaken: 0
  })
  const [currentBallFacingBatsman, setCurrentBallFacingBatsman] = useState(true);
  const [extraRuns, setExtraRuns] = useState(0)
  const [battedBatsman, setBattedBatsman] = useState([]);
  const [outBatsman, setOutBatsman] = useState([])
  const [bowledBowler, setBowledBowler] = useState([]);
  const [currentBattingBatsman, setCurrentBattingBatsman] = useState(['SelectOut Batsman']);
  const [currentBowler, setCurrentBowler] = useState();
  const [isDisabled, setIsDisabled] = useState(false);
  // console.log("currentBatsman:", currentBattingBatsman)
  // console.log("Batted Batsman:", battedBatsman)
  console.log("Bowlde Bowler:", bowledBowler)

    

    // name, run, ball, fours, sixes, out, current, types
     const [battingPlayer, setBattingPlayer] = useState({
      name: '',
      run: 0,
      ball: 0,
      fours: 0,
      sixes: 0,
      out: false,
      current: false,
      type: 'strike',
      alreadyBatted: false
     });

     const [currentBattingTeam, setCurrentBattingTeam] = useState([])

     const handleStrikeBatsman = (e) => {
      const value = e.target.value;

    //   setCurrentBattingTeam([...currentBattingTeam, {
    //   name: value,
    //   run: 0,
    //   ball: 0,
    //   fours: 0,
    //   sixes: 0,
    //   out: false,
    //   current: true,
    //   type: 'strike',
    //   alreadyBatted: true
    // }])

  
     //const currentBatsman = setSelectedStrikeBatsmanName(value);
       setStrikeBatsmanName(() => ({
         ...strikeBatsmanName, batsmanName: value
       }))
 
       setCurrentBattingBatsman([...currentBattingBatsman, value])
       setBattedBatsman([...battedBatsman, value])
 
       // (currentBallFacingBatsman ? strikeBatsmanName: nonStrikeBatsmanName)
       
     };

    const handleNonStrikeBatsman = (e) => {
      const value = e.target.value;

      // setCurrentBattingTeam([...currentBattingTeam, {
      //   name: value,
      //   run: 0,
      //   ball: 0,
      //   fours: 0,
      //   sixes: 0,
      //   out: false,
      //   current: true,
      //   type: 'nonStrike',
      //   alreadyBatted: true
      // }])


     setNonStrikeBatsmanName(() => ({
       ...nonStrikeBatsmanName, batsmanName: value
      }))
      setCurrentBattingBatsman([...currentBattingBatsman, value])
      setBattedBatsman([...battedBatsman, value])
    };

    
    const handleSelectBowler = (e) => {
      const name = e.target.value;
      setselectedBowlersName(prevBowler =>(
        {...prevBowler, bowlerName: name, overBowled: 0, currentBall: 0,
        runGiven: 0, medianOver: 0, wicketTaken: 0
      }))

      bowledBowler.map(bowler => {
        if(bowler !== name){
          setBowledBowler([...bowledBowler, setselectedBowlersName])
        } else{
          setBowledBowler([...bowledBowler])
        }
      })
      bowledBowler.map((bowler) => {
        if(bowler !== name){
          setselectedBowlersName(prevBowler =>(
            {...prevBowler, bowlerName: name, overBowled: 0, currentBall: 0,
            runGiven: 0, medianOver: 0, wicketTaken: 0
          }))
        } else{
          setselectedBowlersName(prevBowler =>(
            {...prevBowler,
            //    bowlerName: bowler, overBowled: overBowled, currentBall: currentBall,
            // runGiven: runGiven, medianOver: medianOver, wicketTaken: wicketTaken
          }
          ))
        }})
        setBowledBowler([...bowledBowler, selectedBowlersName])
      setCurrentBowler();
    }
 
    const [howOut, setHowOut] = useState('');

    const handleHowOut =(e) => {
      const value = e.target.value
      if (value === 'runOut' || value === 'retiredHurt'){
        setWicketTaken(0)
      // } else {
      //   setWicketTaken(1)
      }
    }
    const handleOutBatsman = (e) => {
      const out = e.target.value
      setOutBatsman([...outBatsman, out])
      const currentBatsman = currentBattingBatsman.filter((batsman) => batsman !== out)
      setCurrentBattingBatsman(currentBatsman);

    }
    console.log('out:', outBatsman)


    if(currentBall === 6){
      currentBall(0);
      setOverBowled(overBowled + 1)
      setOpenNextBowlerModal(true)
    }

    const handleExtraRun =(e) => {
      const value = (e.target.value);
      const extraRun = parseInt(value)

      if(value !== ''){
      setRun(run + extraRun);
      setCurrentBall(currentBall + 1);
      setballFaced(ballFaced + 1);
      setExtraRuns(extraRuns + extraRun);

      if(currentBall === 5){
      setCurrentBall(0);
      setOverBowled(overBowled + 1)
      setOpenNextBowlerModal(true)
      setselectedBowlersName(prevBowler =>({
        ...prevBowler, overBowled: overBowled + 1, currentBall: 0,
        runGiven: selectedBowlersName.runGiven, medianOver: selectedBowlersName.medianOver, wicketTaken: selectedBowlersName.wicketTaken
      }))
      setBowledBowler([...bowledBowler, setselectedBowlersName])
      setselectedBowlersName({bowlerName: '',overBowled: 0, currentBall: 0,
        runGiven: 0, medianOver: 0, wicketTaken: 0})
    } else{
      setselectedBowlersName(prevBowler =>({
        ...prevBowler, overBowled: overBowled , currentBall: selectedBowlersName.currentBall + 1 ,
        runGiven: selectedBowlersName.runGiven + wideBallRun + noBallRun , medianOver: selectedBowlersName.medianOver, wicketTaken: selectedBowlersName.wicketTaken
      }))
      }
     console.log('setBowledBowler:', setBowledBowler)

      if(isNoBallExtraFromBat)
      { 
        setRunScored(runScored + extraRun - 1);
      } else{
        setRunScored(runScored);
      }
      setIsNoBalExtraFromBat(false)
    } else{
      alert('Plese Select Run')
    }

  }

  const handleWideAndNoBallRun = (e) => {
    const wideAndNoBallRun = parseInt(e.target.value);
    if(wideAndNoBallRun !== ''){
    setRun(run + wideAndNoBallRun)
    setExtraRuns(extraRuns + wideAndNoBallRun)

    setselectedBowlersName(prevBowler =>({
        ...prevBowler, overBowled: overBowled , currentBall: selectedBowlersName.currentBall ,
        runGiven: selectedBowlersName.runGiven + wideAndNoBallRun , medianOver: selectedBowlersName.medianOver, wicketTaken: selectedBowlersName.wicketTaken
      }))

    if(wideAndNoBallRun%2 === 0){
        
    }

  } else{
    alert('Plese Select Run')
  }
  }

  const out = () => {
    setOpenOutModal(true);
    setWicket(wicket + 1)
    setWicketTaken (wicketTaken + 1)
    setCurrentBall(currentBall + 1);
    setballFaced(ballFaced + 1);

    if(currentBall === 5){
      setOpenNextBowlerModal(true)
      setCurrentBall(0);
      setOverBowled(overBowled + 1)
      setselectedBowlersName(prevBowler =>({
        ...prevBowler, overBowled: overBowled , currentBall: currentBall - 1 ,
        runGiven: selectedBowlersName.runGiven , medianOver: selectedBowlersName.medianOver, wicketTaken: selectedBowlersName.wicketTaken + 1
      }))

    } else{
      setselectedBowlersName(prevBowler =>({
        ...prevBowler, overBowled: overBowled , currentBall: selectedBowlersName.currentBall + 1 ,
        runGiven: selectedBowlersName.runGiven , medianOver: selectedBowlersName.medianOver, wicketTaken: selectedBowlersName.wicketTaken + 1
      }))
    }

    if(wicket === 10 || overBowled === over){
      alert("Start next Inning")
      
    }
    selectNextBatsMan()
  }

  const bye = () => {
    setOpenByeModal(true);
  }

  const lb = () => {
    setOpenLBModal(true)
  }

  const wide = () => {
    setOpenWideModal(true);
  }

  const nb = () => {
    setOpenNBModal(true)
    setballFaced(ballFaced + 1)
  }
  const reStart = () => {
    setRun(0);
    setWicket(0);
    setRun(0)
    setRunScored(0)
    setballFaced(0)
    setCurrentBall (0)
    setOverBowled(0)
    setMedianOver(0)
  }
  
  const addRun =(value) => {
    setRun(value + run)
    setRunScored(value)
    setRunGiven(value)
    setballFaced(1)
    setFourHit(1)
    setSixHit(1)
    setCurrentBall(currentBall + 1);

if(currentBall === 5){
  setOpenNextBowlerModal(true)
      setCurrentBall(0);
      setOverBowled(overBowled + 1)
      setselectedBowlersName(prevBowler =>({
        ...prevBowler, overBowled: overBowled + 1, currentBall: 0,  runGiven: selectedBowlersName.runGiven + value + wideBallRun + noBallRun,
        medianOver: selectedBowlersName.medianOver + medianOver, wicketTaken: wicketTaken + wicketTaken
      }))

    } else {
      setselectedBowlersName(prevBowler =>({
        ...prevBowler, overBowled: overBowled , currentBall: currentBall + 1,
        runGiven: selectedBowlersName.runGiven + value + wideBallRun + noBallRun,
         medianOver: selectedBowlersName.medianOver + medianOver, wicketTaken: wicketTaken + wicketTaken
      }))
    }
    if(value%2 === 0){
      setCurrentBallFacingBatsman(true)

      setStrikeBatsmanName(prevScore => ({
        ...prevScore, runScored: runScored + value, ballFaced: ballFaced + 1, 
      }))

      if(value === 4){
        setStrikeBatsmanName(prevScore => ({
          ...prevScore, runScored: runScored + value, ballFaced: ballFaced + 1, fourHit: fourHit + 1
        })) 
      }else if (value ===6){
        setStrikeBatsmanName(prevScore => ({
          ...prevScore, runScored: runScored + value, ballFaced: ballFaced + 1, sixHit: sixHit + 1
        })) 
      }

    } else {
      setNonStrikeBatsmanName(prevScore => ({
        ...prevScore, runScored: runScored + value, ballFaced: ballFaced + 1, 
      }))
      
      if(value === 4){
        setStrikeBatsmanName(prevScore => ({
          ...prevScore, runScored: runScored + value, ballFaced: ballFaced + 1, fourHit: fourHit + 1
        })) 
      }else if (value ===6){
        setStrikeBatsmanName(prevScore => ({
          ...prevScore, runScored: runScored + value, ballFaced: ballFaced + 1, sixHit: sixHit + 1
        })) 
      }
    }
  }

  const handleBatEvent =(e) => {
    const value = (e.target.value);
    if(value==="fromBat")
    {
      setIsNoBalExtraFromBat(true)
    }
    else{ 
      setIsNoBalExtraFromBat(false);
    }
  }

    useEffect(() => {
    //  getScore();
    }, [])

    return (
      <>

        <Modal isOpen={openNextBowlerModal} onRequestClose={closeNextBowlerModal}>
              <div>
                Select  Next Bowler:
                  <select value={selectedNonStrikeBatsmanName} onChange={handleSelectBowler}>
                  <option value="">Select Next Bowler</option>

                  {bowlingTeam.map((bowler) => {

                    return(
                      <option key={bowler.id} value={bowler.name}>
                      {bowler.name}
                      </option>
                      )
                      })}
                  </select>
                  <br /><br />
                  <button onClick={closeNextBowlerModal}>Done</button>
             </div>
        </Modal>

      <Modal isOpen={openBatsmanModal} onRequestClose={closeBatsmanModal}>
      <div>
            Select
            
              <select value={selectedStrikeBatsmanName} onChange={handleStrikeBatsman}>
              <option value="">Strike Batsman</option>
              {battingTeam.map((batsman) => {
                  return(
                    <option key={batsman.id} value={batsman.name}>
                    {batsman.name}
                    </option>
                    )})}
  
              </select>
              &nbsp; &nbsp;
            Select 
            <select value={selectedNonStrikeBatsmanName} onChange={handleNonStrikeBatsman} >
            <option value="">Non-Strike Batsman</option>
            {battingTeam.map((batsman) => {
                return(
                  <option key={batsman.id} value={batsman.name}>
                  {batsman.name}
                  </option>
                  )
                  })}
        
              </select>
              <br /><br />
              <button onClick={closeBatsmanModal}>Done</button>
            </div>
      </Modal>

      <Modal isOpen={openNextBatsmanModal} onRequestClose={closeNextBatsmanModal}>
      <div>
            Select  Next Batsman:
              <select value={selectedNonStrikeBatsmanName} onChange={handleStrikeBatsman}>
              <option value="">Select a Batsman</option>

              {battingTeam.map((batsman) => {

                return(
                  <option key={batsman.id} value={batsman.name}>
                  {batsman.name}
                  </option>
                  )
                  })}
              </select>
              <br /><br />
              <button onClick={closeNextBatsmanModal}>Done</button>
              </div>
              </Modal>

  <Modal isOpen={openOutModal} onRequestClose={closeOutModal}>
        <h2>How Out?</h2>
        <select value={howOut} onChange={handleHowOut} >
        <option value=''>Select</option>
          <option value='catch' >Catch</option>
          <option value='bowled'>Bowled</option>
          <option value='lbw'>LBW</option>
          <option value='runOut'>Run Out</option>
          <option value='stamping'>stamping</option>
          <option value='hitWicket'>Hit Wicket</option>
          <option value='retiredHurt'>Retired hurt</option>
        </select>
        <br />
        <h1> Who is Out</h1>
        <select value={outBatsman} onChange={handleOutBatsman}>
        
        {currentBattingBatsman.map((batsman, index) => {
            return(
            <option key={index} value={batsman}>
            {batsman}
            </option>
          ) })}
        </select>
        <br />
        <br />
          <button onClick={closeOutModal}>Done</button>
      </Modal>

      <Modal isOpen={openByeModal} onRequestClose={closeByeModal}>
        <h2>Total Run in Bye</h2>
        <select onChange={handleExtraRun}>
        <option value=''>Select</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <br />
        <br />
          <button onClick={closeByeModal}>Done</button>
      </Modal>

      <Modal isOpen={openLBModal} onRequestClose={closLBModal}>
        <h2>Total Run in Leg Bye</h2>
        <select onChange={handleExtraRun}>
        <option value=''>Select</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <br />
        <br />
          <button onClick={closLBModal}>Done</button>
      </Modal>

      <Modal isOpen={openWideModal} onRequestClose={closeWideModal}>
        <h2>Total Run in Wide</h2>
        <select  onChange={handleWideAndNoBallRun}>
        <option value=''>Select</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <br />
        <br />
          <button onClick={closeWideModal}>Done</button>
      </Modal>

      <Modal isOpen={openNBModal} onRequestClose={closeNBModal}>
        <h2>Run From</h2>
        <select onChange={handleBatEvent}>1
        <option value='notFromBat'>not From Bat</option>
          <option value='fromBat'>From Bat</option>
          </select>
          <br /><br />
        <h2>Total Run in No-Ball</h2>
        <select onChange={handleWideAndNoBallRun}>
        <option value=''>Select</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
        </select>
        <br />
        <br />
          <button onClick={closeNBModal}>Done</button>
      </Modal>
      
      <h1 className={styles.teamGroup}>{teamA} vs {teamB}</h1>
      <h1>Toss won by {toss} and selected {battingOrBowling} first</h1>
      
      <div>
      <h1>Batting Team: {battingFirst}</h1>
            
            <button onClick={() => selectBatsman()} disabled ={isDisabled}>Select Batsman</button>
            <button onClick={() => selectNextBatsMan()} disabled= {true}>Select Next Batsman</button>

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
                      <Col>{strikeBatsmanName.batsmanName}</Col>
                      <Col>{strikeBatsmanName.runScored}</Col>
                      <Col>{strikeBatsmanName.ballFaced}</Col>
                      <Col>{strikeBatsmanName.fourHit}</Col>
                      <Col>{strikeBatsmanName.sixHit}</Col>
                    </Row>

                    <Row>
                     <Col>{nonStrikeBatsmanName.batsmanName}</Col>
                      <Col>{nonStrikeBatsmanName.runScored}</Col>
                      <Col>{nonStrikeBatsmanName.ballFaced}</Col>
                      <Col>{nonStrikeBatsmanName.fourHit}</Col>
                      <Col>{nonStrikeBatsmanName.sixHit}</Col>
                    </Row>

                {/* {
                  currentBattingTeam.find(batsman => batsman.type === 'strike').map(batsman => {
                    return(<>
                    <Row>
                    <Col>{batsman.name}</Col>
                    <Col>{batsman.run}</Col>
                    <Col>{batsman.ball}</Col>
                    <Col>{batsman.fours}</Col>
                    <Col>{batsman.sixes}</Col>
                    </Row>
                    </>)
                  })
                }

{
                  currentBattingTeam.find(batsman => batsman.type === 'nonStrike').map(batsman => {
                    return(<>
                    <Row>
                    <Col>{batsman.name}</Col>
                    <Col>{batsman.run}</Col>
                    <Col>{batsman.ball}</Col>
                    <Col>{batsman.fours}</Col>
                    <Col>{batsman.sixes}</Col>
                      
                    </Row>
                    </>)
                  })
                } */}
                  
            </div>

          <h1> Select Bowler:</h1>
            <div>
            Select Bowler:
              <select value={selectedBowlersName} onChange={handleSelectBowler}>
              <option value="">Select a Bowler</option>
              {bowlingTeam.map((bowler) => {
                      return(
                        <option key={bowler.id} value={bowler.name}>
                          {bowler.name}
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
             
                {bowledBowler.map((thisOverbowlerName, index) => {
                  return(
                    <Row key={index}>
                      {/* <Col>{thisOverbowlerName}</Col> */}
                        <Col>{thisOverbowlerName.bowlerName}</Col>
                        <Col>{thisOverbowlerName.overBowled}.{thisOverbowlerName.currentBall}</Col>
                        <Col>{thisOverbowlerName.runGiven}</Col>
                        <Col>{thisOverbowlerName.medianOver}</Col>
                        <Col>{thisOverbowlerName.wicketTaken}</Col>
                    </Row>
                  )
                })}
                
            
            </div>

      </div>  
      <br /> 

          <div>
            <Row>
              
              <Col><h2>{battingFirst} </h2></Col>
              <Col><h2> {run}-{wicket} (Over: {overBowled}.{currentBall})</h2></Col>
              <Col><h2>Extra({extraRuns})</h2></Col>

            </Row>
            
          </div>

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
          <Col><button onClick={() => out()}>OUT</button> </Col>
          <Col><button onClick={() => bye()}>BYE</button></Col>
          <Col><button onClick={() => lb()}>LB</button></Col>
        </Row>

        <Row>
          <Col><button onClick={() => wide()}>WIDE</button> </Col>
          <Col><button onClick={() => nb()}>NB</button></Col>
          <Col><button onClick={reStart}>Resatart Game</button></Col>

        </Row>
      </div>

      <button className= {styles.startGameButton} onClick={() => addPlayer('/addPlayers')}>Previous</button>

      </>
    )
  }
  export default StartGame;