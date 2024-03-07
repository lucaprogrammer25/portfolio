import React from 'react'
import Navbar from '../home-component/Navbar'
import { Outlet } from 'react-router-dom'

const DefaultDisplay = () => {
  return (
    <>
    <Navbar/>
    <main>
     <Outlet/>
    </main>
    </>
  )
}

export default DefaultDisplay