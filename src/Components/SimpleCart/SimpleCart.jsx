/* eslint-disable array-callback-return */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../Store/actions';
import { When } from 'react-if';

const SimpleCart = () => {
  const dispatch = useDispatch();
  let { cart } = useSelector(state => state);

  return (
    <>
      <When condition={cart.length > 0}>
        <ul>
          {cart.map((product, index) => {
            <li key={`cart-${index}`}>{product.name}
              <span onClick={() => dispatch(removeProduct(product))}>X</span>
            </li>
          })}
        </ul>
      </When>
    </>
  )
}

export default SimpleCart;