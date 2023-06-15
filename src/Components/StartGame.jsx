import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const StartGame = () => {
  return (
    <>
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
    </>
  )
}
export default StartGame;