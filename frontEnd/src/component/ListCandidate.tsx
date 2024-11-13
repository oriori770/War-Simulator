import React, { useEffect, useState } from 'react'
import { getCandidates } from '../services/candidate.services'
import { ICandidate } from '../types/candidate'
import Candidate from './Candidate'
import { useSelector, useDispatch } from 'react-redux'
import { Root } from 'react-dom/client'
import { RootState, AppDispatch } from '../store/store'
import {featchCandidates} from "../store/features/cadidate/cadidateSlice"
import {getToken} from "../utils/localStorge"
const ListCandidate = () => {
  const token:string | null = getToken()  
  if (!token) return <div>no token!! please login first</div>
  const dispatch = useDispatch<AppDispatch>();
  const {candidates} = useSelector((state: RootState) => state.cadidate)
    useEffect(() => {
        dispatch(featchCandidates(token))
    }, [])
  return (
    <>
      <div>candidate: </div>
      {candidates.map((candidate, index) => (<Candidate key={index} candidate={candidate} />))}
    </>
  )
}

export default ListCandidate