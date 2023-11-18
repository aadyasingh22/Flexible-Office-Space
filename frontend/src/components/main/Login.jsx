import React from 'react'
import { GoogleLogin } from 'react-google-login';
import LoginButton from 'react-google-login'

const clientId = "687782592869-s1u1pnos5oo1hcdqevpcrg03qtcsvs8o.apps.googleusercontent.com";

function Login() {

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
  }

  const onFaliure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  }

  return (
    <div id='signInButton'>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFaliure={onFaliure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
      {/* <div>
        <LoginButton />
      </div> */}
    </div>
  )

}

export default Login;