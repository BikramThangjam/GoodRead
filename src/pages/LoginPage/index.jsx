import React, {useState} from 'react';
import {Formik, Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import styles from "./style.module.css";
import Navbar from '../../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
const LoginPage = () => {
    const [responseData, setResponseData] = useState({
        responseText: "" ,
        responseClass: "",
    });

    const initialValues = {
        email: '',
        password: ''
    }

    const navigate = useNavigate();

    const onSubmit = (values) => {
        axios
        .post("https://orca-app-jhg4l.ondigitalocean.app/api/auth/login",values)
        .then((response)=>{
                console.log(response);
                localStorage.setItem("token", response.data.token)
                setResponseData({
                    responseText: "Login success, thank you.",
                    responseClass: "alert alert-success"
                });
                navigate("/");
            },
            (error)=>{
                console.log(error);
                setResponseData({
                    responseText: error.response.data.message,
                    responseClass: "alert alert-danger"
                })
            })
        .catch((error)=>{
            console.log(error);
        })
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required'),
        password: Yup.string()
                    .required('Password is required')
                    .min(6, "password must be atleast 6 characters")
    })
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className={styles.wrapper}>
                            <div className={responseData.responseClass} role="alert">
                                    {responseData.responseText}
                            </div>
                            <h2 className='text-center'>Login</h2>
                            <hr />
                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                validationSchema={validationSchema}
                                validateOnMount
                            >
                                {(formik) => {
                                    return (
                                        <Form>
                                            <div className="form-group">
                                                <label htmlFor="">Email</label>
                                                <Field 
                                                    name="email" 
                                                    type="text" 
                                                    className={
                                                        formik.touched.email && formik.errors.email 
                                                        ? "form-control is-invalid" 
                                                        : "form-control"
                                                    }/>
                                                <ErrorMessage name="email">
                                                    {
                                                        (errorMessage)=> (
                                                            <small className='text-danger'>{errorMessage}</small>
                                                        )
                                                    }
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Password</label>
                                                <Field 
                                                    name="password" 
                                                    type="text" 
                                                    className={
                                                        formik.touched.password && formik.errors.password 
                                                        ? "form-control is-invalid" 
                                                        : "form-control"
                                                    }/>
                                                <ErrorMessage name="password">
                                                    {
                                                        (errorMessage)=> (
                                                            <small className='text-danger'>{errorMessage}</small>
                                                        )
                                                    }
                                                </ErrorMessage>
                                            </div>
                                            <input 
                                                type="submit" 
                                                value="Login" 
                                                className="btn btn-primary btn-block p-2"
                                                disabled={!formik.isValid}

                                            />
                                        </Form>
                                    )
                                }}
                            </Formik>
                            <br />
                            <p className="text-center">
                                New users? <Link to="/register">Click Here</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
        
    )
}

export default LoginPage;