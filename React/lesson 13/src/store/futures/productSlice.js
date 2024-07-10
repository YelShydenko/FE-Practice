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
    getProbuctFromLocalStorage: (state) => {
      let cartStorage = JSON.parse(localStorage.getItem("cart"));

      if (cartStorage) {
        state.cart = [...cartStorage];
      } else {
        state.cart = [];
        localStorage.setItem("cart", JSON.stringify([state.cart]));
      }
    },
    addProductToCart: (state, { payload }) => {
      let foundProduct = state.cart.find((item) => item.id === payload.id);

      if (!foundProduct) {
        state.cart.push({ ...payload, count: 1 });
      }
      localStorage.setItem("cart", JSON.stringify([state.cart]));
    },
    incrementProduct: (state, { payload }) => {
      state.cart = state.cart.map((item) => {
        if (item.id === payload) {
          item.count += 1;
        }

        return item;
      });
      localStorage.setItem("cart", JSON.stringify([state.cart]));
    },
    decrementProduct: (state, { payload }) => {
      state.cart = state.cart
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
      localStorage.setItem("cart", JSON.stringify([state.cart]));
    },
    removeProductFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
      localStorage.setItem("cart", JSON.stringify([state.cart]));
    },
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

export const {
  addProductToCart,
  removeProductFromCart,
  incrementProduct,
  decrementProduct,
  getProbuctFromLocalStorage,
} = ProductsSlice.actions;

export default ProductsSlice.reducer;
