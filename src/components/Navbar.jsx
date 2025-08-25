import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";

export const NavBar = () => {
	const { lang, TEXTS } = useContext(LanguageContext);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<NavLink className="nav-item" to="/">
					{TEXTS[lang].navHomePage}
				</NavLink>
				<NavLink className={"nav-item"} to="/user">
					{TEXTS[lang].navUserPage}
				</NavLink>
				<NavLink className="nav-item" to="/about">
					{TEXTS[lang].navAboutPage}
				</NavLink>
			</div>
		</nav>
	);
};
