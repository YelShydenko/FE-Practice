import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
   name: "post",
   initialState: {
      data: [],
   },
   reducers: {
      createPost: (state, { payload }) => {
         state.data.push(payload);
      },
      deletePost: (state, { payload }) => {
         state.data = state.data.filter(item => item.id !== payload)
      },
      editPost: (state, { payload }) => {
         
      }
  },
});

export const { createPost, deletePost } = postSlice.actions;

export default postSlice;
