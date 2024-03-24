import './modal.css';
import { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import {
	SiLinux,
	SiGithub,
	SiVisualstudiocode,
	SiReact,
	SiRedux,
	SiFirebase,
	SiCss3,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiJavascript,
	SiSass,
	SiRubyonrails,
	SiPostgresql,
	SiHtml5,
	SiPython,
} from 'react-icons/si';
import SnakeIcon from '../../Media/Images/portfolio-icons/SnakeIcon.png';
import UnchaIcon from '../../Media/Images/portfolio-icons/UnchaLogo.png';
import BubbleGumIcon from '../../Media/Images/portfolio-icons/BubbleGum.png';
import Tilt3DIcon from '../../Media/Images/portfolio-icons/Tilt3D.png';

function Modal({ open, setOpenModal, modalID }) {
	useEffect(() => {
		open
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'unset');
	}, [open]);
	const modalData = [
		{
			id: 1,
			title: 'BubbleGum3D',
			logo: BubbleGumIcon,
			desc: "Bubble Gum 3D is a State Fair Style number guessing game where you'll get your chance, to Guess the number of candies that are in the candy dish, is it 1... or 1000?! You won't know until you've guessed it!",
			features: [
				'3D Environment',
				'Elegant Game UI',
				'Scoring and Gameplay mechanics',
				'Physics Engine',
			],
			tools: [SiJavascript, SiHtml5, SiCss3],
			technologies: {
				frontend: 'JavaScript, HTML, CSS',
				backend: 'ThreeJS, CannonES',
			},
			link: 'https://travis.lamberte.com/bubbleGum/index.html',
			url: 'https://travis.lamberte.com/bubbleGum/index.html',
			github: 'https://github.com/seattletravis/bubblegum3d',
			video: 'https://www.youtube.com/embed/PI22b1pHpeg?si=YK7E8b2spJlW4lMh',
		},
		{
			id: 2,
			title: 'Tilt3D',
			logo: Tilt3DIcon,
			desc: 'Tilt3D is a Jenga Style classic tumbling tower puzzle game built as a web application using JavaScript, HTML, and CSS. Test your skills today in this fully emmersive 3D environment.',
			features: [
				'Elegant Game UI',
				'Scoring and Game Mechanics',
				'3D Environment',
				'Physics Engine',
			],
			tools: [SiJavascript, SiHtml5, SiCss3],
			technologies: {
				frontend: 'JavaScript, HTML, Vanilla CSS',
				backend: 'ThreeJS, Cannon ES, Vite',
			},
			link: 'https://travis.lamberte.com/tilt3dMenu/index.html',
			url: 'https://travis.lamberte.com/tilt3dMenu/index.html',
			github: 'https://github.com/seattletravis/Tilt3dSinglePlayer',
			video: 'https://www.youtube.com/embed/wysq6wtGybs?si=r7mV3gXtUJXqV0ci',
		},
		{
			id: 3,
			title: 'Snake Boid AI',
			logo: SnakeIcon,
			desc: 'Snake Boid AI is an AI behavorial implementation in the food ojects of a Classic Snake Game. Boid AI gives the food objects emergent flocking behavior by giving simple behaviors to each individual of the flock.',
			features: [
				'AI implementation of Boids',
				'Classic Snake Game Implementation',
				'Particle Effects',
				'Power Ups',
			],
			tools: [SiJavascript, SiVisualstudiocode, SiGithub],
			technologies: {
				frontend: 'JavaScript, Canvas, Boid AI',
				backend: 'Static Server',
			},
			link: 'www.lambertedesign.com',
			url: 'https://lambertedesign.com/',
			github: 'https://github.com/seattletravis/SnakeEatsBoids',
			video: 'https://www.youtube.com/embed/WzBhyxWUdJA?si=jn9Ontfv6v5TFHVw',
		},
		{
			id: 4,
			title: 'Uncha',
			logo: UnchaIcon,
			desc: "Uncha is a powerful Window's application for removing image backgrounds from all the pngs in a directory with a single click. Uncha uses multithreading for quick processing of png, tiff, and jpg files and is available for Window's, linux, and macOS operating systems.",
			features: [
				'Machine Learning Technology',
				'Multithreading for powerful performance',
				"High Quality Transparent PNG's",
				'Open Source and Free to Use',
			],
			tools: [SiPython, SiVisualstudiocode, SiGithub],
			technologies: {
				frontend: 'TKinter, Python',
				backend: 'Multi-Threading, REMBG, Machine Learning',
			},
			link: 'https://github.com/seattletravis/Uncha',
			url: 'https://github.com/seattletravis/Uncha',
			github: 'https://github.com/seattletravis/Uncha',
			video: 'https://www.youtube.com/embed/wbjmltaJSnk?si=OJ9gjbv9mPQSXugg',
		},
	];
	useEffect(() => {
		if (modalID !== null) {
			const currentID = modalData.findIndex((x) => x.id === modalID);
			setCurrentData(modalData[currentID]);
		}
		if (!open) setCurrentData({});
		// eslint-disable-next-line
	}, [modalID, open]);
	const [currentData, setCurrentData] = useState({});
	return (
		<div
			key={currentData?.id}
			className='modal-container'
			style={open ? null : { display: 'none' }}>
			<ImCross id='leave-modal' onClick={() => setOpenModal(false)} />
			<div className='modal-wrapper'>
				<div className='modal-video-wrapper'>
					<h1 className='modal-video-title'>
						2 Minute Demo <br />
						<span>of</span>
						<br /> <span>{currentData?.title}</span>
					</h1>
					<div className='iframe-wrapper'>
						<iframe
							width='560'
							height='315'
							src={currentData?.video}
							title={currentData?.title}
							// frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture'
							allowFullScreen='allowfullscreen'></iframe>
					</div>
					<div className='modal-tech-wrapper'>
						<h1>Expertise</h1>
						<div className='modal-techs'>
							<span>Core Technologies:&nbsp;</span>
							{currentData?.technologies?.frontend}
						</div>
						<div className='modal-techs'>
							<span>Other Skills:&nbsp;</span>
							{currentData?.technologies?.backend}
						</div>
					</div>
				</div>
				<div className='modal-text-wrapper'>
					<div className='modal-header'>
						<div className='modal-title-wrapper'>
							<img src={currentData?.logo} alt='Logo' />
							<h1 className='modal-title'>{currentData?.title}</h1>
						</div>
						<div className='modal-links'>
							<a
								className='modal-link1'
								href={currentData?.url}
								target='_blank'
								rel='noreferrer'>
								{currentData?.link}
							</a>
							&nbsp;&nbsp; - &nbsp;&nbsp;
							<a
								className='modal-link2'
								href={currentData?.github}
								target='_blank'
								rel='noreferrer'>
								<FaGithub />
							</a>
						</div>
						<div className='modal-tools-wrapper'>
							{currentData?.tools?.map((Tool) => (
								<Tool className='modal-tool' />
							))}
						</div>
					</div>
					<div className='modal-body'>
						<p className='modal-description'>{currentData?.desc}</p>
						<p className='modal-features-header'>Features include:</p>
						<ul className='modal-features'>
							{currentData?.features?.map((feature) => (
								<li className='modal-feature'>{feature}</li>
							))}
						</ul>
						<div className='modal-visit-site'>
							<a
								className='modal-visit-btn'
								href={currentData?.url}
								target='_blank'
								rel='noreferrer'>
								VISIT WEBSITE
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
