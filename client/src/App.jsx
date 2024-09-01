import { useEffect, useState } from "react";
import Chatbox from "./features/Chatbox/Chatbox.jsx";
import Authentication from "./features/Authentication/Authentication.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase.js";
import { useUserStore } from "./lib/userStore.js";

function App() {

	const { currentUser, isLoading, fetchUserInfo } = useUserStore(); 
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

	// User Info Change
	useEffect(() => {
		window.addEventListener("resize", handleResize);

		const unSub = onAuthStateChanged(auth, (user) => {
			fetchUserInfo(user?.uid);
		});

		return(() => {
			window.removeEventListener("resize", handleResize);
			unSub();
		});
	}, [fetchUserInfo]);

	if (isLoading) return <div>Loading...</div>
	if (currentUser) return <Chatbox isSmallScreen={isSmallScreen} />;
	return <Authentication isSmallScreen={isSmallScreen} />;
}

export default App;
