// import React from 'react'
import ListIntercepts from '../component/ListIntercepts'
import MyInterceptor from '../component/MyInterceptorMissiles'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'
const Idf = () => {
    const user = useSelector((state: RootState) => state.user)

    return (
    <>
    <h1>Idf</h1>    
    <h3> welcome to {user?.organization} </h3>
    <MyInterceptor/>
    <ListIntercepts/>
    </>
)
}

export default Idf