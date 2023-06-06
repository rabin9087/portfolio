import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFount/NotFound';

function App() {
	return (
    <>
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
          <Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
          <Route path='*' element={<NotFound />}/>
				</Routes>
			</BrowserRouter>
		</div>
    </>
	);
}

export default App;
