import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Notification from './Notification.jsx';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword as createUser } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../lib/firebase.js";

function Register(props) {

    const registrationInitialValues = {
        registerUsername: "",
        registerEmail: "",
        registerPassword: ""
    };

    const registrationValidationSchema = Yup.object().shape({
        registerUsername: Yup
            .string()
            .min(3, "Username must be 3 or more characters")
            .max(16, "Username may not be longer than 16 characters")
            .matches(/^\w.*\w$/g, "Username may not start or end with a special character")
            .required("Username Required"),
        registerEmail: Yup
            .string()
            .matches(/.+@.+\..+/g, "Must input a valid registerEmail")
            .required("Email Required"),
        registerPassword: Yup
            .string()
            .min(8, "Password must be 8 or more characters")
            .max(64, "Password must be 64 or less characters")
            .required("Password Required")
    });

    const [isRegistering, setIsRegistering] = useState(false);

    async function submitRegister(values, _) {
        
        setIsRegistering(true);

        try {
            const res = await createUser(auth, values.registerEmail, values.registerPassword);
            
            await setDoc(doc(db, "users", res.user.uid), {
                username: values.registerUsername,
                email: values.registerEmail,
                id: res.user.uid,
                blocked: [],
                avatar: ""
            });

            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: []
            });

            toast.success("Account created! Please Login")
        } catch(err) {
            toast.error(err.message);
        } finally {
            setIsRegistering(false);
        }
    }
    
    return (
        <div id="register" className="flex flex-col gap-8 lg:m-auto">
            <h1 className="mb-8 text-4xl text-zinc-100 text-center">Register</h1>
            <Formik
                initialValues={registrationInitialValues}
                validationSchema={registrationValidationSchema}
                onSubmit={submitRegister}
                validateOnChange={false}
                validateOnBlur={true}
                id="registerForm"
            >
                <Form className="contents">
                    {/* Username Input */}
                    <div className="registerUsernameInput flex flex-col justify-center items-center">
                        <ErrorMessage
                            name="registerUsername"
                            component="p"
                            className="text-sm text-center text-orange-400 font-bold -mx-32 w-full"
                        />
                        <Field 
                            autoComplete="off"
                            id="registerUsername"
                            name="registerUsername"
                            placeholder="Username"
                            className="p-2 rounded bg-zinc-100 cursor-text"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="registerEmailInput flex flex-col justify-center items-center">
                        <ErrorMessage
                            name="registerEmail"
                            component="p"
                            className="text-sm text-center text-orange-400 font-bold -mx-32 w-full"
                        />
                        <Field 
                            autoComplete="off"
                            id="registerEmail"
                            type="email"
                            name="registerEmail"
                            placeholder="Email"
                            className="p-2 rounded bg-zinc-100 cursor-text"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="registerPasswordInput flex flex-col justify-center items-center">
                        <ErrorMessage
                            name="registerPassword"
                            component="p"
                            className="text-sm text-center text-orange-400 font-bold -mx-32 w-full"
                        />
                        <Field 
                            autoComplete="off"
                            id="registerPassword"
                            type="password"
                            name="registerPassword"
                            placeholder="Password"
                            className="p-2 rounded bg-zinc-100 cursor-text"
                        />
                    </div>

                    <button
                        type="submit"
                        className={`bg-myBlue py-2 text-lg rounded w-full ${isRegistering ? "cursor-wait bg-opacity-50" : "hover:bg-myGray"}`}
                        disabled={isRegistering}
                    >
                        Create Account
                    </button>
                </Form>
            </Formik>
            <p className="text-myGray block lg:hidden -mx-16 text-center">
                Already have an account? <span className="cursor-pointer text-myBlue hover:text-zinc-100 py-2" onClick={() => props.setLoggingIn(true)}>Click here</span>
            </p>
            <Notification />
        </div>
    );
}

export default Register;