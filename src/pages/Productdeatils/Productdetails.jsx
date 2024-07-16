import React, { useEffect, useState } from "react";
import "./productdetails.scss";
import background from "../../assests/background.jpg";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosCilent";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
function Productdetails() {
  const params = useParams();
  const [product,setproduct] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector( state =>state.cartReducer.cart);
  const quantity = cart.find(item => item.key === params.productid)?.quantity || 0;
  // console.log(quantity);
  async function fetchData()
  {
     const productResponse = await axiosClient.get(`/products?filters[key][$eq]=${params.productid}&populate=*`);
      
    setproduct(productResponse.data.data[0]);
    // console.log("product is " , productResponse.data.data[0]);
    // console.log("product.attributes.image.data.attributes.url");
  }
  useEffect(()=>{
    setproduct(null)
    fetchData()
  },[params])
  return (
    <div className="productdetails">
      <div className="container">
        <div className="product-layout">
          <div className="product-img">
            <img src={product?.attributes.image.data.attributes.url} alt="" />
          </div>
          <div className="product-info">
            <div className="product-details">
              <h1 className="heading">This is our {product?.attributes.title}</h1>
              <h3 className="price">${product?.attributes.price * quantity}</h3>
              <p className="desription">{product?.attributes.desc}</p>
            </div>
            <div className="cart-option">
              <div className="quantity-selector">
                <span className="btn-decrement span-btn"
                onClick={() => dispatch(removeFromCart(product))}>-</span>
                <span className="quantity span-btn">{quantity}</span>
                <span className="btn-increment span-btn" 
                onClick={() => dispatch(addToCart(product))}>+</span>
               
              </div>
              <button className="bay-btn" onClick={() => dispatch(addToCart(product))} >Bay Now</button>
            </div>
            <div className="return-policy">
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam placeat iste beatae!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium perspiciatis in
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
