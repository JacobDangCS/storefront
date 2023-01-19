const initialState = [];

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_PRODUCTS':
      return payload;

    case 'UPDATE_PRODUCTS':
      return state.map(product => product.name !== payload.name ? product : payload);

    default:
      return state;
  }
}


export default productsReducer;