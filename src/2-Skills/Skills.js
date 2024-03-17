import './skills.css';
import { useState, useEffect } from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { GiClick } from 'react-icons/gi';
import ReactImg from '../Media/Images/skills/react.png';
import JavascriptImg from '../Media/Images/skills/javascript.png';
import CSSImg from '../Media/Images/skills/css.png';
import RubyImg from '../Media/Images/skills/ruby.png';
import ReduxImg from '../Media/Images/skills/redux.png';
import NodeImg from '../Media/Images/skills/node.png';
import MongoDBImg from '../Media/Images/skills/mongodb.png';
import RailsImg from '../Media/Images/skills/rails.png';
import SQLImg from '../Media/Images/skills/sql.png';
import FirebaseImg from '../Media/Images/skills/firebase.png';
import FlatironImg from '../Media/Images/flatiron_logo.png';
import CWUImg from '../Media/Images/cwu_logo.png';
import ComptiaImg from '../Media/Images/comptia.png';
import AWSImg from '../Media/Images/aws.jpg';
import MetaImg from '../Media/Images/meta_logo.png';
import GoogleImg from '../Media/Images/google_logo.png';
import FlatironCert from '../Media/Images/flatiron_cert.png';
import AtlassianImg from '../Media/Images/atlassian.png';
import TypeWriterEffect from 'react-typewriter-effect';
import { useInView } from 'react-intersection-observer';

