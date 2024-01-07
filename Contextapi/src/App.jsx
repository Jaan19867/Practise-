import { useState } from 'react'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'


import './App.css'

function App() {
 

  return (
    <>
     
      <h1>React with Chai </h1>
     <UserContextProvider>
      <Login/>
      <Profile/> 
     </UserContextProvider>
     
    </>
  )
}

export default App
