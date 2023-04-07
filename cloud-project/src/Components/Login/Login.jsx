import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { enviroment } from '../../environment/config';
import { gapi } from 'gapi-script';
import './Login.css'


const clientId = enviroment.GOOGLE_SECRET;

function Login() {
  const [ profile, setProfile ] = useState([]);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: 'email',
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // alert(
    //   `Autenticación exitosa ${res.profileObj.name} 😍.`
    // );
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
        />
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