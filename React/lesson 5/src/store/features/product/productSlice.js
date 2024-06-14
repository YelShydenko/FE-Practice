import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    carts: [],
    isLoading: false,
  },
  reducers: {
    createProduct: (state) => {},
    removeProduct: (state) => {},
    editProduct: (state) => {},

    addProductToCart: (state, { payload }) => {
      let foundProduct = state.carts.find((item) => item.id === payload.id);

      if (foundProduct) {
        state.carts = state.carts.map((item) => {
          if (item.id === payload.id) {
            item.count = payload.count;
          }

          return item;
        });
      } else {
        state.carts.push(payload);
      }
    },

    increment: (state, { payload }) => {
      state.carts = state.carts.map((item) => {
        if (item.id === payload) {
          item.count += 1;
        }
        return item;
      });
    },

    decrement: (state, { payload }) => {
      state.carts = state.carts
        .map((item) => {
          if (item.id === payload) {
            item.count -= 1;

            if (item.count === 0) {
              return null;
            }
          }
          return item;
        })
        .filter((item) => item);
    },
  },
});

export const {
  createProduct,
  removeProduct,
  editProduct,
  addProductToCart,
  increment,
  decrement,
} = productSlice.actions;

export default productSlice.reducer;
