import './work.css';
import './otheritem.css';
import OtherItem from './OtherItem';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRight, BsBoxArrowUpRight } from 'react-icons/bs';
import Modal from './Modal/Modal';
import { useInView } from 'react-intersection-observer';
// Main Logos
import MySimpleWardrobeGif from '../Media/Gifs/MySimpleWardrobeGif.gif';
import GroceryMagixGif from '../Media/Gifs/GroceryMagixGif.gif';
import TheFinancialTrackerGif from '../Media/Gifs/TheFinanceTrackerGif.gif';
import MyCryptomaticGif from '../Media/Gifs/MyCryptomaticGif.gif';
import MySimpleWardrobeLogo from '../Media/Images/portfolio-logos/MySimpleWardrobeLogo.png';
import GroceryMagixLogo from '../Media/Images/portfolio-logos/GroceryMagixLogo.png';
import TheFinancialTrackerLogo from '../Media/Images/portfolio-logos/TheFinancialTrackerLogo.png';
import MyCryptomaticLogo from '../Media/Images/portfolio-logos/MyCryptomaticLogo.png';
//Feature GIF's
import UnchaGif from '../Media/Gifs/UnchaGIF.gif';
// Feature Logos
import GumImg from '../Media/Images/projectImages/gum.png';
import TiltImg from '../Media/Images/projectImages/tilt3d1.png';
import SnakeImg from '../Media/Images/projectImages/snakeLD.png';
// import UnchaImg from
// Other Logos
import WeatherLogo from '../Media/Images/other-work-icons/WeatherAppLogo.png';
import BooklistLogo from '../Media/Images/other-work-icons/MyBooklistLogo.png';
import QuizLogo from '../Media/Images/other-work-icons/MiniQuizLogo.png';
import TicTacToeLogo from '../Media/Images/other-work-icons/TicTacToeLogo.png';
import CalculatorLogo from '../Media/Images/other-work-icons/CalculatorLogo.png';
import RockPaperScissorsLogo from '../Media/Images/other-work-icons/RockPaperScissorsLogo.png';
import CoinFlipLogo from '../Media/Images/other-work-icons/CoinFlipLogo.png';
import RestaurantLogo from '../Media/Images/other-work-icons/RestaurantPageLogo.png';
import StarbucksLogo from '../Media/Images/other-work-icons/StarbucksLogo.png';
import NotesLogo from '../Media/Images/other-work-icons/NotesAppLogo.png';
import PasswordLogo from '../Media/Images/other-work-icons/PasswordGeneratorLogo.png';
import NewYearsLogo from '../Media/Images/other-work-icons/NewYearsTimerLogo.png';

