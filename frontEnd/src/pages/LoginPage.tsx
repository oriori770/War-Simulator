import React, { useRef } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import {login} from '../services/auth.service'
import {setToken} from "../utils/localStorge"
import { setUser} from '../store/features/user/userSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/store'
import Login from '../component/Login'
const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const Navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();
  const userlogIn = async (): Promise<void> => { 
    const response = await login(emailRef.current!.value, passwordRef.current!.value)    
    if (response) {
      console.log(response.user, "user");
      dispatch(setUser(response.user))
      setToken(response.token)
      Navigate("/vote")
    }
    else {
      Navigate("/logIn")
    }
  }
    return (
  <>
    <div>Login</div>
      <Login />
  </>
  )
}

export default LoginPage