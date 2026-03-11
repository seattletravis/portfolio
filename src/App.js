// import { Fragment } from 'react';
// import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
// import { Routes, Route, HashRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import About from './About/About';
import Skills from './Skills/Skills';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Layout from './Layout/Layout';
import Tilt3DMenu from './pages/Tilt3DMenu';
import Tilt3DSingle from './pages/Tilt3DSingle';
import Tilt3DMulti from './pages/Tilt3DMulti';
import BubbleGum from './pages/BubbleGum';
import SnakeBoids from './pages/SnakeBoids';
import BeemoClock from './pages/BeemoClock';

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
				<Route path='/tilt3d' element={<Tilt3DMenu />} />
				<Route path='/tilt3d/single' element={<Tilt3DSingle />} />
				<Route path='/tilt3d/multi' element={<Tilt3DMulti />} />
				<Route path='/gum' element={<BubbleGum />} />
				<Route path='/snake' element={<SnakeBoids />} />
				<Route path='/clock' element={<BeemoClock />} />
				<Route path='*' element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
