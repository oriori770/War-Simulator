import UserReducer from './features/user/userSlice';
import CadidateReducer from './features/cadidate/cadidateSlice';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {
        user: UserReducer,
        cadidate: CadidateReducer
    }

})  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch