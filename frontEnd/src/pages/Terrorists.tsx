import React from 'react'
import ListMissiles from '../component/ListMissiles'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import MyTerrorMissiles from '../component/MyTerrorMissiles'

const Statistics = () => {
  const {user} = useSelector((state: RootState) => state)
  if(!user) return <div>no user!! please login first</div>
    return (
    <>
      <div>welcome : {user.userName}</div>
      <h3> welcome to {user?.organization} </h3>
      <MyTerrorMissiles />
      <ListMissiles />
    </>
  )
}

export default Statistics