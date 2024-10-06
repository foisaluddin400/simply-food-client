import React, { useContext } from 'react'
import { AuthContext } from '../Authcontext/AuthPriver'
import { Navigate } from 'react-router-dom';

export const Authprivet = ({children}) => {
    const {user, loading}= useContext(AuthContext);

    if(loading){
        return <span>Loading.....</span>
    }
    if(user){
        return children
    }
    
    return (
        <Navigate to='/login'></Navigate>
    );
    

  
}
