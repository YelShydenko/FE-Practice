import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return data;
});

export const fetchPostsById = createAsyncThunk(
  "post/fetchPostsById",
  async (postId) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await res.json();
    return data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    loading: false,
    error: "",
    foundPost: null,
  },
  reducers: {
    createPost: (state, { payload }) => {
      state.data.push(payload);
    },
    removePost: (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload);
    },
    removePostAll: (state, ) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPostsById.fulfilled, (state, action) => {
        state.foundPost = action.payload;
        state.loading = false;
      })
      .addCase(fetchPostsById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { createPost, removePost, removePostAll } = postsSlice.actions;
export default postsSlice.reducer;
