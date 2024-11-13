import React, { useEffect, useState } from 'react'
import { IUser } from '../types/user'
import { getUsers } from '../services/user.services'
import UserData from './UserData'
import { AppDispatch,RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { featchUsers } from '../store/features/user/userSlice'

const ListStatistics = () => {
  const token: string | null = localStorage.getItem('token')
  if (!token) return <div>no token!! please login first</div>

    const dispatch = useDispatch<AppDispatch>()
    const {users} = useSelector((state: RootState) => state.user)
    useEffect(() => {
        const asyncFunction = async () => {
            dispatch(featchUsers(token))
            console.log(users);
        }
        asyncFunction()
    }, [])
  return (
    <>
    <div>List Statistics</div>
    {users.map((user) => (<UserData key={user._id} userData={user} />))}
    </>
  )
}

export default ListStatistics