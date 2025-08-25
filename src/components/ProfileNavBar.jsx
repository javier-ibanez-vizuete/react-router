import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";

export const ProfileNavBar = () => {
	const { lang, TEXTS } = useContext(LanguageContext);

	return (
		<nav className="profile-navbar">
			<div className="profile-navbar-container">
				<NavLink className={"profile-nav-item"} to="/user/settings">
					{TEXTS[lang].navUserSettings}
				</NavLink>
				<NavLink className={"profile-nav-item"} to="/user/details">
					{TEXTS[lang].navUserDetails}
				</NavLink>
			</div>
		</nav>
	);
};
