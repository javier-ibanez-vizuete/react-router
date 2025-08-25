import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export const Footer = () => {
	const { lang, onToggleLang } = useContext(LanguageContext);

	return (
		<footer className="footer">
			<button onClick={onToggleLang}>{lang === "en" ? "Change to Spanish" : "Cambiar a Inglés"}</button>
		</footer>
	);
};
