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
						<span id='letterHi' Class='easeInOut'>
							H
						</span>
						<span id='letterhI' Class='easeInOut'>
							i
						</span>
						<span id='letterComma' Class='easeInOut'>
							!
						</span>
						<br />
						{/* <br /> */}
						<span id='letterIm' Class='easeInOut'>
							I
						</span>
						<span id='letterApos' Class='easeInOut'>
							'
						</span>
						<span id='letteriM' Class='easeInOut'>
							m
						</span>
						&nbsp;
						<span id='letterTravis' Class='easeInOut'>
							T
						</span>
						<span id='lettertRavis' Class='easeInOut'>
							r
						</span>
						<span id='lettertrAvis' Class='easeInOut'>
							a
						</span>
						<span id='lettertraVis' Class='easeInOut'>
							v
						</span>
						<span id='lettertravIs' Class='easeInOut'>
							i
						</span>
						<span id='lettertraviS' Class='easeInOut'>
							s
						</span>
						<span id='lettertravisComma' Class='easeInOut'>
							,
						</span>
						<br />
						<span id='letterFullstack' Class='easeInOut'>
							F
						</span>
						<span id='letterfUllstack' Class='easeInOut'>
							u
						</span>
						<span id='letterfuLlstack' Class='easeInOut'>
							l
						</span>
						<span id='letterfulLstack' Class='easeInOut'>
							l
						</span>
						<span id='letterfullStack' Class='easeInOut'>
							s
						</span>
						<span id='letterfullsTack' Class='easeInOut'>
							t
						</span>
						<span id='letterfullstAck' Class='easeInOut'>
							a
						</span>
						<span id='letterfullstaCk' Class='easeInOut'>
							c
						</span>
						<span id='letterfullstacK' Class='easeInOut'>
							k
						</span>
						&nbsp;
						<span id='letterSoftware' Class='easeInOut'>
							S
						</span>
						<span id='lettersOftware' Class='easeInOut'>
							o
						</span>
						<span id='lettersoFtware' Class='easeInOut'>
							f
						</span>
						<span id='lettersofTware' Class='easeInOut'>
							t
						</span>
						<span id='lettersoftWare' Class='easeInOut'>
							w
						</span>
						<span id='lettersoftwAre' Class='easeInOut'>
							a
						</span>
						<span id='lettersoftwaRe' Class='easeInOut'>
							r
						</span>
						<span id='lettersoftwarE' Class='easeInOut'>
							e
						</span>
						<br />
						<span id='letterDeveloper' Class='easeInOut'>
							D
						</span>
						<span id='letterdEveloper' Class='easeInOut'>
							e
						</span>
						<span id='letterdeVeloper' Class='easeInOut'>
							v
						</span>
						<span id='letterdevEloper' Class='easeInOut'>
							e
						</span>
						<span id='letterdeveLoper' Class='easeInOut'>
							l
						</span>
						<span id='letterdevelOper' Class='easeInOut'>
							o
						</span>
						<span id='letterdeveloPer' Class='easeInOut'>
							p
						</span>
						<span id='letterdevelopEr' Class='easeInOut'>
							e
						</span>
						<span id='letterdevelopeR' Class='easeInOut'>
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
						regularly chatting with my friends on Linkedin. Let's connect!
					</p>
				</div>
			</div>
		</>
	);
}

export default About;
