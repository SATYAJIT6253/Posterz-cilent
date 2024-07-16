import React from "react";
import "./product.scss";

import { useNavigate } from "react-router-dom";
function Product({ product }) 
{
  const navigate = useNavigate();
  function clickhandeler() {
    navigate(`/products/${product.attributes.title}`);
    console.log(product.attributes.image.data.attributes.url);
  }
  return (
    <div className="product" onClick={clickhandeler}>
      <div className="product-container">
        <div className="image-container">
          <img src={product.attributes.image.data.attributes.url} alt="" />
        </div>
        <div className="info-container">
          <p>{product.attributes.desc.substr(0,90)}...</p>
          <p className="product-price">₹ {product.attributes.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
