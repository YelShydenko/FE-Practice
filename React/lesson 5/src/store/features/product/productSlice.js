import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const res = await fetch("/products.json");

        const data = await res.json()

        return data;
    }
);

export const fetchProductsById = createAsyncThunk(
    "products/fetchProductsById",
    async (productId) => {
        const res = await fetch("/products.json");

        const data = await res.json()

        let filteredData = data.find(item => item.id === productId);

        return filteredData;
    }
);

export const fetchCategories = createAsyncThunk(
    "products/fetchCategories",
    async () => {
        const res = await fetch("/categories.json");

        const data = await res.json()

        return data;
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        categories: [],
        data: [],
        carts: [],
        product: null,
        isLoading: false,
        error: ""
    },
    reducers: {
        createProduct: (state, { payload }) => {
            state.products.push(payload)
        },
        removeProduct: state => { },
        editProduct: state => { },
        createCategory:  (state, { payload }) => {
            state.categories.push(payload)
        },
        addProductToCart: (state, { payload }) => {
            let foundProduct = state.carts.find(item => item.id === payload.id);

            if(foundProduct){
                state.carts = state.carts.map(item => {
                    if(item.id === payload.id){
                      item.count = payload.count
                    }
            
                    return item;
                  })
            }else {
                state.carts.push(payload)
            }
        },
        incrementProductCart: (state, {payload}) => {
            state.carts = state.carts.map(item => {
                if(item.id === payload){
                  item.count += 1;
                }
          
                return item;
              })
        },
        decrementProductCart: (state, {payload}) => {
            state.carts = state.carts.map(item => {
                if(item.id === payload){
                  item.count -= 1;
                }

                if(item.count === 0){
                    return null;
                }
          
                return item;
              }).filter(item => item)
        }, 
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, state => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        .addCase(fetchCategories.pending, state => {
            state.isLoading = true;
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        .addCase(fetchProductsById.pending, state => {
            state.isLoading = true;
        })
        .addCase(fetchProductsById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        })
        .addCase(fetchProductsById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export const { 
    createProduct, 
    removeProduct, 
    editProduct, 
    addProductToCart, 
    incrementProductCart,
    decrementProductCart,
    createCategory
} = productSlice.actions;


export default productSlice.reducer;