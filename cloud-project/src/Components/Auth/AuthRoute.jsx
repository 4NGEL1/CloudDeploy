import { Link, Navigate } from 'react-router-dom';
import User from '../../Services/User';

const Auth = data => {
    if(!(data === undefined) && data.profile.length != 0)
    {
        User(data.profile.email, data.profile.name)
        return(
            <Navigate to="/home" state={{profile : data.profile}}></Navigate>
        );
    }
};

export default Auth;