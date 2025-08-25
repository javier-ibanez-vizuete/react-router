import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const UserDetails = () => {
	const { lang, TEXTS } = useContext(LanguageContext);

	return (
		<section className="user-details">
			<h2>{TEXTS[lang].titleDetailsUserPage}</h2>
			<article>DETALLES DEL PERFIL DE USUARIO</article>
		</section>
	);
};
