import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Register(props) {

    const initialValues = {
        username: "",
        email: "",
        password: ""
    };

    const validationSchema = Yup.object().shape({
        username: Yup
            .string()
            .min(3, "Username must be 3 or more characters")
            .max(16, "Username may not be longer than 16 characters")
            .matches(/[^\-].*[^\-]/g, "Username may not start or end with \"-\""),
        email: Yup
            .string()
            .matches(/.+@.+\..+/g, "Must input a valid email"),
        password: Yup
            .string()
            .min(8, "Password must be 8 or more characters")
    });

    function submitRegister(values, actions) {
        console.log(values);
        actions.resetForm();
    }
    
    return (
        <div id="register" className="flex flex-col gap-8 lg:m-auto">
            <h1 className="mb-8 text-4xl text-zinc-100 text-center">Register</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitRegister}
            >
                <Form className="contents">
                    {/* Username Input */}
                    <ErrorMessage
                        name="username"
                        component="span"
                        className=""
                    />
                    <Field 
                        autoComplete="off"
                        id="registerUsername"
                        name="username"
                        placeholder="Username"
                        className="p-2 rounded"
                    />

                    {/* Email Input */}
                    <ErrorMessage
                        name="email"
                        component="span"
                        className=""
                    />
                    <Field 
                        autoComplete="off"
                        id="registerEmail"
                        name="email"
                        type="email"
                        placeholder="Email"
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
                        id="registerPassword"
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="p-2 rounded"
                    />

                    <button
                        type="submit"
                        className="bg-myBlue py-2 text-lg hover:bg-myGray rounded"
                    >
                        Create Account
                    </button>
                </Form>
            </Formik>
            <p className="text-myGray block lg:hidden">
                Already have an account? <span className="cursor-pointer text-myBlue hover:text-zinc-100" onClick={() => props.setLoggingIn(true)}>Click here</span>
            </p>
        </div>
    );
}

export default Register;