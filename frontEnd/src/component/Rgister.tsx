import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { RgisterToWeb } from '../services/auth.service'
import { useDispatch } from 'react-redux'
import {setUser} from "../store/features/user/userSlice"
import { AppDispatch } from '../store/store'


const Rgister = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const Navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const userRgister = async (): Promise<void> => { 
        const response = await RgisterToWeb(nameRef.current!.value, passwordRef.current!.value)    
        if (response) {
          console.log(response.user, "user");
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
        <input ref={passwordRef} name='password' type="password"  />
        <button onClick={() => userRgister()}>logIn</button>
    </>
  )
}

export default Rgister