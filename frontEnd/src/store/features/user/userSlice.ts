    import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../../types/user';
import { getUsers } from '../../../services/user.services';
interface UserState extends IUser {
    
}
const initialState: UserState = {
     _id: "", userName: "ישראל ישראלי", organization: "",  resources: []
     }

export const featchUsers =  createAsyncThunk("user/featchUsers",getUsers)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return action.payload
        },
        toggleVotedStatus: (state) => {
            
        },
        setVotedFor: (state, action) => {
            state = action.payload
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(featchUsers.fulfilled, (state, action) => {
    //         state.users = action.payload
    //     })
    //     .addCase(featchUsers.rejected, (state, action) => {
    //         console.log(action.error.message)
    //     })
    //     .addCase(featchUsers.pending, (state, action) => {
    //         console.log("pending")
    //     })
    // }
})

export const {setUser, toggleVotedStatus, setVotedFor} = userSlice.actions;
export default userSlice.reducer;