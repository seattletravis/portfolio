import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar.js';
import About from './About/About.js';
import Skills from './Skills/Skills.js';
import Work from './Work/Work.js';
import Contact from './Contact/Contact.js';
import Layout from './Layout/Layout.js';
import Tilt3DMenu from './pages/Tilt3DMenu.jsx';
import Tilt3DSingle from './pages/Tilt3DSingle.jsx';
import Tilt3DMulti from './pages/Tilt3DMulti.jsx';
import BubbleGum from './pages/BubbleGum.jsx';
import SnakeBoids from './pages/SnakeBoids.jsx';
import BeemoClock from './pages/BeemoClock.jsx';
import GuessleGame from './pages/GuessleGame.jsx';

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
				<Route path='/guessle' element={<GuessleGame />} />

				<Route path='*' element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
