import './App.css';
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header/>
      <Categories/>
      <Products/>
      <Footer/>
    </>
  );
}

export default App;