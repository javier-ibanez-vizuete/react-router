import { NavLink } from "react-router-dom";

export const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<NavLink to="/">Home Page</NavLink>
				<NavLink to="/about">About Page</NavLink>
			</div>
		</nav>
	);
};
