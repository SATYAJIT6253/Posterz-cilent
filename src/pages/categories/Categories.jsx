import React, { useState } from "react";
import "./categories.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { axiosClient } from "../../utils/axiosCilent";
function Categories() {
  const navigate = useNavigate();
  const [categoryid, setcategotyid] = useState("");
  const params = useParams();
  const catgeoryList = useSelector((state) => state.categoryReducer.categories);
  const [products, setproducts] = useState([]);

  const sortoption = [
    {
      value: "price low-to-high",
      sort: "price",
    },
    {
      value: "Newest first",
      sort: "createdAt",
    },
  ];
  const [sortby, setsortby] = useState(sortoption[0].sort);
  const[isSpinner,setisSpinner] = useState(true);
  function changehandeler(e) {
    console.log("clicked", `${e.target.value}`);
    navigate(`/category/${e.target.value}`);
  }
  async function fetchProducts() {
    const url = params.categoryid
            ? `/products?populate=image&filters[category][key][$eq]=${params.categoryid}&sort=${sortby}`
            : `/products?populate=image&sort=${sortby}`;
    const productResponse = await axiosClient.get(url);
    // console.log(productResponse.data.data);
    setproducts(productResponse.data.data);
    setisSpinner(false);
  }
  useEffect(() => {
    setcategotyid(params.categoryid);

    fetchProducts();
  }, [params, sortby]);
  return (
    <div className="parent-categories">
    {
      isSpinner ? (
        <span class="loader"></span>
      ):(
        <div className="Catgories">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore All print and Artwork</h2>
            <p>
              India's largest collection for posters and walls Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Quas nemo est aspernatur!
            </p>
          </div>
          <div className="sort-by">
            <div className="sort-by-container">
              <p className="sort-by-text">Sort By</p>
              <select
                name="sort-by"
                id="sort-by"
                className="select-sort-by"
                onChange={(e) => setsortby(e.target.value)}
              >
                {sortoption.map((Option) => (
                  <option value={Option.sort} key={Option.sort}>
                    {Option.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {catgeoryList.map((item) => (
                <div className="filter-radio">
                  <input
                    type="radio"
                    id={item.id}
                    name="category"
                    value={item.attributes.key}
                    onChange={changehandeler}
                    checked={item.attributes.key === categoryid}
                  />
                  <label htmlFor={item.value}>{item.attributes.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="products-box">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
      ) 
     } 
    
    </div>
  );
}

export default Categories;
