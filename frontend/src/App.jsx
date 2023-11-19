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
    
      <BrowserRouter>
        <Routes>
          <Route path='admin' element={<Admin/>} >
            <Route path='add' element={<AddSpaces/>} />
          </Route>
          
          <Route path='main' element={<Main/>}>
            <Route path='home' element={<Home/>} />
            <Route path='login' element={<Login/>} />
            <Route path='logout' element={<Logout/>} />
            <Route path='signup' element={<Signup/>} />

          </Route>
          
          <Route path='user' element={<User/>}>
            <Route path='profile' element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
