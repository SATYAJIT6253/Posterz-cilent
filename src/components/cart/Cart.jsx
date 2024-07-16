import React from "react";
import "./cart.scss";
import { MdClose } from "react-icons/md";
import Caritem from "../cartitem/Caritem";
import { useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosCilent";
import {loadStripe} from '@stripe/stripe-js';
function Cart({ onClose }) {
  const cart = useSelector((state) => state.cartReducer.cart);
  let totalamount = 0;
  cart.forEach((element) => {
    totalamount = totalamount + element.quantity * element.price;
  });
  const isCartempty = cart.length === 0;

  // checkout handeler
  async function checkouthandler()
  {
      try 
      {
        const response = await axiosClient.post('/orders', {products: cart});
        const stripe = await loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`);
        const data = await stripe.redirectToCheckout({
                sessionId: response.data.stripeid
            })

            console.log('stripe data', data);
      } catch (error) 
      {
        console.log(error);
      }
  }
  return (
    <div className="cart">
      <div className="overlay"></div>
      <div className="cart-content">
        <div className="header">
          <h3>Shooping Cart</h3>
          <div className="close-btn" onClick={onClose}>
            <MdClose /> close
          </div>
        </div>
        {isCartempty ? (
          <h2>Cart is empty </h2>
        ) : (
          <div className="cart-items">
            {cart.map((product) => (
              <Caritem product={product} key={product.id} />
            ))}
            <div className="checkout-info">
              <div className="total-amount">
                <h2>Total : </h2>
                <h2>₹{totalamount}</h2>
              </div>
              <div className="checkout" onClick={checkouthandler} >
               Checkout Now
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
