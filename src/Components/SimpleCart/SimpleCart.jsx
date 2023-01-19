/* eslint-disable array-callback-return */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material'
import { removeProduct } from '../../Store/actions';

const SimpleCart = () => {
  const dispatch = useDispatch();
  let { cart } = useSelector(state => state);

  return (
    <>
    {cart.map((product, index) => {
      <p key={`cart-${index}`}>{product.name}
      <Button onClick={() => dispatch(removeProduct(product))}>X</Button>
      </p>
    })}
    </>
  )
}

export default SimpleCart;