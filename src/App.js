import './App.css';
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SimpleCart from './Components/SimpleCart/SimpleCart';

const App = () => {
  return (
    <>
      <Header/>
      <Categories/>
      <Products/>
      <SimpleCart/>
      <Footer/>
    </>
  );
}

export default App;