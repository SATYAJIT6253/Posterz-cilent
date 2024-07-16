import React, {useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

function Navbar() {
  const [opencart, setopencart] = useState(false);
  const categories = useSelector((state) => state.categoryReducer.categories);
  console.log(categories[2]);
  const cart  = useSelector((state)=>state.cartReducer.cart);
  // console.log(cart);
  let totalitems = 0;
  cart.forEach(element => {
      totalitems = totalitems + element.quantity
  });
  
  function ClickHandeler() {
    setopencart(!opencart);
  }
  return (
    <div>
      <nav className="Navbar">
        <div className="container nav-container">
          <div className="nav-left">
            <ul className="link-group">
              {categories.map((category) => (
                <li className="hover-link" key={category.id}>
                  <Link className="link" to={`/category/${category.attributes.key}`}>
                    {category.attributes.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-centre">
            <Link to="/">
              <h1 className="banner">PosterZ</h1>
            </Link>
          </div>
          <div className="nav-right">
            <div className="nav-cart" onClick={ClickHandeler}>
              <FaShoppingCart className="icon" />
              <span className="cart-count">{totalitems}</span>
            </div>
          </div>
        </div>
      </nav>
      {opencart && <Cart onClose={() => setopencart(false)} />}
    </div>
  );
}

export default Navbar;
