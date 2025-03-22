import React from "react";
import "../../Style/Home.css";
import Banner from "../../Components/Isolated/Banner";
import Categories from "../../Components/Isolated/Categories";
import Deals from "../../Components/Isolated/Deals";

function Home() {
  return (
    <div className="m-w">
      <Banner />
      <Categories />
      <Deals />
    </div>
  );
}

export default Home;
