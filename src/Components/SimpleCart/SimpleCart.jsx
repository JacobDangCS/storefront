/* eslint-disable array-callback-return */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../Store/cart/cart';
import { When } from 'react-if';
import './style.scss';

const SimpleCart = () => {
  const dispatch = useDispatch();
  let { cart } = useSelector(state => state);

  return (
    <>
      <When condition={cart.length > 0}>
        <div className="simple-cart">
        <ul>
          {cart.map((product, index) => (
            <li key={`cart-${index}`}>{product.name}
              <span onClick={() => dispatch(removeProduct(product))}> x</span>
            </li>
          ))}
        </ul>
        </div>
      </When>
    </>
  )
}

export default SimpleCart;