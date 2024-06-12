import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: {
        data: []
    },
    reducers: {
        createPost: (state, {payload}) => {
            state.data.push(payload);
        },
        deletePost: (state, {payload}) => {
            state.data = state.data.filter(item => item.id !== payload)
        },
        editPost: (state, {payload}) => {
            state.data = state.data.map(item => {
                if(item.id === payload.id){
                    item.name = payload.name
                }

                return item;
            })
         }
    }
})

export const { createPost, deletePost, editPost } = postSlice.actions;

export default postSlice.reducer;