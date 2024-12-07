import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Work from './pages/Work';
import Contacts from './pages/Contacts';
import Nav from './Components/Nav';

const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/work" element={<Work />} />
				<Route path="/contacts" element={<Contacts />} />
			</Routes>
		</>
	);
};

export default App;
