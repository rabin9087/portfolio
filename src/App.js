
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFount/NotFound';
import StartGame from './Components/StartGame';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { UserProvider } from './Context/UserContext';
import Map from './Map';
import { TeamProvider } from './Context/TeamContext';
import AddPlayers from './Components/AddPlayers';

function App() {

	return (
    <>
		<div className="App">
			<UserProvider>
				<TeamProvider>
			<BrowserRouter>
			{/* <Map/> */}
				<Navbar />
				
				<Routes>
				<Route path="/" element={<Login/>} />
          			<Route path="/home" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
         			<Route path='/*' element={<NotFound />}/>
					<Route path='/logIn' element={<Login />}/>
					<Route path='/register' element = {<Register />} />
					<Route path='/addPlayers' element = {<AddPlayers />} />
					<Route path='/startGame' element = {<StartGame />} />
					 
					 </Routes>
			</BrowserRouter>
			</TeamProvider>
			</UserProvider>
		</div>
    </>
	);
}

export default App;
