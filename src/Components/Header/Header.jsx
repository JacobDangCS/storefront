import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { cart } = useSelector(state => state)
  return (
    <>
      <header>
        <Link default to="/">Our Store</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </header>
    </>
  )
};

export default Header;