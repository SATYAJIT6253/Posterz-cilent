import React from "react";
import cartimage from "../../assests/cartimage.jpg";
import "./cartitem.scss";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, resetCart } from "../../redux/cartSlice";
function Caritem({product}) {
  const dispatch = useDispatch();
  return (
    <div className="parent-cart">

    
    <div className="cart-item">
      <div className="item-img">
        <img src={product.image} alt="" />
      </div>
      <div className="item-info-wrapper">
        <div className="item-info">
          <h4 className="title">{product.title}</h4>
          <p className="price">${product.price}</p>
          <div className="quantity-selector">
            <span className="btn decrement" onClick={()=>dispatch(removeFromCart(product))}>-</span>
            <span className="quantity btn">{product.quantity}</span>
            <span className="btn increment" onClick={()=>dispatch(addToCart(product))}>+</span>
          </div>
          <p className="total-price">Subtotal : ${product.quantity * product.price}</p>
        </div>
      </div>
      
    </div>
    <div className="remove-cart" onClick={()=>dispatch(resetCart(product))} >
        <button>Remove from Cart</button>
      </div>
    </div>
  );
}

export default Caritem;
