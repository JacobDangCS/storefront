/* eslint-disable array-callback-return */
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card } from '@mui/material';
import { addProduct, adjustInventory, getProducts } from '../../Store/actions';
import { useEffect } from 'react';

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
          <Button onClick={() => handler(product)}>X</Button>
        </Card>
      })}
    </>
  )
}


export default Products;