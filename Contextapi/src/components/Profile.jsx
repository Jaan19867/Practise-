
import UserContext from '../context/UserContext'
import { useContext } from 'react'
import React from 'react'

function Profile() {


    const {user}=useContext(UserContext)
  return (
    <div>
      <h1>{
  user


}</h1>
    </div>
  )
}

export default Profile
