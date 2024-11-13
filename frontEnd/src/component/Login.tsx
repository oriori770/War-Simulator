import { useNavigate } from 'react-router-dom'
import {login, RgisterToWeb} from '../services/auth.service'
import {setToken} from "../utils/localStorge"
import { setUser} from '../store/features/user/userSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/store'
import React, { useRef } from 'react'
import {handleclick } from "../types/form"

const Login = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const Navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const userlogIn = async (): Promise<void> => { 
      const response = await login(nameRef.current!.value, passwordRef.current!.value)    
      if (response) {
        console.log(response.user, "user");
      dispatch(setUser(response.user))
      setToken(response.token)
      Navigate("/vote")
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
        <button onClick={() => userlogIn()}>logIn</button>
    </>
  )
}
export default Login





