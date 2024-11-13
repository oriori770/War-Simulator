import React from 'react'
import { ICandidate } from '../types/candidate';
import {vote, cancelVote} from "../services/vote.services";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import {getToken} from "../utils/localStorge"
import {toggleVotedStatus,setVotedFor} from "../store/features/user/userSlice"
const token = getToken()

const candidate = ({candidate}:{candidate:ICandidate}) => {
  if (!token) return <div>no token!! please login first</div>
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user)
  
  const handlcancelVote = async ()=>{
    const response:boolean = await cancelVote(user._id, candidate._id, token)
    if (response) {
      dispatch(setVotedFor(null))
      dispatch(toggleVotedStatus())
    }
  }
  
  const handleVote = async () => {
    
    const response:boolean = await vote(user._id, candidate._id, token)
    if (response) {
      dispatch(setVotedFor(candidate._id))
      dispatch(toggleVotedStatus())
    }

  }
console.log(candidate);

  return (
    <>
    <button onClick={()=>handlcancelVote()}>cancel vote</button>
        <div onClick={() => handleVote()} style={{cursor:"pointer" ,border:"1px solid black", padding:"10px", margin:"10px", backgroundColor:user.votedFor === candidate._id? "red":'green'} } >
            <div>candidate: </div>
            <div>name: {candidate.name}</div>
            <div>votes: {candidate.voted}</div>
            <img src={candidate.image} alt={candidate.name} />
        </div>
    </>
  )
}

export default candidate