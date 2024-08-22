import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
            .matches(/[^\-].*[^\-]/g, "Username may not start or end with \"-\""),
        password: Yup
            .string()
            .min(8, "Password must be 8 or more characters")
    });

    function submitLogin(values, actions) {
        console.log(values);
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
                >
                    <Form className="contents">
                        {/* Username Input */}
                        <ErrorMessage
                            name="username"
                            component="span"
                            className="text-sm leading-4 text-center -my-2 p-0 "
                        />
                        <Field 
                            autoComplete="off"
                            id="loginUsername"
                            name="username"
                            placeholder="Username"
                            className="p-2 rounded"
                        />

                        {/* Password Input */}
                        <ErrorMessage
                            name="password"
                            component="span"
                            className=""
                        />
                        <Field 
                            autoComplete="off"
                            id="loginPassword"
                            name="password"
                            placeholder="Password"
                            className="p-2 rounded"
                        />

                        <button
                            type="submit"
                            className="bg-myBlue py-2 text-lg hover:bg-myGray rounded"
                        >
                            Login
                        </button>
                    </Form>
                </Formik>
                <p className="text-myGray block lg:hidden">
                    Need an account? <span className="cursor-pointer text-myBlue hover:text-zinc-100" onClick={() => props.setLoggingIn(false)}>Click here</span>
                </p>
            </div>
            <div id="seperator" className="lg:block hidden border w-0 h-5/6"></div>
        </>
        
    );
}

export default Login;