import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { enviroment } from '../../environment/config';
import { gapi } from 'gapi-script';


const clientId = enviroment.GOOGLE_SECRET;

function Login() {

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
    alert(
      `Autenticación exitosa ${res.profileObj.name} 😍.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Falló la autenticación 😢`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId = {clientId}
        buttonText = "Login"
        onSuccess = {onSuccess}
        onFailure = {onFailure}
        cookiePolicy = {'single_host_origin'}
        style = {{ marginTop: '100px' }}
        isSignedIn = {false}
      />
    </div>
  );
}

export default Login;