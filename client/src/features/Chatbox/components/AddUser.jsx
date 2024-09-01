import { arrayUnion, collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useState } from "react";
import { useUserStore } from "../../../lib/userStore";

function AddUser(props) {

    const [users, setUsers] = useState([]);

    const {currentUser} = useUserStore();
    
    async function handleSearch(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const username = formData.get("username");

        try {
            const userRef = collection(db, "users");
            const q = query(userRef,
                where("username", ">=", username),
                where("username", "<=", username + '\uf8ff')
            );
            const querySnapShot = await getDocs(q);

            if (!querySnapShot.empty) {
                setUsers(querySnapShot.docs.map(qSS => qSS.data()));
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function handleAdd(index) {

        const chatRef = collection(db, "chats");
        const userChatRef = collection(db, "userchats");

        try {

            const newChatRef = doc(chatRef);

            await setDoc(newChatRef, {
                createdAt: serverTimestamp(),
                messages: []
            });

            await updateDoc(doc(userChatRef, users[index].id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: currentUser.id,
                    updatedAt: Date.now()
                })
            });

            await updateDoc(doc(userChatRef, currentUser.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: users[index].id,
                    updatedAt: Date.now()
                })
            });

        } catch (err) {
            console.log(err);
        } finally {
            props.setIsAddingUser(false);
        }
    }
    
    return (
        <div id="addUser" className=" bg-slate-700 border border-zinc-100 p-2 rounded w-fit max-h-2/3 min-h-fit place-self-center flex flex-col gap-2">
            <div id="addUserTop" className="flex items-center">
                <h2 className="flex-1 text-2xl text-zinc-100 mx-1">Find User</h2>
                <button 
                    className="p-1.5"
                    onClick={() => props.setIsAddingUser(false)}
                >
                    <img src="/x.svg" alt="x button" className="h-8" />
                </button>
            </div>
            <form
                className="flex gap-2 h-10"
                onSubmit={handleSearch}
            >
                <input type="text" placeholder="Username" name="username" className="px-2 py-1.5 text-xl rounded" />
                <button 
                    className="bg-myBlue px-2 py-1 rounded"
                >
                    Search
                </button>
            </form>
            <div id="foundUsers" className="overflow-y-scroll scrollbar-hide flex flex-1 flex-col gap-2 min-h-4 max-h-64">
                {
                    users.map((user, index) => {
                        return (
                            <div className="flex justify-between" key={index}>
                                <div className="user flex gap-2 items-center cursor-pointer">
                                    <img src={user.avatar || "/avatar.svg"} alt="avatar icon" className="h-6" />
                                    <span className="text-xl text-zinc-100">{user.username}</span>
                                </div>
                                <button 
                                    className="border rounded p-1"
                                    onClick={() => handleAdd(index)}    
                                >
                                    <img src="/person-fill-add.svg" alt="add user" className="h-6" />
                                </button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default AddUser;