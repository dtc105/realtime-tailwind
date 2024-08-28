import { useEffect, useState } from 'react';
import AddUser from './AddUser.jsx';
import { useUserStore } from '../../../lib/userStore.js';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../lib/firebase.js';

function LeftBar(props) {
    const [searchText, setSearchText] = useState("");
    const [isAddingUser, setIsAddingUser] = useState(false);
    const { currentUser } = useUserStore();
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
            const items = res.data().chats;

            const promises = items.map(async (item) => {
                const userDocRef = doc(db, "user", item.receiverId);
                const userDocSnap = await getDoc(userDocRef);

                const user = userDocSnap.data();

                return {...item, user};
            });

            const chatData = await Promise.all(promises);

            setUsersList(chatData.sort((a,b) => b.updatedAt - a.updatedAt));
        });

        return (() => {
            unSub();
        });
    }, [currentUser]);

    return (
        <div id="leftbar" className="leftBar fixed w-full lg:static overflow-y-hidden leftbar h-smscreen flex flex-col bg-tran">
            {/* Header */}
            <header className="flex justify-between items-center px-4 py-3 max-h-16 bg-slate-700">
                {/* User */}
                <button className="user flex items-center gap-3">
                    <img src={currentUser.avatar || "/avatar.svg"} alt="avatar icon" className="h-10"/>
                    <span className="text-2xl leading-10 text-zinc-100 whitespace-nowrap">John Doe</span>
                    <img src="/three-dots.svg" alt="profile info" className="h-8" />
                </button>

                {/* Return button */}
                <button 
                    className="lg:hidden"
                    onClick={() => props.setMenuOpen(0)}
                >
                    <img 
                        src="/arrow-right.svg" 
                        alt="arrow back" 
                        className="h-8" 
                    />
                </button>
            </header>

            {/* User Search and Add */}
            <nav 
                className="flex items-center justify-center gap-4"
            >
                {/* User Search */}
                <div 
                    className="userSearch flex items-center gap-2 bg-tran w-fit px-2 py-1 rounded my-2 border"
                    onClick={() => document.getElementById("userSearch").focus()}
                >
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
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                    />
                </div>
                

                {/* User Add */}
                <button 
                    className="p-2.5 border rounded bg-tran"
                    onClick={() => setIsAddingUser(prev => !prev)}
                >
                    <img 
                        src="/pencil-square.svg" 
                        alt="add user" 
                        className="h-5"
                    />
                </button>
            </nav>
            {
                isAddingUser &&
                <div className="addUserContainer absolute grid top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <AddUser setIsAddingUser={setIsAddingUser} />
                </div>
            }
            

            <hr />

            {/* Users List */}
            <main className="flex-1 overflow-y-auto scrollbar-hide overscroll-contain">
                <ul className="my-1 cursor-pointer flex flex-col gap-4">
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
                                        <p className="username text-zinc-100 py-0.5 text-xl whitespace-nowrap text-ellipsis overflow-x-hidden">{user.username}</p>
                                        <p className="previousMessage text-zinc-300 text-base py-0.5 whitespace-nowrap text-ellipsis overflow-x-hidden">{user.message}</p>
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
