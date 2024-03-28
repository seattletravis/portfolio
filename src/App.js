// import { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import About from './1-About/About';
import Skills from './2-Skills/Skills';
import Work from './3-Work/Work';
import Contact from './6-Contact/Contact';
import Layout from './4-Layout/Layout';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Layout />} />
				<Route index element={<About />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='/projects' element={<Work />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<About />} />
			</Routes>
		</BrowserRouter>

		// <Fragment>
		// 	<Navbar />
		// 	<Routes>
		// 		<Route path='/' element={<About />} />
		// 		<Route path='/skills' element={<Skills />} />
		// 		<Route path='/projects' element={<Work />} />
		// 		<Route path='/contact' element={<Contact />} />
		// 	</Routes>
		// </Fragment>
	);
}

export default App;
