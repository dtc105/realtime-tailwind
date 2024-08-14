import List from './components/List/List.jsx';
import Chat from './components/Chat/Chat.jsx';
import Details from './components/Details/Details.jsx';
import React from 'react';

function Chatbox() {
    
    
    
    return (
        <div className="chatbox flex justify-center items-center h-screen w-screen">
            <div className="w-3/5 m-auto">
                <List />
                <Chat />
                <Details />
            </div>
        </div>
    );
}

export default Chatbox;