import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<LanguageProvider>
				<AuthProvider>
					<App />
				</AuthProvider>
			</LanguageProvider>
		</BrowserRouter>
	</StrictMode>
);
