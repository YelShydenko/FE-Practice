import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    data: [],
  },
  reducers: {
    createNote: (state, { payload }) => {
      state.data.push(payload);
    },
    removeNote: (state, { payload }) => {
      state.data = state.data.filter((elem) => elem.id !== payload);
     },
     deleteAllNotes: (state) => {
       state.data = []
    }
  },
});

export const { createNote, removeNote, deleteAllNotes } = noteSlice.actions;

export default noteSlice.reducer;
