import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RgisterToWeb } from '../services/auth.service'
import { useDispatch } from 'react-redux'
import {setUser} from "../store/features/user/userSlice"
import { AppDispatch } from '../store/store'
import { Key } from '@mui/icons-material'
const organizations = [
  'Hamas',
  'IDF',
  'Hezbollah',
  'IRGC',
  'Houthis'
  ]
  const areas = ['North', 'South', 'Center', 'West Bank']

const Rgister = () => {
    const  [ourForce, setOurForce] = useState(false)
    const nameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const organizationRef = useRef<HTMLSelectElement>(null)
    const areaRef = useRef<HTMLSelectElement>(null)
    const Navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const changeOurForce = () =>{setOurForce(organizationRef.current?.value ==="IDF")}
    
    const userRgister = async (): Promise<void> => { 
      let organization:string = organizationRef.current?.value!;
      if (organization === "IDF") {
        organization += " - " + areaRef.current?.value!
      }
        const response = await RgisterToWeb(nameRef.current!.value, passwordRef.current!.value, organization )    
        if (response) {
          dispatch(setUser(response.user))
          Navigate("/logIn")
        }
        else {
          Navigate("/register")
        }
    }
  return (
    <>
        <label htmlFor="name">name</label>
        <input ref={nameRef} name='name' type="text"/>
        <label htmlFor="password">password</label>
        <input ref={passwordRef} name='password' type="password"/>
        
        <select onChange={() => changeOurForce()}  ref={organizationRef} name='area' >
          <option disabled value=''>organization</option>
          {organizations.map((name, index) =>  <option key={index} value={name}>{name}</option>)}
        </select>
        {ourForce?
         <select ref={areaRef} name='area' >
          {areas.map((name) => <option value={name}>{name}</option>)}
        </select>
        :null}
        <button onClick={() => userRgister()}>Rgister</button>
    </>
  )
}

export default Rgister