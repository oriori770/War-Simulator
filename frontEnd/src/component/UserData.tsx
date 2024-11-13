import React from 'react'
import { IUser } from '../types/user'

const UserData = ({userData}:{userData:IUser}) => {
  return (
    <>
    <div>UserData:</div>
    <div style={userData.IsVoted ? {color:"green"} : {color:"red"}}>userName: {userData.userName}</div>
    </>
  )
}

export default UserData