function Skills() {
	useEffect(() => window.scrollTo(0, 0), []);
	const [mouse1, setMouse1] = useState(false);
	const [mouse2, setMouse2] = useState(false);
	const [mouse3, setMouse3] = useState(false);
	const [mouse4, setMouse4] = useState(false);
	const [cert, setCert] = useState(false);
	const [edSepRef, edSepInView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const [edTitleRef, edTitleInView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const [ed1Ref, ed1InView] = useInView({ threshold: 0, triggerOnce: true });
	const [ed2Ref, ed2InView] = useInView({ threshold: 0, triggerOnce: true });
	const [ed3Ref, ed3InView] = useInView({ threshold: 0, triggerOnce: true });
	const [ed4Ref, ed4InView] = useInView({ threshold: 0, triggerOnce: true });
	return (
		<div className='skills-container'>
			<div className='skills-wrapper'>
				<h1 className='skills-header'>
					<span>T</span>
					<span>e</span>
					<span>c</span>
					<span>h</span>
					<span>n</span>
					<span>i</span>
					<span>c</span>
					<span>a</span>
					<span>l</span>
					&nbsp;
					<span>E</span>
					<span>x</span>
					<span>p</span>
					<span>e</span>
					<span>r</span>
					<span>t</span>
					<span>i</span>
					<span>s</span>
					<span>e</span>
				</h1>
				<p className='skills-description'>
					<TypeWriterEffect
						startDelay={1000}
						cursorColor='white'
						text="I'm a fast learner who uses documentation and online resources to build strong code."
						typeSpeed={35}
						hideCursorAfterText={true}
					/>
					&nbsp;&nbsp;
					<span id='skillsMobileSecond'>
						<TypeWriterEffect
							startDelay={4000}
							cursorColor='white'
							//   text="These are my strongest skillsets and technologies."
							typeSpeed={35}
							hideCursorAfterText={true}
						/>
					</span>
				</p>
				<div className='skills-box'>
					<h1 className='skills-title'>Frontend</h1>
					<div className='skills-content'>
						<div id='ReactSkill' className='skills-item'>
							<img src={ReactImg} alt='React' />
							<h2>React JS</h2>
							<p>Seasoned React Developer</p>
						</div>
						<div id='ReactSkill' className='skillSeparator'></div>
						{/* <div id="ReduxSkill" className="skills-item">
              <img src={ReduxImg} alt="Redux" />
              <h2>Redux</h2>
              <p>A useful tool for managing state in large-scale systems</p>
            </div>
            <div id="ReduxSkill" className="skillSeparator"></div> */}
						<div id='JavascriptSkill' className='skills-item'>
							<img src={JavascriptImg} alt='Javascript' />
							<h2>Javascript</h2>
							<p>Very strong JavaScript fundamentals.</p>
						</div>
						<div
							id='JavascriptSkill'
							className='skillSeparator hiddenSkillSeparator'></div>
						{/* <div id="RubySkill" className="skills-item responsiveSkillsItem1">
              <img src={RubyImg} alt="Ruby" />
              <h2>Ruby</h2>
              <p>My first programming language, dynamic and simplistic</p>
            </div> */}
						{/* <div
              id="RubySkill"
              className="skillSeparator responsiveSkillsItem2"
            ></div> */}
						<div id='CSSSkill' className='skills-item responsiveSkillsItem3'>
							<img src={CSSImg} alt='CSS' />
							<h2>CSS</h2>
							<p>
								I stay current on new CSS features to get the most out of the
								latest updates.
							</p>
						</div>
					</div>
				</div>
				<div className='skills-box'>
					<h1 className='skills-title'>Backend</h1>
					<div className='skills-content'>
						<div id='NodeSkill' className='skills-item'>
							<img src={NodeImg} alt='Node JS' />
							<h2>Node JS</h2>
							<p>Proficient Node Developer.</p>
						</div>
						<div id='NodeSkill' className='skillSeparator'></div>
						{/* <div id="MongoDBSkill" className="skills-item">
              <img src={MongoDBImg} alt="MongoDB" />
              <h2>MongoDB</h2>
              <p>
                Mongoose's flexibility allows me to create complex data models
                with ease
              </p>
            </div>
            <div id="MongoDBSkill" className="skillSeparator"></div> */}
						<div id='SQLSkill' className='skills-item'>
							<img src={SQLImg} alt='SQL' />
							<h2>SQL</h2>
							<p>Strong SQL skills and great database design fundamentals.</p>
						</div>
						<div
							id='SQLSkill'
							className='skillSeparator hiddenSkillSeparator'></div>
						<div id='DjangoSkill' className='skills-item responsiveSkillsItem1'>
							<img src={RailsImg} alt='Ruby-on-Rails' />
							<h2>Django</h2>
							<p>Seasoned Django Developer</p>
						</div>
						{/* <div
              id="RubyonRailsSkill"
              className="skillSeparator responsiveSkillsItem2"
            ></div> */}
						{/* <div
              id="FirebaseSkill"
              className="skills-item responsiveSkillsItem3"
            >
              <img src={FirebaseImg} alt="Firebase" />
              <h2>Firebase</h2>
              <p>
                A highly versatile NoSQL database - I'm also adept at its
                Storage and Auth systems
              </p>
            </div> */}
					</div>
				</div>
			</div>
			<div
				className='education-separator'
				ref={edSepRef}
				id={edSepInView ? 'education-separator-active' : undefined}></div>
			<div className='education-wrapper'>
				<h1
					className='education-header'
					ref={edTitleRef}
					id={edTitleInView ? 'certTitle-active' : undefined}>
					<span>E</span>
					<span>d</span>
					<span>u</span>
					<span>c</span>
					<span>a</span>
					<span>t</span>
					<span>i</span>
					<span>o</span>
					<span>n</span>&nbsp;
					<span>a</span>
					<span>n</span>
					<span>d</span>&nbsp;
					<span>C</span>
					<span>e</span>
					<span>r</span>
					<span>t</span>
					<span>i</span>
					<span>f</span>
					<span>i</span>
					<span>c</span>
					<span>a</span>
					<span>t</span>
					<span>i</span>
					<span>o</span>
					<span>n</span>
					<span>s</span>
				</h1>
				<div className='cert-items'>
					<div
						className='cwu-item'
						ref={ed1Ref}
						id={ed1InView ? 'cert1-active' : undefined}
						onMouseEnter={() => setMouse1(true)}
						onMouseLeave={() => setMouse1(false)}>
						<div
							className='cwu-img-wrapper'
							onMouseEnter={() => setMouse1(false)}
							onMouseLeave={() => setMouse1(true)}
							onClick={() => setCert(!cert)}>
							<div className='cwu-images'>
								<img
									className='cwu-img'
									src={CWUImg}
									alt='CWU'
									style={cert ? { opacity: '0' } : { opacity: '1' }}
								/>
								<img
									className='cwu-img'
									src={FlatironCert}
									alt='Flatiron'
									style={cert ? { opacity: '1' } : { opacity: '0' }}
								/>
							</div>
							<GiClick id={mouse1 ? 'cwu-pointer' : 'cwu-pointer-gone'} />
							<div className='cwu-img-hover-box'>
								<h1 style={cert ? { opacity: '1' } : { opacity: '0' }}>
									Click to hide certificate
								</h1>
								<h1 style={cert ? { opacity: '0' } : { opacity: '1' }}>
									Click to view certificate
								</h1>
							</div>
						</div>
						<div className='cwu-text-box'>
							<h3>Ellensburg, WA</h3>
							<h1>BS in Chemistry & Minor in Math</h1>
							<h4>Central Washington University</h4>
							<p>
								A rounded education in advanced areas of science including
								Chemistry, Math, Computer Science, Physics, Engineering,
								Biology, and Education.
							</p>
							<div className='cwu-description-box'>
								<p>As a student:</p>
								<ul>
									<li>Studied multiple sciencetific areas</li>
									<li>Participated in Undergraduate Research</li>
									<li>Made math studies a priority</li>
									<li>Learned ways to solve complex problems</li>
								</ul>
							</div>
							<p>
								Conducted undergrasuate research on C60 Buckminsterfullerene
								nanoparticles and their toxicity on biological systems. Reaseach
								included imaging nanoparticles using scanning tunneling
								microscopy.
							</p>
						</div>
					</div>
					<div
						ref={ed2Ref}
						className='cert-item'
						id={ed2InView ? 'cert2-active' : undefined}
						onMouseEnter={() => setMouse2(true)}
						onMouseLeave={() => setMouse2(false)}>
						<a
							href='https://coursera.org/share/5112f23d56e2e1a4e9c3032d16a6ad8e'
							target='_blank'
							rel='noreferrer'>
							<div
								className='cert-img-wrapper'
								onMouseEnter={() => setMouse2(false)}
								onMouseLeave={() => setMouse2(true)}>
								<img className='cert-img' src={MetaImg} alt='AWS' />
								<GiClick id={mouse2 ? 'cert-pointer' : 'cert-pointer-gone'} />
								<div className='cert-img-hover-box'>
									<h1>View certificate</h1>
									<BsBoxArrowUpRight id='cert-arrow' />
								</div>
							</div>
						</a>
						<div className='cert-text-box'>
							<h1 className='cert-title'>Meta Front End Developer</h1>
							<p>
								The Meta Professional Certificate for Front End Software
								Development.
							</p>
						</div>
					</div>
					<div
						ref={ed3Ref}
						className='cert-item'
						id={ed3InView ? 'cert3-active' : undefined}
						onMouseEnter={() => setMouse3(true)}
						onMouseLeave={() => setMouse3(false)}>
						<a
							href='https://coursera.org/share/bfee3098f1003fbd25b21aefa21720d5'
							target='_blank'
							rel='noreferrer'>
							<div
								className='cert-img-wrapper'
								onMouseEnter={() => setMouse3(false)}
								onMouseLeave={() => setMouse3(true)}>
								<img
									className='cert-img'
									src={GoogleImg}
									alt='Comptia Security +'
								/>
								<GiClick id={mouse3 ? 'cert-pointer' : 'cert-pointer-gone'} />
								<div className='cert-img-hover-box'>
									<h1>View certificate</h1>
									<BsBoxArrowUpRight id='cert-arrow' />
								</div>
							</div>
						</a>
						<div className='cert-text-box'>
							<h1 className='cert-title'>Google IT Support</h1>
							<p>Google's Professional certificate for IT professionals.</p>
						</div>
					</div>
					{/* <div
            ref={ed4Ref}
            className="cert-item"
            id={ed4InView ? "cert4-active" : undefined}
            onMouseEnter={() => setMouse4(true)}
            onMouseLeave={() => setMouse4(false)}
          >
            <a
              href="https://university.atlassian.com/student/award/SzMgzKvEBivKWJWuomUu2PR5"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="cert-img-wrapper"
                onMouseEnter={() => setMouse4(false)}
                onMouseLeave={() => setMouse4(true)}
              >
                <img
                  className="cert-img"
                  src={AtlassianImg}
                  alt="Jira Fundamentals"
                />
                <GiClick id={mouse4 ? "cert-pointer" : "cert-pointer-gone"} />
                <div className="cert-img-hover-box">
                  <h1>View certificate</h1>
                  <BsBoxArrowUpRight id="cert-arrow" />
                </div>
              </div>
            </a>
            <div className="cert-text-box">
              <h1 className="cert-title">Jira Fundamentals</h1>
              <p>
                I earned a perfect score on Atlassian University's Jira
                Fundamentals certification. Atlassian is the leader in
                SCRUM/agile managment software with their products used by{" "}
                <a
                  href="https://www.linkedin.com/pulse/83-fortune-500-companies-use-atlassian-products-divyanshu-raj-/"
                  target="_blank"
                  rel="noreferrer"
                >
                  83%
                </a>{" "}
                of Fortune 500 companies.
              </p>
            </div>
          </div> */}
				</div>
			</div>
		</div>
	);
}

export default Skills;
