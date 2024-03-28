import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/'>About</Link>
					</li>
					<li>
						<Link to='/skills'>Skills</Link>
					</li>
					<li>
						<Link to='/projects'>Projects</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