function Work() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const navigate = useNavigate();
	const [port1, setPort1] = useState(false);
	const [port2, setPort2] = useState(false);
	const [port3, setPort3] = useState(false);
	const [port4, setPort4] = useState(false);
	const [modalID, setModalID] = useState(null);
	const [openModal, setOpenModal] = useState(false);
	const [otherSepRef, otherSepInView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const [otherTitleRef, otherTitleInView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const [otherDescRef, otherDescInView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const otherData = [
		{
			id: 1,
			title: 'Weather App',
			image: WeatherLogo,
			github: 'https://github.com/davidmvenegas/WeatherApp',
			link: 'https://davidmvenegas.github.io/WeatherApp',
			largeTitle: false,
		},
		{
			id: 2,
			title: 'Favorite Books',
			image: BooklistLogo,
			github: 'https://github.com/davidmvenegas/MyFavoriteBooks',
			link: 'https://davidmvenegas.github.io/MyFavoriteBooks',
			largeTitle: false,
		},
		{
			id: 3,
			title: 'Coin Flip',
			image: CoinFlipLogo,
			github: 'https://github.com/davidmvenegas/CoinFlip',
			link: 'https://davidmvenegas.github.io/CoinFlip',
			largeTitle: false,
		},
		{
			id: 4,
			title: 'Tic-Tac-Toe',
			image: TicTacToeLogo,
			github: 'https://github.com/davidmvenegas/TicTacToe',
			link: 'https://davidmvenegas.github.io/TicTacToe',
			largeTitle: false,
		},
		{
			id: 5,
			title: 'Calculator',
			image: CalculatorLogo,
			github: 'https://github.com/davidmvenegas/Calculator',
			link: 'https://davidmvenegas.github.io/Calculator',
			largeTitle: false,
		},
		{
			id: 6,
			title: 'Rock Paper Scissors',
			image: RockPaperScissorsLogo,
			github: 'https://github.com/davidmvenegas/RockPaperScissors',
			link: 'https://davidmvenegas.github.io/RockPaperScissors',
			largeTitle: true,
		},
		{
			id: 7,
			title: 'Quiz App',
			image: QuizLogo,
			github: 'https://github.com/davidmvenegas/quizApp',
			link: 'https://davidmvenegas-quizapp.netlify.app',
			largeTitle: false,
		},
		{
			id: 8,
			title: 'Starbucks Page',
			image: StarbucksLogo,
			github: 'https://github.com/davidmvenegas/StarbucksPageClone',
			link: 'https://davidmvenegas.github.io/StarbucksPageClone',
			largeTitle: false,
		},
		// BROKEN 👇 THIS ONES BROKENNN
		{
			id: 9,
			title: 'Restaurant Page',
			image: RestaurantLogo,
			github: 'https://github.com/davidmvenegas/Burgerhouse',
			link: 'https://davidmvenegas.github.io/Burgerhouse',
			largeTitle: false,
		},
		{
			id: 10,
			title: 'Notes App',
			image: NotesLogo,
			github: 'https://github.com/davidmvenegas/NotesApp',
			link: 'https://davidmvenegas.github.io/NotesApp',
			largeTitle: false,
		},
		{
			id: 11,
			title: 'Password Generator',
			image: PasswordLogo,
			github: 'https://github.com/davidmvenegas/PasswordGenerator',
			link: 'https://davidmvenegas.github.io/PasswordGenerator',
			largeTitle: true,
		},
		// FIX FORMATING PLZZZ
		{
			id: 12,
			title: 'New Years Timer',
			image: NewYearsLogo,
			github: 'https://github.com/davidmvenegas/JS-CountdownTimer',
			link: 'https://davidmvenegas.github.io/JS-CountdownTimer',
			largeTitle: false,
		},
	];
	function handleOpenModal(id) {
		setModalID(id);
		setPort1(false);
		setPort2(false);
		setPort3(false);
		setPort4(false);
		setOpenModal(true);
	}
	return (
		<div className='work-container'>
			<Modal open={openModal} setOpenModal={setOpenModal} modalID={modalID} />
			<div className='port-wrapper'>
				<h1 className='port-header'>
					<span>M</span>
					<span>y</span>&nbsp;
					<span>P</span>
					<span>o</span>
					<span>r</span>
					<span>t</span>
					<span>f</span>
					<span>o</span>
					<span>l</span>
					<span>i</span>
					<span>o</span>
				</h1>
				<p className='port-description'>
					<span>A&nbsp;</span>
					<span>gallery&nbsp;</span>
					<span>of&nbsp;</span>
					<span>recent&nbsp;</span>
					<span>projects&nbsp;</span>
					<span>I've&nbsp;</span>
					<span>built.&nbsp;</span>
					<span onClick={() => navigate('/contact')}>Contact me</span>
					<span>&nbsp;for&nbsp;</span>
					<span>a&nbsp;</span>
					<span>complete&nbsp;</span>
					<span>code&nbsp;</span>
					<span>walkthrough.&nbsp;</span>
				</p>
				<div className='port-items'>
					{/* EVERYTHING BUBBLE GUM */}
					<div
						className='port-item'
						id='portItem1'
						onMouseEnter={() => setPort1(true)}
						onMouseLeave={() => setPort1(false)}>
						<div className='port-gif-box'>
							<div className='port-gif-wrapper'>
								<img
									className='port-gif'
									src={GumImg}
									alt='Bubble Gum Guessing Game'
									style={port1 ? { opacity: '1' } : { opacity: '0' }}
								/>
								<img
									className='port-gif port-gif-logo'
									src={GumImg}
									alt='BUbble Gum Guessing Game'
									style={port1 ? { opacity: '0' } : { opacity: '1' }}
								/>
							</div>
							<a
								href='https://travis.lamberte.com/bubbleGum/index.html'
								target='_blank'
								rel='noreferrer'>
								<div className='portGifPopup'>
									<p>Go to site</p>
									<BsBoxArrowUpRight id='goToSitePort' />
								</div>
							</a>
						</div>
						<div className='port-text-box'>
							<h1 className='port-title'>Bubble Gum Guessing Game</h1>
							<a
								className='port-title-site'
								href='https://travis.lamberte.com/bubbleGum/index.html'
								target='_blank'
								rel='noreferrer'>
								https://travis.lamberte.com/bubblegum/index.html
							</a>
							<p className='port-headline'>
								A fully immersive 3D environment game build with ThreeJS, and a
								physics engine.
							</p>
							<div className='port-btn-box'>
								<div
									className='port-btn-more'
									onClick={() => handleOpenModal(1)}>
									<span id='port-more-text'>More Details</span>
									<BsArrowRight id='port-more-arrow' />
								</div>
							</div>
						</div>
					</div>
					{/* EVERYTHING TILT3D */}
					<div
						className='port-item'
						id='portItem2'
						onMouseEnter={() => setPort2(true)}
						onMouseLeave={() => setPort2(false)}>
						<div className='port-gif-box'>
							<div className='port-gif-wrapper'>
								<img
									className='port-gif'
									src={TiltImg}
									alt='Tilt3D Image'
									style={port2 ? { opacity: '1' } : { opacity: '0' }}
								/>
								<img
									className='port-gif port-gif-logo'
									src={TiltImg}
									alt='Tilt3D Image'
									style={port2 ? { opacity: '0' } : { opacity: '1' }}
								/>
							</div>
							<a
								href='https://travis.lamberte.com/tilt3dSinglePlayer/index.html'
								target='_blank'
								rel='noreferrer'>
								<div className='portGifPopup'>
									<p>Go to site</p>
									<BsBoxArrowUpRight id='goToSitePort' />
								</div>
							</a>
						</div>
						<div className='port-text-box'>
							<h1 className='port-title'>
								Tilt3D<span>&trade;</span>
							</h1>
							<a
								className='port-title-site'
								href='https://travis.lamberte.com/tilt3dSinglePlayer/index.html'
								target='_blank'
								rel='noreferrer'>
								https://travis.lamberte.com/tilt3dSinglePlayer/index.html
							</a>
							<p className='port-headline'>
								Let's push ThreeJS to it's limits with this Jenga Style game
								built in a fully immersive 3D environment.
							</p>
							<div className='port-btn-box'>
								<div
									className='port-btn-more'
									onClick={() => handleOpenModal(2)}>
									<span id='port-more-text'>More Details</span>
									<BsArrowRight id='port-more-arrow' />
								</div>
							</div>
						</div>
					</div>
					{/* EVERYTHING SNAKE EATS BOIDS */}
					<div
						className='port-item'
						id='portItem3'
						onMouseEnter={() => setPort3(true)}
						onMouseLeave={() => setPort3(false)}>
						<div className='port-gif-box'>
							<div className='port-gif-wrapper'>
								<img
									className='port-gif'
									src={SnakeImg}
									alt='Snake Eats Boids Image'
									style={port3 ? { opacity: '1' } : { opacity: '0' }}
								/>
								<img
									className='port-gif port-gif-logo'
									src={SnakeImg}
									alt='Snake Eats Boids Image'
									style={port3 ? { opacity: '0' } : { opacity: '1' }}
								/>
							</div>
							<a
								href='https://lambertedesign.com'
								target='_blank'
								rel='noreferrer'>
								<div className='portGifPopup'>
									<p>Go to site</p>
									<BsBoxArrowUpRight id='goToSitePort' />
								</div>
							</a>
						</div>
						<div className='port-text-box'>
							<h1 className='port-title'>
								Snake Eats Boids<span>&trade;</span>
							</h1>
							<a
								className='port-title-site'
								href='https://lambertedesign.com'
								target='_blank'
								rel='noreferrer'>
								https://lambertedesign.com
							</a>
							<p className='port-headline'>
								Track your income, set a budget and visualize your saving goals
								with this personal finance tracker.
							</p>
							<div className='port-btn-box'>
								<div
									className='port-btn-more'
									onClick={() => handleOpenModal(3)}>
									<span id='port-more-text'>More Details</span>
									<BsArrowRight id='port-more-arrow' />
								</div>
							</div>
						</div>
					</div>
					{/* EVERYTHING UNCHA */}
					<div
						className='port-item'
						id='portItem4'
						onMouseEnter={() => setPort4(true)}
						onMouseLeave={() => setPort4(false)}>
						<div className='port-gif-box'>
							<div className='port-gif-wrapper'>
								<img
									className='port-gif'
									src={UnchaGif}
									alt='Grocery Magix Gif'
									style={port4 ? { opacity: '1' } : { opacity: '0' }}
								/>
								<img
									className='port-gif port-gif-logo'
									src={UnchaGif}
									alt='Grocery Magix Logo'
									style={port4 ? { opacity: '0' } : { opacity: '1' }}
								/>
							</div>
							<a
								href='https://github.com/seattletravis/bg_remover_Part_6/'
								target='_blank'
								rel='noreferrer'>
								<div className='portGifPopup'>
									<p>Go to site</p>
									<BsBoxArrowUpRight id='goToSitePort' />
								</div>
							</a>
						</div>
						<div className='port-text-box'>
							<h1 className='port-title'>
								Uncha<span>&trade;</span> Batch Background Removal Tool
							</h1>
							<a
								className='port-title-site'
								href='https://github.com/seattletravis/bg_remover_Part_6/'
								target='_blank'
								rel='noreferrer'>
								https://github.com/seattletravis/bg_remover_Part_6/
							</a>
							<p className='port-headline'>
								A powerful Window's application to remove backgrounds from all
								the PNG images in a directory with a single click.
							</p>
							<div className='port-btn-box'>
								<div
									className='port-btn-more'
									onClick={() => handleOpenModal(4)}>
									<span id='port-more-text'>More Details</span>
									<BsArrowRight id='port-more-arrow' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className='other-separator'
				ref={otherSepRef}
				id={otherSepInView ? 'education-separator-active' : undefined}></div>
			<div className='other-wrapper'>
				<h1
					className='other-header'
					ref={otherTitleRef}
					id={otherTitleInView ? 'certTitle-active' : undefined}>
					<span>O</span>
					<span>t</span>
					<span>h</span>
					<span>e</span>
					<span>r</span>&nbsp;
					<span>W</span>
					<span>o</span>
					<span>r</span>
					<span>k</span>
				</h1>
				<p
					className='other-description'
					ref={otherDescRef}
					id={otherDescInView ? 'otherDesc-active' : undefined}>
					A collection of a few other things I've built.{' '}
					<span>Everything is fully mobile responsive.</span>
				</p>
				<div className='other-items'>
					{otherData.map((data) => (
						<OtherItem key={data.id} data={data} />
					))}
				</div>
			</div>
			{/* <div className="ending-work-this-wrapper">
                <p className="ending-work-this"><span>*</span>I also built this website (www.davidmvenegas.com) from the ground up. You can follow it's progress <span><a href='https://github.com/davidmvenegas/Portfolio' target="_blank" rel="noreferrer">here</a></span>.</p>
            </div> */}
		</div>
	);
}

export default Work;
