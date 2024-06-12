import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setZero: (state) => {
      state.count -= state.count
    }
  },
});
export const { increment, decrement, setZero } = counterSlice.actions;

export default counterSlice.reducer;
