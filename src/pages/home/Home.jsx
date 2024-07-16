import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import "./home.scss";
import Category from "../../components/ctaegory/Category";
import Product from "../../components/product/Product";
import { axiosClient } from "../../utils/axiosCilent";
import { useSelector } from "react-redux";
function Home() {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const [topProducts, settopProducts] = useState(null);

  async function fetchdata() {
    const topproductdata = await axiosClient.get(
      "/products?filters[isTopPick][$eq]=true&populate=image"
    );

    // console.log(topproductdata);

    settopProducts(topproductdata.data.data);
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="home">
      <Hero />
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop by Ctaeggories</h2>
          <p className="subheading">shop from our film and posters</p>
        </div>
        <div className="content">
          {categories?.map((category) => (
            <Category category={category} key={category.id} />
          ))}
        </div>
      </section>
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Our Top Picks</h2>
          <p className="subheading">All old news and new news</p>
        </div>
        <div className="content">
          {topProducts?.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
