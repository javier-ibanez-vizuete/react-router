import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
export const App = () => {
	return (
		<div className="app-container">
			<NavBar />
			<main className="main">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</main>
			<footer className="footer">FOOTER</footer>
		</div>
	);
};
