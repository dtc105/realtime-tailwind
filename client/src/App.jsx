import { useEffect, useState } from "react";
import Chatbox from "./features/Chatbox/Chatbox.jsx";
import Authentication from "./features/Authentication/Authentication.jsx";

function App() {

	const [user, setUser] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

	function handleResize() {
		if (isSmallScreen) {
			if (window.innerWidth >= 1024) {
				setIsSmallScreen(false);
			}
		} else {
			if (window.innerWidth < 1024) {
				setIsSmallScreen(true);
			}
		}
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return(() => {
			window.removeEventListener("resize", handleResize);
		});
	});

	if (user) return <Chatbox isSmallScreen={isSmallScreen} />;
	return <Authentication isSmallScreen={isSmallScreen} />;
}

export default App;
