import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { addProduct } from '../../Store/actions';

const Products = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state);

  return (
    <>
      {products.map((product, index) => {
        <p key={`product-${index}`}>{product.name}
          <Button onClick={() => dispatch(addProduct(product))}>X</Button>
        </p>
      })}
    </>
  )
}


export default Products;