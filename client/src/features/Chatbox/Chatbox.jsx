import LeftBar from "./components/LeftBar.jsx";
import Chat from "./components/Chat.jsx";
import RightBar from "./components/RightBar.jsx";
import { useState } from "react";

function Chatbox() {
    const [menuOpen, setMenuOpen] = useState(0); // 0-Chat 1-LeftBar 2-RightBar

    return (
        <div className="w-full h-full grid lg:grid-cols-5 grid-cols-1 bg-tran" id="chatbox">
            <LeftBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Chat menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <RightBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    );
}

export default Chatbox;
