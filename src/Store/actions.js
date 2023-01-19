import axios from "axios"

export const selectCategory = (category) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: category,
  }
}

export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  }
}

export const addProduct = (product) => {
  return {
    type: 'ADD',
    payload: product,
  }
}

export const removeProduct = (product) => {
  return {
    type: 'REMOVE',
    payload: product,
  }
}

export const setProducts = (products) => {
  return{
    type: 'SET_PRODUCTS',
    payload: products
  }
}


export const setCategories = (products) => {
  return{
    type: 'SET_CATEGORIES',
    payload: products
  }
}


export const updateProducts = (product) => {
  return{
    type: 'UPDATE_PRODUCTS',
    payload: product
  }
}

export const getProducts = () => async(dispatch, getState) => {
  let res = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  dispatch(setProducts(res.data.results));
}

export const getCategories = () => async(dispatch, getState) => {
  let res = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setCategories(res.data.results));
}

export const adjustInventory = (product) => async(dispatch, getState) => {
  product.inStock--;
  let res = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
  dispatch(updateProducts(res.data));
}