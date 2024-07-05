import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:3000/products");

    const data = await res.json();

    return data;
  }
);

export const fetchProductsById = createAsyncThunk(
  "products/fetchProductsById",
  async (productId) => {
    const res = await fetch(`http://localhost:3000/products/${productId}`);

    const data = await res.json();

    return data;
    //   find((item) => item.id === productId);
  }
);

const initialState = {
  products: [],
  product: null,
  cart: [],
  loading: false,
  error: "",
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductToCart: (state, { payload }) => {
      let foundProduct = state.cart.find((item) => item.id === payload.id);

      if (foundProduct) {
        state.cart = state.cart.map((item) => {
          if (item.id === payload.id) {
            item.quantityValue = payload.quantityValue;
          }
          return item;
        });
      } else {
        state.cart.push(payload);
      }
    },
    // removeProductFromCart: (state, { payload }) = {
      
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductsById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addProductToCart } = ProductsSlice.actions;

export default ProductsSlice.reducer;
