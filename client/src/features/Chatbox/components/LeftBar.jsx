import { useState } from 'react';

function LeftBar(props) {
    const isOpen = props.menuOpen === 1;
    const [usersList, setUsersList] = useState([
        {
            username: "qaz",
            message: "sup"
        },
        {
            username: "kodi",
            message: "cum"
        },
        {
            username: "dia",
            message: "skibidi toilet ohio gyatt"
        },
        {
            username: "adits87",
            message: "imma say it"
        },
        {
            username: "this is a really long username which might need to be capped at a 16 or 32 character limit",
            message: "heres a really really longggggggg last message in which might need to be capped visually at 32-64 characters but maybe more or less or I could even change the size of the list to show the entire thing who knows?? not me tho"
        },
        {
            username: "and one more",
            message: "just for fun"
        },
        {
            username: "qaz",
            message: "sup"
        },
        {
            username: "kodi",
            message: "cum"
        },
        {
            username: "dia",
            message: "skibidi toilet ohio gyatt"
        },
        {
            username: "adits87",
            message: "imma say it"
        },
        {
            username: "this is a really long username which might need to be capped at a 16 or 32 character limit",
            message: "heres a really really longggggggg last message in which might need to be capped visually at 32-64 characters but maybe more or less or I could even change the size of the list to show the entire thing who knows?? not me tho"
        },
        {
            username: "and one more",
            message: "just for fun"
        },
        {
            username: "qaz",
            message: "sup"
        },
        {
            username: "kodi",
            message: "cum"
        },
        {
            username: "dia",
            message: "skibidi toilet ohio gyatt"
        },
        {
            username: "adits87",
            message: "imma say it"
        },
        {
            username: "this is a really long username which might need to be capped at a 16 or 32 character limit",
            message: "heres a really really longggggggg last message in which might need to be capped visually at 32-64 characters but maybe more or less or I could even change the size of the list to show the entire thing who knows?? not me tho"
        },
        {
            username: "and one more",
            message: "just for fun"
        }
    ]);

    return (
        <div className={`overflow-y-hidden leftbar h-smscreen lg:flex flex-col bg-trans ${isOpen ? "flex" : "hidden"}`}>
            {/* Header */}
            <header className="flex justify-between items-center px-4 py-3 max-h-16 bg-slate-700">
                {/* User */}
                <button className="user flex items-center gap-3">
                    <img src="/avatar.svg" alt="avatar icon" className="h-10"/>
                    <span className="text-2xl leading-10 text-zinc-100 whitespace-nowrap">John Doe</span>
                    <img src="/three-dots.svg" alt="profile info" className="h-8" />
                </button>

                {/* Return button */}
                <button 
                    className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
                    onClick={() => props.setMenuOpen(0)}
                >
                    <img src="/arrow-right.svg" alt="arrow back" className="h-8" />
                </button>
            </header>

            {/* User Search and Add */}
            <nav 
                className="flex items-center justify-center gap-4"
                onClick={() => document.getElementById("userSearch").focus()}
            >
                {/* User Search */}
                <div className="userSearch flex items-center gap-2 bg-tran w-fit px-2 py-1 rounded my-2 border">
                    <label htmlFor="userSearch">
                        <img 
                            src="/search.svg" 
                            alt="user search icon" 
                            className="h-6"
                        />
                    </label>
                    <input 
                        type="text" 
                        name="userSearch"
                        id="userSearch"
                        placeholder="Search"
                        className="px-2 py-1 bg-transparent text-zinc-100 border-none outline-none" 
                    />
                </div>

                {/* User Add */}
                <button className="p-2 border rounded bg-tran">
                    <img 
                        src="/pencil-square.svg" 
                        alt="add user" 
                        className="h-6"
                    />
                </button>
                
            </nav>

            <hr />

            {/* Users List */}
            <main className="flex-1 overflow-y-auto scrollbar-hide overscroll-contain">
                <ul className="my-1 cursor-pointer">
                    {
                        usersList.map((user, index) => {
                            return (
                                <li key={index} className="flex items-center gap-3 justify-center lg:hover:bg-tran rounded overflow-x-hidden">
                                    <img 
                                        src="/avatar.svg" 
                                        alt="avatar icon" 
                                        className="h-12"
                                    />
                                    <div className="text flex-1">
                                        <p className="username text-zinc-100 py-1 text-xl whitespace-nowrap text-ellipsis overflow-x-hidden">{user.username}</p>
                                        <p className="previousMessage text-zinc-300 text-md py-1 whitespace-nowrap text-ellipsis overflow-x-hidden">{user.message}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </main>

        </div>
    );
}

export default LeftBar;
