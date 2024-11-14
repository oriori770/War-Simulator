import UserReducer from './features/user/userSlice';
import MissileReducer from './features/missiles/missilesSlice';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {
        user: UserReducer,
        missile: MissileReducer
    }

})  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch