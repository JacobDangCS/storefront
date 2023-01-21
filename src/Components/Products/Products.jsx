/* eslint-disable array-callback-return */
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card } from '@mui/material';
import { addProduct } from '../../Store/cart/cart';
import { useEffect } from 'react';
import { adjustInventory, getProducts } from '../../Store/products';
import { Link } from 'react-router-dom';

const Products = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state);
  const { activeCategory } = useSelector(state => state.category);

  useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderList = products.filter(product => product.category === activeCategory);

  const handler = (product) => {
    dispatch(addProduct(product));
    dispatch(adjustInventory(product));
  }

  return (
    <>
      {activeCategory && renderList.map((product, index) => {
        <Card key={`product-${index}`}>{product.name}
          <img style={{width: '15%'}} alt={product.name} src={`https://source.unsplash.com/random?${product.name}`}/>
          <Button onClick={() => handler(product)}>Add Item</Button>
          <Button component={Link} to={`/product/${product._id}`} onClick={() => handler(product)}>View Details</Button>
        </Card>
      })}
    </>
  )
}


export default Products;