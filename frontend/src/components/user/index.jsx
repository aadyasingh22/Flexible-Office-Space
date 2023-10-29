import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const User = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default User