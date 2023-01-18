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