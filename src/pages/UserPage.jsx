import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Outlet } from "react-router-dom";
import { ProfileNavBar } from "../components/ProfileNavBar";

export const UserPage = () => {
	const { lang, TEXTS } = useContext(LanguageContext);

	return (
		<section className="profile-page">
			<h1>{TEXTS[lang].titleUserPage}</h1>
			<ProfileNavBar />

			<Outlet />
		</section>
	);
};
