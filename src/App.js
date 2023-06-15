
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFount/NotFound';
import StartGame from './Components/StartGame';
import { useState } from 'react';

function App() {

	

	return (
    <>
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
          			<Route exact path="/" element={<Home/>} />
					<Route path="/contact" element={<Contact />} />
         			<Route path='/*' element={<NotFound />}/>
					 {/* <Route path="/startgame" element={<StartGame />} /> */}
					 </Routes>

					
			</BrowserRouter>
		</div>
    </>
	);
}

export default App;
