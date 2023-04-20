import { Link, Navigate } from 'react-router-dom';
import User from '../../Services/User';
import { createContext, useEffect, useState} from 'react';
export const AuthContext = createContext(null);
const Auth = data => {
    if(!(data === undefined) && data.profile.length != 0)
    {
        User(data.profile.email, data.profile.name)
        return(
            <AuthContext.Provider value={data.profile}>
                <Navigate to="/home" state={{profile : data.profile}}></Navigate>
            </AuthContext.Provider>
        );
    }
};

export default Auth;