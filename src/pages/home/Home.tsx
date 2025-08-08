import React from "react";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import Features from "../../components/features/Features";
import ProductView from "../../components/product-view/ProductView";
import Brands from "../../components/brands/Brands";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <Features/>
      <ProductView/>
      <Brands/>
    </div>
  );
};

export default React.memo(Home);