import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../../types/user';
import { getUsers } from '../../../services/user.services';
interface UserState {
    user: IUser
    users : IUser[]
}
const initialState: UserState = {
    user: { _id: "", userName: "ישראל ישראלי", IsVoted: false, IsAdmin: false, votedFor: null },
    users: []
}
export const featchUsers =  createAsyncThunk("user/featchUsers",getUsers)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        toggleVotedStatus: (state) => {
            state.user.IsVoted = !state.user.IsVoted
        },
        setVotedFor: (state, action) => {
            state.user.votedFor = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(featchUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
        .addCase(featchUsers.rejected, (state, action) => {
            console.log(action.error.message)
        })
        .addCase(featchUsers.pending, (state, action) => {
            console.log("pending")
        })
    }
})

export const {setUser, setVotedFor, toggleVotedStatus} = userSlice.actions;
export default userSlice.reducer;