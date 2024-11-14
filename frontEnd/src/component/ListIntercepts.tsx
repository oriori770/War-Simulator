import React, { useEffect, useState } from 'react'
import { IUser } from '../types/user'
import { getUsers } from '../services/user.services'
import { AppDispatch,RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { featchMissilesByArea } from '../store/features/missiles/missilesSlice'
import {timeToHit} from "../utils/Missiles"

const ListIntercepts = () => {
  const token: string | null = localStorage.getItem('token')
  if (!token) return <div>no token!! please login first</div>
    const dispatch = useDispatch<AppDispatch>()
      const {user} = useSelector((state: RootState) => state)
    const {missiles} = useSelector((state: RootState) => state.missile)
    
    const hff = (time: Date):string => {
      const date = new Date(time) 
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()
      return `${hours}:${minutes}:${seconds}`
    }
    useEffect(() => {
        const asyncFunction = async () => {
            dispatch(featchMissilesByArea({token, area:user.organization}))
        }
        asyncFunction()
    }, [])
const Intercepts = (missileId: string, userId: string): number => {
  return 6
}
  return (
    <>
      <div>List Intercepts</div>
      {missiles.map((missile, index) =>(
        <>
          <div key={index}>name:{missile.name}</div>
          <div> status:{missile.status}</div>
          <div>timeToHit:{timeToHit(missile.LaunchTime, missile.name)}M</div>
          <button key={index} onClick={()=>Intercepts(missile._id, user._id)}>X</button>
        </>
      ) )}
    </>
  )
}

export default ListIntercepts