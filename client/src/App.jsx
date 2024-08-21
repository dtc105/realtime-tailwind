import { useState } from "react";
import Chatbox from "./features/Chatbox/Chatbox.jsx";
import Login from "./features/Login/Login.jsx";

function App() {

  const [user, setUser] = useState(false);

  return (
    <>
      {
        user
          ? <Chatbox />
          : <Login />
      }
    </>
  );
}

export default App;
