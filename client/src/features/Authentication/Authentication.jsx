import { useState } from 'react';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

function Authentication(props) {
    
    // true-Login false-Register
    const [loggingIn, setLoggingIn] = useState(true);
    
    return (
        <div id="auth" className="fixed flex justify-center items-center w-full h-smscreen">
            <div className="flex justify-around items-center w-3/4 lg:w-1/2 h-5/6 bg-tran border-zinc-100 rounded-md border-2">
                { 
                    props.isSmallScreen
                        ? (
                            loggingIn
                                ? <Login setLoggingIn={setLoggingIn} />
                                : <Register setLoggingIn={setLoggingIn} />
                        )
                        : (
                            <>
                                <Login />
                                <Register />
                            </>
                        )
                }
            </div>
        </div>
    );
}

export default Authentication;
