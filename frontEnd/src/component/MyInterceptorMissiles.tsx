import { RootState } from '../store/store'
import React from 'react'
import { useSelector } from 'react-redux'

const MyInterceptor = () => {
  const user = useSelector((state: RootState) => state.user)
  return (
    <>
    <div>MyInterceptor</div>
    {user.resources.map((resource) =>{ 
        return <div>{resource.name } : { resource.amount}</div> 
      })}
    </>
  )
}

export default MyInterceptor