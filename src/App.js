// import { Fragment } from 'react';
// import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import About from './1-About/About';
import Skills from './2-Skills/Skills';
import Work from './3-Work/Work';
import Contact from './5-Contact/Contact';
import Layout from './4-Layout/Layout';
// import Design from './6-Design/Design';
import Tilt3DMenu from './pages/Tilt3DMenu';
import Tilt3DSingle from './pages/Tilt3DSingle';
import Tilt3DMulti from './pages/Tilt3DMulti';

function App() {
	return (
		<HashRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Layout />} />
				<Route index element={<About />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='/projects' element={<Work />} />
				<Route path='/contact' element={<Contact />} />
				{/* <Route path='/design' element={<Design />} /> */}
				<Route path='/tilt3d' element={<Tilt3DMenu />} />
				<Route path='/tilt3d/single' element={<Tilt3DSingle />} />
				<Route path='/tilt3d/multi' element={<Tilt3DMulti />} />
				<Route path='*' element={<About />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
