import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        username: "John"
    },
    reducers: {
        increment: state => {
            state.count += 1;
        },
        decrement: state => {
            state.count -= 1;
        },
        setZero: state => {
            state.count = 0;
        }
    }
})

export const { increment, decrement, setZero } = counterSlice.actions;

export default counterSlice.reducer;