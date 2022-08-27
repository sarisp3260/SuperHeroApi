import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 2,
    name: "batman",
    superPower: "billonare"
  }
];

export const herosSlice = createSlice({
  name: 'heros',
  initialState,
  reducers: {
    
  }
})

export default herosSlice.reducer