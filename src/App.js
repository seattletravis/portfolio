import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import About from './1-About/About';
import Skills from './2-Skills/Skills';
import Work from './3-Work/Work';
import Contact from './6-Contact/Contact';

function App() {
	return (
		<Fragment>
			<Navbar />
			<Routes>
				<Route path='/' element={<About />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='/projects' element={<Work />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</Fragment>
	);
}

export default App;
