import { ButtonGroup, Button, Typography, Container } from '@mui/material';
import { connect } from 'react-redux';
import { selectCategory } from '../../Store/reducer';

const Categories = (props) => {

  const { categories, selectCategory } = props;

  return (
    <>
      <Container sx={{ mx: 'auto' }}>
        <Typography gutterBottom variant="h5" component="div">
          Browse our Categories
        </Typography>
        <ButtonGroup variant="contained" aria-label="outlined button group">
          {categories.map((category, index) => (
          <Button key={`categories-index`} onClick={() => selectCategory(category.name)}>{category.displayName}</Button>
          ))}
        </ButtonGroup>
      </Container>
    </>
  )
}

const mapStateToProps = ({ products }) => {
  return {
    categories: products.categories,
  }
};

const mapDispatchToProps = { selectCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);