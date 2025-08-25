import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { Footer } from "./components/Footer/Footer";
import { UserPage } from "./pages/UserPage";
import { UserSettings } from "./components/UserSettings";
import { UserDetails } from "./components/UserDetails";
import { PrivateRoute } from "./components/PrivateRoute";
export const App = () => {
	return (
		<div className="app-container">
			<NavBar />
			<main className="main">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />

					<Route element={<PrivateRoute />}>
						<Route path="/user" element={<UserPage />}>
							<Route path="/user/settings" element={<UserSettings />} />
							<Route path="/user/details" element={<UserDetails />} />
						</Route>
					</Route>
				</Routes>
			</main>
			<Footer />
		</div>
	);
};
