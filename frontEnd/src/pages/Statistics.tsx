import React from 'react'
import ListStatistics from '../component/ListStatistics'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const Statistics = () => {
  const {user} = useSelector((state: RootState) => state.user)

  if(!user) return <div>no user!! please login first</div>
  console.log(user);
  
  if(!user.IsAdmin) return <div>no admin!! please login first</div>
  return (
    <>
    
      <div>welcome : {user.userName}</div>
      <div>Statistics</div>
      <ListStatistics />
    </>
  )
}

export default Statistics