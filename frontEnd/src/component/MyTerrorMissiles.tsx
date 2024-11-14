import { RootState } from '../store/store'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import {postMissile} from "../services/missile.services"
import { getToken } from '../utils/localStorge'

const MyTerrorMissiles = () => {
    const token = getToken()
    if (!token) return <div>no token!! please login first</div>

    const user = useSelector((state: RootState) => state.user)
    const areaRef = useRef<HTMLSelectElement>(null)
    const areas = ['North', 'South', 'Center', 'West Bank']
    const sendMissile = (missileName:string) => {
        postMissile({name:missileName, status:"Launched", to: areaRef.current?.value!, LaunchedBy:user._id}, token)
    }
  return ( 
    <>
    <div>MyTerrorMissiles</div>
    <select ref={areaRef} name='area' >
        {areas.map((name, index) => <option key={index} value={name}>{name}</option>)}
    </select>
    {user.resources.map((resource, index) =>{ 
        return <button key={index} onClick={() => sendMissile(resource.name)}>{resource.name } : { resource.amount}</button>
      })}
    </>
  )
}

export default MyTerrorMissiles