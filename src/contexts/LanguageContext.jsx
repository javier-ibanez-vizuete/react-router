import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState("en");

	const onToggleLang = () => {
		setLang((prevLang) => (prevLang === "en" ? "es" : "en"));
	};

	const TEXTS = {
		en: {
			navHomePage: "Home",
			navAboutPage: "About",
			navUserPage: "Profile",
			navUserSettings: "Settings",
			navUserDetails: "Details",
			navLogIn: "Log In",
			navLogOut: "Log Out",
			titleHomePage: "Home Page",
			titleAboutPage: "About Me",
			titleUserPage: "Profile",
			titleSettingsUserPage: "Settings",
			titleDetailsUserPage: "Details",
		},
		es: {
			navHomePage: "Inicio",
			navAboutPage: "Sobre mi",
			navUserPage: "Perfil",
			navUserSettings: "Configuración",
			navUserDetails: "Detalles",
			navLogIn: "Iniciar Sesión",
			navLogOut: "Cerrar Sesión",
			titleHomePage: "Pagina Principal",
			titleAboutPage: "Sobre mi",
			titleUserPage: "Perfil",
			titleSettingsUserPage: "Configuración",
			titleDetailsUserPage: "Detalles",
		},
	};

	return <LanguageContext value={{ lang, TEXTS, onToggleLang }}>{children}</LanguageContext>;
};
