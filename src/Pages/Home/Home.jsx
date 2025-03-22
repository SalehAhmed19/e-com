import React from "react";
import "../../Style/Home.css";
import Categories from "../../Components/Isolated/Categories";
import Deals from "../../Components/Isolated/Deals";
import Hero from "../../Components/Isolated/Hero";
import Banner from "../../Components/Isolated/Banner";

function Home() {
  return (
    <div className="m-w">
      <Hero />
      <Categories />
      <Deals />
      <Banner />
    </div>
  );
}

export default Home;
