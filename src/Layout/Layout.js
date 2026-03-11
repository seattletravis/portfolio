import { Outlet, Link } from 'react-router-dom';
import './layout.css';

const Layout = () => {
	return (
		<>
			<div className='page-container'>
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
