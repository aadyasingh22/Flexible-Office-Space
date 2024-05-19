import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/main'
import Admin from './components/admin'
import Home from './components/main/Home'
import Login from './components/main/Login'
import User from './components/user'
import Profile from './components/user/Profile'
import { useEffect } from 'react';
import { gapi } from 'gapi-script'
import Logout from './components/main/Logout'
import AddSpaces from './components/admin/AddSpaces'
import Signup from './components/main/Signup'
import { SnackbarProvider } from 'notistack'
import { AppProvider } from './context/AppContext'
import AboutUs from './components/main/AboutUs'
import ManageSpaces from './components/admin/ManageSpaces'
import BrowseSpaces from './components/main/BrowseSpaces'
import UpdateSpaces from './components/admin/UpdateSpaces'
import Details from './components/main/Details'
import ManageUser from './components/admin/ManageUser'
import ContactUs from './components/main/ContactUs'
import ResetPassword from './components/main/ResetPassword'
import UpdateUser from './components/admin/UpdateUser'
import BookingPage from './components/user/BookingPage'

const clientId = "687782592869-s1u1pnos5oo1hcdqevpcrg03qtcsvs8o.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  });


  return (
    <>
      <SnackbarProvider>
        <BrowserRouter>
          <AppProvider>
            <Routes>
              <Route path='/admin' element={<Admin />} >
                <Route path='addspaces' element={<AddSpaces />} />
                <Route path='managespaces' element={<ManageSpaces />} />
                <Route path='updatespaces/:id' element={<UpdateSpaces />} />
                <Route path='manageusers' element={<ManageUser />} />
                <Route path='updateusers/:id' element={<UpdateUser />} />
              </Route>

              <Route path='/main' element={<Main />}>
                <Route path='home' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='logout' element={<Logout />} />
                <Route path='signup' element={<Signup />} />
                <Route path='aboutus' element={<AboutUs />} />
                <Route path='contactus' element={<ContactUs />} />
                <Route path='browsespaces' element={<BrowseSpaces />} />
                <Route path='details/:id' element={<Details />} />
                <Route path='resetpassword' element={<ResetPassword />} />

              </Route>

              <Route path='/user' element={<User />}>
                <Route path='profile' element={<Profile />} />
                <Route path='bookingpage' element={<BookingPage />} />
              </Route>
            </Routes>
          </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  )
}

export default App
