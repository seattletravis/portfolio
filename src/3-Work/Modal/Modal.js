import './modal.css';
import { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import {
	SiReact,
	SiRedux,
	SiFirebase,
	SiCss3,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiSass,
	SiRubyonrails,
	SiPostgresql,
} from 'react-icons/si';
import MySimpleWardrobeIcon from '../../Media/Images/portfolio-icons/MSW.png';
import GroceryMagixIcon from '../../Media/Images/portfolio-icons/GM.png';
import TheFinancialTrackerIcon from '../../Media/Images/portfolio-icons/TFT.png';
import MyCryptomaticIcon from '../../Media/Images/portfolio-icons/MC.png';
import UnchaLogo from '../../Media/Images/portfolio-icons/UnchaLogo.png';

function Modal({ open, setOpenModal, modalID }) {
	useEffect(() => {
		open
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'unset');
	}, [open]);
	const modalData = [
		{
			id: 1,
			title: 'My Simple Wardrobe.',
			logo: MySimpleWardrobeIcon,
			desc: 'My Simple Wardrobe™ is a fully functional eCommerce clothing store with Stripe™. Users can either checkout as a guest or sign up to add items to their wishlist, leave product reviews and see their order history. An admin panel allows for easy control of products and users.',
			features: [
				'Guest checkout',
				'Product review system',
				'Personal order history',
				'256-bit AES encryption',
			],
			tools: [SiReact, SiRedux, SiNodedotjs, SiExpress, SiMongodb],
			technologies: {
				frontend: 'React, Redux, Styled Components and CSS',
				backend: 'Node, Express, MongoDB, Stripe, Firebase Storage',
			},
			link: 'www.mysimplewardrobe.com',
			url: 'https://www.mysimplewardrobe.com/',
			github: 'https://github.com/davidmvenegas/my-simple-wardrobe',
			video: 'https://www.youtube.com/embed/ZwveyK1Ag60',
		},
		{
			id: 2,
			title: 'Grocery Magix',
			logo: GroceryMagixIcon,
			desc: "With Grocery Magix™ users can search through millions of recipes, pick their favorites and instantly generate grocery lists. It uses Edamam's Recipe API to provide over 2.3 million recipes. Easily customize your meals and aggregate them into concise grocery lists.",
			features: [
				'Millions of recipes',
				'Over 30 recipe search filters',
				'Secure Register/Login system',
				'Fully responsive',
			],
			tools: [SiReact, SiRedux, SiFirebase, SiCss3],
			technologies: {
				frontend: 'React, Redux, Context API, Vanilla CSS',
				backend: 'Firebase Auth, Firebase Firestore',
			},
			link: 'www.grocerymagix.com',
			url: 'https://www.grocerymagix.com/',
			github: 'https://github.com/davidmvenegas/GroceryMagix',
			video: 'https://www.youtube.com/embed/05RJu6q-kU0',
		},
		{
			id: 3,
			title: 'The Financial Tracker',
			logo: TheFinancialTrackerIcon,
			desc: 'The Financial Tracker™ is a complete personal finance tool. Users can log income and expenses, set monthly budgets and create saving goals. User accounts are secured with the Rails BCrypt gem with all traffic encrypted to and from the server via session cookies.',
			features: [
				'Transaction ledger',
				'Monthly budget',
				'Adjustable savings goals',
				'Fully Responsive',
			],
			tools: [SiReact, SiRedux, SiPostgresql, SiRubyonrails, SiSass],
			technologies: {
				frontend: 'TKinter, Python',
				backend: 'Machine Learning, Multi-Threading, REMBG, Pillow',
			},
			link: 'www.thefinancialtracker.com',
			url: 'https://www.thefinancialtracker.com/',
			github: 'https://github.com/davidmvenegas/financial-tracker',
			video: 'https://www.youtube.com/embed/KX3mJggp4h0',
		},
		{
			id: 4,
			title: 'Uncha',
			logo: UnchaLogo,
			desc: "Uncha is a powerful Window's application for removing image backgrounds from all the pngs in a directory with a single click. Uncha uses multithreading for quick processing of png, tiff, and jpg files and is available for Window's, linux, and macOS operating systems.",
			features: [
				'Machine Learning Technology',
				'Multithreading for powerful performance',
				"High Quality Transparent PNG's",
				'Open Source and Free to Use',
			],
			tools: [SiReact, SiNodedotjs, SiCss3],
			technologies: {
				frontend: 'React, Vanilla CSS',
				backend: 'Node, RapidAPI',
			},
			link: 'https://github.com/seattletravis/Uncha',
			url: 'https://github.com/seattletravis/Uncha',
			github: 'https://github.com/seattletravis/Uncha',
			video: 'https://youtu.be/wbjmltaJSnk?si=fIgJrrDAGPS2pOy1',
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
						2 Minute Video Demonstration <br />
						<span>of</span>
						<br /> <span>{currentData?.title}</span>
					</h1>
					<div className='iframe-wrapper'>
						<iframe
							width='560'
							height='315'
							src={currentData?.video}
							title={currentData?.title}
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture'
							allowFullScreen='allowfullscreen'></iframe>
					</div>
					<div className='modal-tech-wrapper'>
						<h1>Technologies Used</h1>
						<div className='modal-techs'>
							<span>Frontend:&nbsp;</span>
							{currentData?.technologies?.frontend}
						</div>
						<div className='modal-techs'>
							<span>Backend:&nbsp;</span>
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
