
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Portfolio/Contact';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFount/NotFound';
import StartGame from './Components/StartGame';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { UserProvider } from './Context/UserContext';
import Map from './Map';
import { TeamProvider } from './Context/TeamContext';
import AddPlayers from './Components/AddPlayers';
import { useState } from 'react';
import Form from './TodoApp/Form';
import TodoList from './TodoApp/TodoList';
import Score from './Pages/Home/Home';
import Portfolio from './Portfolio/Portfolio';
import About from './Portfolio/About';
import Projects from './Portfolio/Projects';
import Skills from './Portfolio/Skills';
import Services from './Portfolio/Services';

function App() {

	return (
    <> 
		<div>
			<UserProvider>
				<TeamProvider>
			<BrowserRouter>
			{/* <Map/> */}
				<Navbar/>
				<Routes>
				<Route path="todoApp" element={<Form />} />
				<Route path="/portfolio" element={<Portfolio/>} />
					<Route path="/" element={<Login/>} />
          			<Route path="/cricketScore" element={<Score />} />
					<Route path="/contact" element={<Contact />} />
         			<Route path='/*' element={<NotFound />}/>
					<Route path='/logIn' element={<Login />}/>
					<Route path='/register' element = {<Register />} />
					<Route path='/addPlayers' element = {<AddPlayers />} />
					<Route path='/startGame' element = {<StartGame />} />
					<Route path='/about' element = {<About />} />
					<Route path='/projects' element = {<Projects />} />
					<Route path='/services' element = {<Services />} />
					<Route path='/Skills' element = {<Skills />} />
					 </Routes>
			</BrowserRouter>
			
			</TeamProvider>
			</UserProvider>
		</div>
    </>
	);
}

export default App;
