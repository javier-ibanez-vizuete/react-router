import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import { AuthContext } from "../contexts/AuthContext";

export const NavBar = () => {
	const { lang, TEXTS } = useContext(LanguageContext);
	const { user, setUser } = useContext(AuthContext);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<NavLink className="nav-item" to="/">
					{TEXTS[lang].navHomePage}
				</NavLink>
				<NavLink className="nav-item" to="/about">
					{TEXTS[lang].navAboutPage}
				</NavLink>
				{user && (
					<NavLink className={"nav-item"} to="/user">
						{TEXTS[lang].navUserPage}
					</NavLink>
				)}
				<button className="nav-item" onClick={() => setUser((prev) => !prev)}>
					{user ? TEXTS[lang].navLogOut : TEXTS[lang].navLogIn}
				</button>
			</div>
		</nav>
	);
};
