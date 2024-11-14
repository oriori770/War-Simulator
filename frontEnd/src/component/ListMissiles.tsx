import React, { useEffect, useState } from 'react'
// import { getCandidates } from '../services/missile.services'
import { ICandidate } from '../types/candidate'
import Candidate from './Candidate'
import { useSelector, useDispatch } from 'react-redux'
import { Root } from 'react-dom/client'
import { RootState, AppDispatch } from '../store/store'
// import {featchMissiles} from "../store/features/missiles/missilesSlice"
import {getToken} from "../utils/localStorge"
import { featchMissilesById } from '../store/features/missiles/missilesSlice'
import { timeToHit } from '../utils/Missiles'
const ListMissiles = () => {
  const token:string | null = getToken()  
  if (!token) return <div>no token!! please login first</div>
  const dispatch = useDispatch<AppDispatch>();
  const missiles= useSelector((state: RootState) => state.missile.missiles)
  
  const user = useSelector((state: RootState) => state.user)

    useEffect(() => {
        dispatch(featchMissilesById({token, senderId:user._id}))
    }, [])
  return (
    <>
      <div>list missiles </div>
      {missiles.map((missile, index) => (
        <>
          <div key={index}>name: {missile.name} status: {missile.status} timeToHit:{timeToHit(missile.LaunchTime, missile.name)}M </div>
        </>        
        ))}
    </>
  )
}

export default ListMissiles