import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import StartGame from './StartGame';
import styles from '../style.module.css';
const Score = () => {
  return (
    <div>
       <div className= {styles.startGameDiv}>
      
      <Link className='content' to="/startgame">
      <button className= {styles.startGameButton} type='submit'>Start Game</button>
      </Link>
      </div>

      <div className="">
			        <Routes>
                {/* <Switch> */}
         			<Route path="/startgame" element={ <StartGame />
              }/>
              {/* </Switch> */}
              </Routes>
		</div>
    </div>
  )
}
export default Score;