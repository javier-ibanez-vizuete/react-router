import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const HomePage = () => {
	const { lang, TEXTS } = useContext(LanguageContext);

	return (
		<>
			<h1>{TEXTS[lang].titleHomePage}</h1>
		</>
	);
};
