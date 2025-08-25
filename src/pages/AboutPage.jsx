import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const AboutPage = () => {
	const { lang, TEXTS } = useContext(LanguageContext);

	return (
		<>
			<h1>{TEXTS[lang].titleAboutPage}</h1>
		</>
	);
};
