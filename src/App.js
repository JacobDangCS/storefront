import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import StoreFront from './Components/StoreFront/storefront';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart/shoppingcart'
import ProductDetails from './Components/ProductDetails/productdetails';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<StoreFront/>}/>
        <Route path="/cart" element={<ShoppingCart/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;