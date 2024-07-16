import React from "react";
import "./category.scss";
import {useNavigate} from 'react-router-dom'
function Category({category}) {
  // console.log("category is ",category);
  const navigate = useNavigate();
  function clickhandler()
  {
      navigate(`/category/${category.attributes.key}`);
      // console.log("clicked bro");
      // console.log(category.attributes.image.data[0].attributes.url);
      // console.log(typeof(category.attributes.image.data));
      // console.log(category.attributes.key);
  }
  return (
    <div className="category" onClick={clickhandler}  
    style={{backgroundImage: `url(${category.attributes.image.data[0].attributes.url})`}} >
      <div className="content">
        <h3>{category.attributes.title}</h3>
      </div>
    </div>
  );
}

export default Category;
