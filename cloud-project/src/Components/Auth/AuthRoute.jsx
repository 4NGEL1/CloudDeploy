import { Link, Navigate } from 'react-router-dom';

const Auth = data => {
    if(!(data === undefined) && data.profile.length != 0)
    {
        return(
            <Navigate to="/home" state={{profile : data.profile}}></Navigate>
        );
    }
};

export default Auth;