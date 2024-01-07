
import UserContext from '../context/UserContext'
import { useContext } from 'react'
import React from 'react'

function Profile() {


    const {user}=useContext(UserContext)
  return (
    <div>
        console.log(user);
      <h1>{
  user


}</h1>
    </div>
  )
}

export default Profile
