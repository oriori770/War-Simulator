import { useNavigate } from 'react-router-dom'
import {login, RgisterToWeb} from '../services/auth.service'
import {setToken} from "../utils/localStorge"
import { setUser} from '../store/features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import React, { useRef } from 'react'
import {handleclick } from "../types/form"
import { setMissiles} from '../store/features/missiles/missilesSlice'

const Login = () => {
    const h  = useSelector((state: RootState) => state)
    const nameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const Navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const userlogIn = async (): Promise<void> => { 
      const response = await login(nameRef.current!.value, passwordRef.current!.value)    
      if (!response) {Navigate("/register")}
      dispatch(setUser(response.user))
      setToken(response.token)
      if (response.user.organization.slice(0,3) === "IDF") {
        Navigate("/idf")
      }
      else {
        Navigate("/terrorists")
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





