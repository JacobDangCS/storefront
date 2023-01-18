import { ButtonGroup, Button, Typography, Container } from '@mui/material';
import { selectCategory } from '../../Store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  return (
    <>
      <Container sx={{ mx: 'auto' }}>
        <Typography gutterBottom variant="h5" component="div">
          Browse our Categories
        </Typography>
        <ButtonGroup variant="contained" aria-label="outlined button group">
          {categories.map((category, index) => (
          <Button key={`category-${index}`} data-testid={`category-${index}`} onClick={() => dispatch(selectCategory(category.name))}>{category.displayName}</Button>
          ))}
        </ButtonGroup>
      </Container>
    </>
  )
}

export default Categories;