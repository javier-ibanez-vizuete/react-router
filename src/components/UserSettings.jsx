import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const UserSettings = () => {
	const { lang, TEXTS } = useContext(LanguageContext);

	return (
		<section className="user-settings">
			<h2>{TEXTS[lang].titleSettingsUserPage}</h2>
			<div>CONTENEDOR PARA CONFIGURAR EL USUARIO</div>
		</section>
	);
};
