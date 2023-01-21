import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  activeCategory: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => ({...state, categories: action.payload}),
    selectCategory: (state, action) => ({...state, activeCategory: action.payload}),
  }
});

export const { setCategories, selectCategory } = categoriesSlice.actions;

export const getCategories = () => async(dispatch, getState) => {
  let res = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setCategories(res.data.results));
}


// const categoryReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case 'SELECT_CATEGORY':
//       return{
//         ...state,
//         activeCategory: payload,
//       }

//     case 'SET_CATEGORIES':
//       return{
//         ...state,
//         categories: payload,
//       }

//     case 'RESET':
//       return initialState;

//     default:
//       return state;
//   }
// }




export default categoriesSlice.reducer;