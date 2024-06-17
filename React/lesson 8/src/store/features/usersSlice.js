import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("user/fetchUser", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
     loading: false,
     error: ''
  },
  reducers: {
    createUser: (state, { payload }) => {
      state.data.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
       .addCase(fetchUsers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message
     })
  },
});

export const { createUser } = usersSlice.actions;

export default usersSlice.reducer;
