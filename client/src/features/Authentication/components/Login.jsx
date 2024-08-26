import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Notification from './Notification.jsx';
import { toast } from 'react-toastify';

function Login(props) {
    
    const initialValues = {
        username: "",
        password: ""
    };

    const validationSchema = Yup.object().shape({
        username: Yup
            .string()
            .min(3, "Username must be 3 or more characters")
            .max(16, "Username may not be longer than 16 characters")
            .matches(/^\w.*\w$/g, "Username may not start or end with a special character")
            .required("Username is required"),
        password: Yup
            .string()
            .min(8, "Password must be 8 or more characters")
            .max(64, "Password must be 64 or less characters")
            .required("Password is required")
    });

    function submitLogin(values, actions) {
        console.log(values);
        toast.warn("Sup");
        actions.resetForm();
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
                        {/* Username Input */}
                        <div className="usernameInput flex flex-col justify-center items-center">
                            <ErrorMessage
                                name="username"
                                component="p"
                                className="text-sm text-center text-orange-400 font-bold -mx-32 w-full"
                            />
                            <Field 
                                autoComplete="off"
                                id="loginUsername"
                                name="username"
                                placeholder="Username"
                                className="my-1 p-2 rounded bg-zinc-100"
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
                            className="bg-myBlue m-0 p-2 text-lg hover:bg-myGray rounded w-full"
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