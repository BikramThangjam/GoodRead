import React, { useEffect, useState } from 'react';
import LoginPage from '../pages/LoginPage';

const ProtectedRoute = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const { Component } = props;

    useEffect(()=>{
        let token = localStorage.getItem('token');
        if(token){
            setLoggedIn(true)
        }       
    }, [loggedIn])

    if(!loggedIn){
        return <LoginPage/>
    }
        
    return <Component />
    

}
export default ProtectedRoute;