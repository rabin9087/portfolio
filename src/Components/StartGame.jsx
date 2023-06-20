import React, { useState, useEffect, useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { json } from 'react-router-dom';
import styles from '../style.module.css';
import { teamName } from '../Pages/Home/Home';

const StartGame = () => {
  const teams = useContext(teamName)

  let url1 = 'https://jsonplaceholder.typicode.com/todos/1';
  let url2 = 'https://jsonplaceholder.typicode.com/posts';
  let cricketscore = 'http://static.cricinfo.com/rss/livescores.xml';
  const liveurl = 'https://cors-anywhere.herokuapp.com/https://www.espncricinfo.com/series/8048/game/1237180/delhi-capitals-vs-sunrisers-hyderabad-qualifier-2-indian-premier-league-2020-21'

  const [data, setData] = useState([[]]);

  const getDataFromApi = async (e) => {
    await fetch(url2)
    .then((response) => {
      return response.json()
    })
    .then((value) => {
      setData(value)
       console.log(value)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
  //  getScore();
  }, [])

  return (
    <>
    <div>
      <h1>Get Live Score data</h1>
<br />
      
    </div>

    <h1> Start Game</h1>
     <h1>TeamA vs TeamB</h1>
     <div>
      <Container>
        <Row className='rows'>
          <Col sm = {6}><h1> TeamA</h1> </Col>
          <Col sm = {6}>Score:</Col>
        </Row>
        </Container>
     </div>
     
      <div>
        <h1>Batting</h1>

      </div>
      
    <div>
    <button onClick={getDataFromApi} type='button'>Get Data From Api</button>
      {console.log(data)}
      {data.map((obj) =>{
        return (
          <p  key={obj.id} className={styles.data}>
            ID: {obj.id}
            <br />
            userID: {obj.userId}
            <br />
            Title: {obj.title}
            <br />
            Body: {obj.body}
            </p>
        )
       
      })}
    </div>

     

      
    </>
  )
}
export default StartGame;