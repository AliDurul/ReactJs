import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status:"idle"
};

// option 1
/* export const getProducts = () => {

  return async function getProductsThunk(dispatch) {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    dispatch(fetchProducts(result));
  };

}; */

// option 2

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    /*  fetchProducts: (state, action) => {
      state.data = action.payload;
    }, */
  },
  extraReducers: (builder) => {
    
    builder
    .addCase(getProducts.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'idle';
    })
    .addCase(getProducts.rejected, (state) => {
      state.status = 'error';
    })
  },
});

export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;
