import EmojiPicker from 'emoji-picker-react';
import { useState, useEffect } from 'react';

function Chat(props) {

    // ---
    // Message and Emoji
    // ---
    const isOpen = props.menuOpen === 0;
    const [emojiMenuOpen, setEmojiMenuOpen] = useState(false);
    const [newMessage, setNewMessage] = useState("");

    // Add emoji to message
    function handleEmoji(e) {
        setNewMessage(prev => prev + e.emoji);
        setEmojiMenuOpen(false);
    }

    // Send message and reset input
    function handleSend() {
        if (newMessage !== "") {
            console.log(newMessage);
            setNewMessage("");
        }
    }

    return (
        <div className={`lg:static fixed flex flex-col h-smscreen lg:col-span-3 lg:flex lg:border-x bg-tran ${isOpen ? "block" : "hidden"}`}>
            {/* Header */}
            <header className="flex justify-center items-center px-2 py-3 bg-slate-700">
                <button 
                    className="block lg:hidden px-2 py-1 lg:hover:scale-105 transition"
                    onClick={() => props.setMenuOpen(1)}
                > {/* Switch to LeftBar */}
                    <img 
                        src="/list.svg" 
                        alt="menu" 
                        className="h-8" 
                    />
                </button> 
                <button 
                    className="user flex-1 flex justify-start items-center gap-3 p-1 px-4"
                    onClick={() => {/* Go to user profile function */}}
                > {/* Go to user profile */}
                    <img 
                        src="/avatar.svg" 
                        alt="avatar" 
                        className="h-8 object-cover" 
                    />
                    <h2 className="text-2xl leading-8 text-zinc-100">Jane Doe</h2>
                </button>
                <button 
                    className="block lg:hidden p-1 px-2 lg:hover:scale-105 transition"
                    onClick={() => props.setMenuOpen(2)}
                > {/*Switch to RightBar */}
                    <img 
                        src="/three-dots.svg" 
                        alt="menu" 
                        className="h-8" 
                    />
                </button> 
            </header>

            {/* Texts List */}
            <div 
                id="texts" 
                className="flex flex-1 flex-col mx-2 gap-2 overflow-y-auto scrollbar-hide"
            >
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
            <div className="flex relative bg-slate-800 p-2 py-3">
                <button
                    onClick={() => setEmojiMenuOpen(prev => !prev)}
                    className="p-1 px-2"
                >
                    <img 
                        src="/emoji-sunglasses-fill.svg" 
                        alt="emoji menu" 
                        className="h-8"
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
                    id="textInput"
                    placeholder={`Message Jane Doe`} 
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                    onKeyUp={e => e.code === "Enter" && handleSend()}
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
