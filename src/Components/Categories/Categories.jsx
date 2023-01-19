import { ButtonGroup, Button, Typography, Container } from '@mui/material';
import { getCategories, selectCategory } from '../../Store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Categories = () => {

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container sx={{ mx: 'auto' }}>
        <Typography gutterBottom variant="h5" component="div">
          Browse our Categories
        </Typography>
        <ButtonGroup variant="contained" aria-label="outlined button group">
          {categories.map((category, index) => (
          <Button key={`category-${index}`} data-testid={`category-${index}`} onClick={() => dispatch(selectCategory(category.name))}>{category.name}</Button>
          ))}
        </ButtonGroup>
      </Container>
    </>
  )
}

export default Categories;