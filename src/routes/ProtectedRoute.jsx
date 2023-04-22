import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const { Component } = props;
    const navigate = useNavigate();
    
    useEffect(() => {
        let token = localStorage.getItem('token');
        if(!token){
            setLoggedIn(false);
            navigate('/login');
        }else{
            setLoggedIn(true)
        }
    }, [loggedIn]);

    return(
        <>
            <Component />
        </>
    )
}
export default ProtectedRoute;