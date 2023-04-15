import { Link, Navigate } from 'react-router-dom';

const Auth = data => {
    console.log(typeof(data));
    console.log('Auth');
    console.log(data);
    if(!(data === undefined) && data.profile.length != 0)
    {
        console.log(data.profile.email);
        return(
            <Navigate to="/home" state={{profile : data.profile}}></Navigate>
        );
    }
};

export default Auth;