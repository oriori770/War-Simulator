import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICandidate } from '../../../types/candidate';
import {getCandidates} from "../../../services/candidate.services"

interface CadidateState{
    candidates: ICandidate[]
}
const initialState: CadidateState = {
    candidates: []
}
export const featchCandidates =  createAsyncThunk("cadidate/featchCandidates",getCandidates)
const cadidateSlice = createSlice ({
    name: 'cadidate',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(featchCandidates.fulfilled, (state, action) => {
            state.candidates = action.payload
        })
        .addCase(featchCandidates.rejected, (state, action) => {
            console.log(action.error.message)
        })
        .addCase(featchCandidates.pending, (state, action) => {
            console.log("pending")
        })
    }
})


export const {} = cadidateSlice.actions
export default cadidateSlice.reducer;