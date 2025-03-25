import React from "react";
import { Fade } from "react-awesome-reveal";
import "../../Style/Home.css";
import Categories from "../../Components/Isolated/Categories";
import Deals from "../../Components/Isolated/Deals";
import Hero from "../../Components/Isolated/Hero";
import Banner from "../../Components/Isolated/Banner";
import NewArrivals from "../../Components/Isolated/NewArrivals";
import Offers from "../../Components/Isolated/Offers";
import Features from "../../Components/Isolated/Features";
import Stats from "../../Components/Isolated/Stats";
import Blogs from "../../Components/Isolated/Blogs";

function Home() {
  return (
    <div className="m-w">
      <Hero />
      <Fade>
        <Categories />
      </Fade>
      <Deals />
      <Fade direction="up">
        <Banner />
      </Fade>
      <NewArrivals />
      <Offers />
      <Fade direction="up">
        <Features />
      </Fade>
      <Stats />
      <Blogs />
    </div>
  );
}

export default Home;
