import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

function Chat(props) {
    const isOpen = props.menuOpen === 0;
    const [emojiMenuOpen, setEmojiMenuOpen] = useState(false);
    const [newText, setNewText] = useState("");

    function handleEmoji(e) {
        setNewText(prev => prev + e.emoji);
        setEmojiMenuOpen(false);
    }

    function handleSend() {
        if (newText !== "") {
            console.log(newText);
            setNewText("");
        }
    }

    return (
        <div className={`flex flex-col lg:col-span-3 lg:flex ${isOpen ? "block" : "hidden"}`}>
            {/* Header */}
            <header className="flex justify-center items-center p-2 py-3 bg-slate-700">
                <button 
                    className="block lg:hidden p-1 px-2 lg:hover:scale-105 transition"
                    onClick={() => props.setMenuOpen(1)}
                > {/* Switch to LeftBar */}
                    <img 
                        src="/list.svg" 
                        alt="menu" 
                        className="h-7" 
                    />
                </button> 
                <button 
                    className="user flex-1 flex justify-start items-center gap-3 p-1 px-4"
                    onClick={() => {/* Go to user profile */}}
                > {/* Go to user profile */}
                    <img 
                        src="/avatar.svg" 
                        alt="avatar" 
                        className="h-7 object-cover" 
                    />
                    <h2 className="text-2xl leading-7 text-zinc-100">Jane Doe</h2>
                </button>
                <button 
                    className="block lg:hidden p-1 px-2 lg:hover:scale-105 transition"
                    onClick={() => props.setMenuOpen(2)}
                > {/*Switch to RightBar */}
                    <img 
                        src="/three-dots.svg" 
                        alt="menu" 
                        className="h-7" 
                    />
                </button> 
            </header>

            {/* Texts List */}
            <div className="flex flex-1 flex-col mx-2 gap-2" id="texts">
                <div className="w-2/3 text">
                    <span className="message">hello john doe wussup blah blah blah blah</span>
                    <span className="time">1 min ago</span>
                </div>
                <div className="w-2/3 own text">
                    <span className="message">sup qqqqqqqqqqqqqqqqqqq</span>
                    <span className="time">1 min ago</span>
                </div>
                <div className="w-2/3 own text">
                    <span className="message">Lorem ipsum dolor set Lorem ipsum dolor set Lorem ipsum dolor set Lorem ipsum dolor set Lorem ipsum dolor set Lorem ipsum dolor set </span>
                    <span className="time">1 min ago</span>
                </div>
            </div>

            {/* Message Input */}
            <div className=" relative flex bg-slate-700 p-2 py-3">
                <button
                    onClick={() => setEmojiMenuOpen(prev => !prev)}
                    className="p-1 px-2"
                >
                    <img 
                        src="/emoji-sunglasses-fill.svg" 
                        alt="emoji menu" 
                        className="h-7"
                    />
                </button>
                <div className="absolute bottom-full left-0">
                    <EmojiPicker 
                        open={emojiMenuOpen}
                        onEmojiClick={handleEmoji}
                    />
                </div>
                <input 
                    type="text" 
                    className="flex-1 mx-2 px-2 rounded"
                    placeholder={`Message Jane Doe`} 
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
                <button 
                    type="submit" 
                    className="bg-sky-300 p-3 py-2 rounded lg:hover:scale-105 transition"
                    onClick={handleSend}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default Chat;
