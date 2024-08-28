import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Notification from './Notification.jsx';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword as signIn } from "firebase/auth";
import { auth } from "../../../lib/firebase.js";

function Login(props) {
    
    const initialValues = {
        username: "",
        password: ""
    };

    const validationSchema = Yup.object().shape({
        email: Yup
            .string()
            .matches(/.+@.+\..+/g, "Must input a valid email")
            .required("Email Required"),
        password: Yup
            .string()
            .min(8, "Password must be 8 or more characters")
            .max(64, "Password must be 64 or less characters")
            .required("Password is required")
    });

    const [isLoading, setIsLoading] = useState(false);

    async function submitLogin(values, _) {

        setIsLoading(true);

        try {
            await signIn(auth, values.email, values.password);
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        } finally {
            setIsLoading(false);
        }
    }
    
    return (
        <>
            <div id="login" className="flex flex-col gap-8 lg:m-auto">
                <h1 className="mb-8 text-4xl text-zinc-100 text-center">Login</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submitLogin}
                    validateOnChange={false}
                    validateOnBlur={true}
                >
                    <Form className="contents">
                        {/* Email Input */}
                        <div className="emailInput flex flex-col justify-center items-center">
                            <ErrorMessage
                                name="email"
                                component="p"
                                className="text-sm text-center text-orange-400 font-bold -mx-32 w-full"
                            />
                            <Field 
                                autoComplete="off"
                                id="registerEmail"
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="p-2 rounded"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="passwordInput flex flex-col justify-center items-center">
                            <ErrorMessage
                                name="password"
                                component="p"
                                className="text-sm text-center text-orange-400 font-bold -mx-32 w-full"
                            />
                            <Field 
                                autoComplete="off"
                                id="loginPassword"
                                name="password"
                                placeholder="Password"
                                className="my-1 p-2 rounded bg-zinc-100"
                            />
                        </div>

                        <button
                            type="submit"
                            className={`bg-myBlue py-2 text-lg rounded w-full ${isLoading ? "cursor-wait bg-opacity-50" : "hover:bg-myGray"}`}
                            disabled={isLoading}
                        >
                            Login
                        </button>
                    </Form>
                </Formik>
                <p className="text-myGray block lg:hidden text-center">
                    Need an account? <span className="cursor-pointer text-myBlue hover:text-zinc-100 py-2" onClick={() => props.setLoggingIn(false)}>Click here</span>
                </p>
                <Notification />
            </div>
            <div id="seperator" className="lg:block hidden border w-0 h-5/6"></div>
        </>
        
    );
}

export default Login;