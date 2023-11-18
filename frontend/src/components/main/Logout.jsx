import { GoogleLogout } from 'react-google-login';

const clientId = "687782592869-s1u1pnos5oo1hcdqevpcrg03qtcsvs8o.apps.googleusercontent.com";

function Logout() {

    const onSuccess = () => {
        console.log("Log Out Successfull");
    }

    return (
        <div id="signOutButton">
            <GoogleLogout 
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;