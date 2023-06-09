import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { enviroment } from '../../environment/config';
import { gapi } from 'gapi-script';
import './Login.css'
import Auth from '../Auth/AuthRoute';
import { createContext} from 'react';
export const AuthContextV = createContext(null);

const clientId = enviroment.GOOGLE_SECRET;

function Login() {
  const [ profile, setProfile ] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: 'email',
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  useEffect(() => {
    if(profile){
      localStorage.setItem("Auth", JSON.stringify(profile));
    }
  }, [profile]);

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Falló la autenticación 😢`
    );
  };

  return (
  <div className='login-google-container'>
      <div className='login-google'>
        <h3 className='login-google-subtitle'>Autenticación</h3>
        <GoogleLogin
          clientId = {clientId}
          buttonText = "Login"
          onSuccess = {onSuccess}
          onFailure = {onFailure}
          cookiePolicy = {'single_host_origin'}
          style = {{ marginTop: '100px' }}
          isSignedIn = {false}
        >
          <p className='login-google-p'>Iniciar sesión</p>
        </GoogleLogin>
        <Auth profile = {profile}></Auth>
        <div>
        <a href="https://aws.amazon.com/es/" target="_blank">
            <img src='src/assets/AWS.png' className="logo" alt="AWS logo" />
          </a>
        </div>
      </div>
      <div>
      <h1>Cloud Service</h1>
      </div>
    </div>
  );
}

export default Login;