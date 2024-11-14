import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ICandidate } from "../../../types/candidate";
import {
  getMissilesByArea,
  getMissilesBySenderId,
} from "../../../services/missile.services";
import { missileInList } from "../../../types/missile";

interface MissileState {
  missiles: missileInList[];
}
const initialState: MissileState = {
  missiles: [],
};
export const featchMissilesByArea = createAsyncThunk(
  "missile/featchMissilesByArea",
  getMissilesByArea
);
export const featchMissilesById = createAsyncThunk(
  "missile/featchMissilesById",
  getMissilesBySenderId
);
const cadidateSlice = createSlice({
  name: "missile",
  initialState,
  reducers: {
    setMissiles: (state, action) => {
      state.missiles = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(featchMissilesByArea.fulfilled, (state, action) => {
        state.missiles = action.payload;
      })
      .addCase(featchMissilesByArea.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(featchMissilesByArea.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(featchMissilesById.fulfilled, (state, action) => {
        state.missiles = action.payload;
      })
      .addCase(featchMissilesById.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(featchMissilesById.pending, (state, action) => {
        console.log("pending");
      });
  },
});

export const { setMissiles } = cadidateSlice.actions;
export default cadidateSlice.reducer;
