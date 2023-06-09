import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () =>{

    const navigate = useNavigate()

    const [responseData, setResponseData] = useState({
        responseText: "" ,
        responseClass: "",
    });

    //initialValue
    const initialValues = {       
        firstName:'',
        email: '',
        mobile: '',
        password:''
        
    };

    //submit form data
    const onSubmit = (values) =>{
       axios
       .post("https://orca-app-jhg4l.ondigitalocean.app/api/auth/register", values)
       .then(
            (response) => {
                setResponseData({
                    responseText: `${response.data.message}. Redirecting to login page...`,
                    responseClass: "alert alert-success"
                });
                
                setTimeout(()=>{
                    navigate("/login")
                },2000)
            },
            (error)=>{
                // console.log(error);
                setResponseData({
                    responseText: error.response.data.message,
                    responseClass: "alert alert-danger"
                })
            }
        )
        .catch((error)=>{
            console.log(error);
        })

    }

    //Validation
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('First name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is not valid'),
        mobile: Yup.string()
            .required('Mobile Number is required'),
        password:Yup.string()
            .required('Password is required')
            .min(6,'Password must be atleast 6 characters.')
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    });   

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div 
                            style={{
                                background:'#fff',
                                padding:'30px 40px',
                                borderRadius:'10px',
                                marginTop: '80px',
                                }}
                        >
                            <div className={responseData.responseClass} role="alert">
                                {responseData.responseText}
                            </div>
                            <h2 className="text-center">Register</h2>
                            <hr />
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="">First Name</label>
                                    <input 
                                        type="text" 
                                        name="firstName" 
                                        className={
                                            formik.touched.firstName && formik.errors.firstName 
                                            ? "form-control is-invalid"
                                            : "form-control"
                                        } 
                                        value={formik.values.firstName} 
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}/>
                                        {
                                            formik.touched.firstName && formik.errors.firstName 
                                            ? (<small className="text-danger">{formik.errors.firstName}</small>)
                                            : null
                                        }
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input 
                                        type="text" 
                                        name="email"
                                        className={
                                            formik.touched.email && formik.errors.email 
                                            ? "form-control is-invalid"
                                            : "form-control"
                                        } 
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}/>
                                        {
                                            formik.touched.email && formik.errors.email 
                                            ? (<small className="text-danger ">{formik.errors.email}</small>)
                                            : null
                                        }
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="">Mobile</label>
                                    <input 
                                        type="text" 
                                        name="mobile" 
                                        className={
                                            formik.touched.mobile && formik.errors.mobile 
                                            ? "form-control is-invalid"
                                            : "form-control"
                                        }  
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}/>
                                        {
                                            formik.touched.mobile && formik.errors.mobile 
                                            ? (<small className="text-danger">{formik.errors.mobile}</small>)
                                            : null
                                        }
                                </div>
                            
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        className={
                                            formik.touched.password && formik.errors.password 
                                            ? "form-control is-invalid"
                                            : "form-control"
                                        }   
                                        value={formik.values.password} 
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}/>
                                        {
                                            formik.touched.password && formik.errors.password 
                                            ? (<small className="text-danger">{formik.errors.password}</small>)
                                            : null
                                        }
                                </div>
                                
                                <input 
                                    type="submit" 
                                    value="Register" 
                                    className="btn btn-primary btn-block"
                                    disabled={!formik.isValid}/>
                            </form>
                            <br />
                            <p className="text-center">
                                Already have an account? <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
        
    )
}

export default RegisterPage;