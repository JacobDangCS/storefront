import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers:{
    setProducts: (state, action) => action.payload,
    updateProduct: (state, action) => state.map(product => (product.name !==
      action.payload.name ? product : action.payload
      )),
    }
  })

  export const { setProducts, updateProduct } = productsSlice.actions;

  export const getProducts = () => async(dispatch, getState) => {
    let res = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
    dispatch(setProducts(res.data.results));
  }
  
  export const adjustInventory = (product) => async(dispatch, getState) => {
    let updatedProduct = {...product, inStock: product.inStock -1}

    let res = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, updatedProduct);
    dispatch(updateProduct(res.data));
  }
  

// const productsReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case 'SET_PRODUCTS':
//       return payload;

//     case 'UPDATE_PRODUCTS':
//       return state.map(product => product.name !== payload.name ? product : payload);

//     default:
//       return state;
//   }
// }

export default productsSlice.reducer;