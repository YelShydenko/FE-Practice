import { createSlice } from '@reduxjs/toolkit'

const accountReducerSlice = createSlice({
    name: 'accountReducer',
    initialState: {
        balance: 0
    },
    reducers: {
        deposit: (state, action) => {
            state.balance += action.payload;
        },
        withdraw: (state, action) => {
            if (action.payload <= state.balance) {
                state.balance = action.payload <= state.balance ? state.balance - action.payload : state.balance
            }
        },
        receiveAll: state => {
            state.balance = 0
        }
    }
})

export const { deposit, withdraw, receiveAll } = accountReducerSlice.actions;

export default accountReducerSlice.reducer;