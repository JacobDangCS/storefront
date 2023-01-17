import { connect } from 'react-redux';
import { Box, Button, Stack, Card, CardActions, CardContent, Typography } from '@mui/material';


const Products = (props) => {
  const products = props.list.products.filter(product => product.category === props.list.category);

  return (
    <>
      {
        products.map((products, index) => (
          <Card sx={{ maxWidth: 345 }} key={`products-${index}`} >

            <CardContent>
              <Typography gutterBottom variant='h5' fontSize={25}>
                {products.name}
              </Typography>
              <Typography gutterBottom variant='h5' fontSize={18}>
                $ {products.price}
              </Typography>
              <Typography gutterBottom variant='h5' fontSize={18}>
                inStock: {products.inStock}
              </Typography>
            </CardContent>
            <CardActions>
              <Box>
                <Stack direction="row" spacing={3}>
                  <Button size="small">ADD TO CART</Button>
                  <Button size="small">VIEW DETAILS</Button>
                </Stack>
              </Box>
            </CardActions>
          </Card>
        ))
      }
    </>
  )
}

const mapStateToProps = ({ products }) => {
  return {
    products: products.products,
  }
};


export default connect(mapStateToProps)(Products);