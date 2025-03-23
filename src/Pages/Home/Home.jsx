import React from "react";
import "../../Style/Home.css";
import Categories from "../../Components/Isolated/Categories";
import Deals from "../../Components/Isolated/Deals";
import Hero from "../../Components/Isolated/Hero";
import Banner from "../../Components/Isolated/Banner";
import NewArrivals from "../../Components/Isolated/NewArrivals";
import Offers from "../../Components/Isolated/Offers";
import Features from "../../Components/Isolated/Features";

function Home() {
  return (
    <div className="m-w">
      <Hero />
      <Categories />
      <Deals />
      <Banner />
      <NewArrivals />
      <Offers />
      <Features />
    </div>
  );
}

export default Home;
