import LeftBar from "./components/LeftBar.jsx";
import Chat from "./components/Chat.jsx";
import RightBar from "./components/RightBar.jsx";
import { useEffect, useState } from "react";

function Chatbox(props) {
    // 0-Chat 1-LeftBar 2-RightBar
    const [menuOpen, setMenuOpen] = useState(0); 

    return (
        <div id="chatbox" className="fixed overscroll-y-contain w-full h-full max-h-fit grid lg:grid-cols-5 grid-cols-1">
            {
                props.isSmallScreen 
                    ? (
                        menuOpen === 0
                            ? <Chat setMenuOpen={setMenuOpen} />
                            : (
                                menuOpen === 1
                                    ? <LeftBar setMenuOpen={setMenuOpen} />
                                    : <RightBar setMenuOpen={setMenuOpen} />
                            )
                    )
                    : (
                        <>
                            <LeftBar />
                            <Chat />
                            <RightBar />
                        </>
                    )
            }
        </div>
    );
}

export default Chatbox;
