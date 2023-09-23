import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Store } from "@reduxjs/toolkit";

export interface CounterState {
  origin: string | null;
  destination: string | null;
  travelTimeInformation: string | null;
}

const initialState: CounterState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin:(state,action)=>{
        state.origin = action.payload
    },
    setDestination:(state,action)=>{
        state.destination = action.payload
    },
    setTravelTimeInformation:(state,action)=>{
        state.travelTimeInformation = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

export const selectOrigin = (state:any) => state.nav.origin
export const selectDestination = (state:any) => state.nav.destination
export const selectTravelTimeInformation = (state:any) => state.nav.travelTimeInformation

export default navSlice.reducer;
