import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
	return (
		<>
			<div className="nav-container">
				<Link to="/about">About</Link>
				<Link to="/contacts">Contacts</Link>
				<Link to="/work">Work</Link>
			</div>
		</>
	);
};

export default Nav;
