
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFount/NotFound';
import StartGame from './Components/StartGame';
import { useState } from 'react';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AddPlayers from './Components/AddPlayers';

function App() {

	// const [team, setTeam] = useState({
	// 	teamA: '',
	// 	teamB: '',
	// 	over:20
	//   });

	return (
    <>
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
				<Route path="/" element={<Login/>} />
          			<Route path="/home" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
         			<Route path='/*' element={<NotFound />}/>
					<Route path='/logIn' element={<Login />}/>
					<Route path='/register' element = {<Register />} />
					<Route path='/startGame' element = {<StartGame />} />
					 
					 </Routes>
			</BrowserRouter>
		</div>
    </>
	);
}

export default App;
