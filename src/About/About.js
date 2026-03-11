import './about.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PDF_Icon from '../Media/Images/pdf.png';
import GoogleDocs_Icon from '../Media/Images/googleDocs.png';

function About() {
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className='about-container'>
				<div className='about-left-box'>
					<h1 className='about-left-title'>
						<span id='letterHi' className='easeInOut'>
							H
						</span>
						<span id='letterhI' className='easeInOut'>
							i
						</span>
						<span id='letterComma' className='easeInOut'>
							!
						</span>
						<br />
						{/* <br /> */}
						<span id='letterIm' className='easeInOut'>
							I
						</span>
						<span id='letterApos' className='easeInOut'>
							'
						</span>
						<span id='letteriM' className='easeInOut'>
							m
						</span>
						&nbsp;
						<span id='letterTravis' className='easeInOut'>
							T
						</span>
						<span id='lettertRavis' className='easeInOut'>
							r
						</span>
						<span id='lettertrAvis' className='easeInOut'>
							a
						</span>
						<span id='lettertraVis' className='easeInOut'>
							v
						</span>
						<span id='lettertravIs' className='easeInOut'>
							i
						</span>
						<span id='lettertraviS' className='easeInOut'>
							s
						</span>
						<span id='lettertravisComma' className='easeInOut'>
							,
						</span>
						<br />
						<span id='letterFullstack' className='easeInOut'>
							F
						</span>
						<span id='letterfUllstack' className='easeInOut'>
							u
						</span>
						<span id='letterfuLlstack' className='easeInOut'>
							l
						</span>
						<span id='letterfulLstack' className='easeInOut'>
							l
						</span>
						<span id='letterfullStack' className='easeInOut'>
							s
						</span>
						<span id='letterfullsTack' className='easeInOut'>
							t
						</span>
						<span id='letterfullstAck' className='easeInOut'>
							a
						</span>
						<span id='letterfullstaCk' className='easeInOut'>
							c
						</span>
						<span id='letterfullstacK' className='easeInOut'>
							k
						</span>
						&nbsp;
						<span id='letterSoftware' className='easeInOut'>
							S
						</span>
						<span id='lettersOftware' className='easeInOut'>
							o
						</span>
						<span id='lettersoFtware' className='easeInOut'>
							f
						</span>
						<span id='lettersofTware' className='easeInOut'>
							t
						</span>
						<span id='lettersoftWare' className='easeInOut'>
							w
						</span>
						<span id='lettersoftwAre' className='easeInOut'>
							a
						</span>
						<span id='lettersoftwaRe' className='easeInOut'>
							r
						</span>
						<span id='lettersoftwarE' className='easeInOut'>
							e
						</span>
						<br />
						<span id='letterDeveloper' className='easeInOut'>
							D
						</span>
						<span id='letterdEveloper' className='easeInOut'>
							e
						</span>
						<span id='letterdeVeloper' className='easeInOut'>
							v
						</span>
						<span id='letterdevEloper' className='easeInOut'>
							e
						</span>
						<span id='letterdeveLoper' className='easeInOut'>
							l
						</span>
						<span id='letterdevelOper' className='easeInOut'>
							o
						</span>
						<span id='letterdeveloPer' className='easeInOut'>
							p
						</span>
						<span id='letterdevelopEr' className='easeInOut'>
							e
						</span>
						<span id='letterdevelopeR' className='easeInOut'>
							r
						</span>
					</h1>
					<p className='about-left-description'>
						Strong Technical Communication Skills
					</p>
					<div className='about-left-button-box'>
						<button
							onClick={() => navigate('/contact')}
							className='about-contact-button'>
							Contact me!
						</button>
						<div className='about-resume-box'>
							<h2 className='about-resume-title'>My Resume:</h2>
							<div className='about-resume-buttons-wrapper'>
								<a href='Travis_Lamberte_Resume.pdf' download>
									<img src={PDF_Icon} alt='PDF' className='about-resume-pdf' />
								</a>
								<a
									href='https://docs.google.com/document/d/1cYpPYM66l6z3Jp8V999oICjoJAMXVm3qzjc2r2kIJ_Y/edit?usp=sharing'
									target='_blank'
									rel='noreferrer'>
									<img
										src={GoogleDocs_Icon}
										alt='Google Docs'
										className='about-resume-googleDocs'
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='about-right-box'>
					<div className='about-right-title'>About</div>
					<p className='about-right-description'>
						I'm a software developer with strong computer programming
						fundamentals and strong full stack development skills. I'm great at
						problem solving and technical communication. I have a solid
						background in IT fundamentals that allows me a unique perspective on
						building out software applications.
						<br />
						<br />
						It's important for me to keep learning new technologies and to keep
						learning more on my existing knowledge base. I enjoy challenging
						myself with{' '}
						<span onClick={() => navigate('/projects')}>projects</span>
						&nbsp; that require me to become a better programmer.
						<br />
						<br />I enjoy getting out to any coding meetups in Seattle area, and
						regularly chatting with my friends on Linkedin. Let's connect and
						start a conversation!
					</p>
				</div>
			</div>
		</>
	);
}

export default About;
