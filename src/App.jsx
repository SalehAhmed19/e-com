import { Fade } from "react-awesome-reveal";
import "./App.css";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router";
import Categories from "./Pages/Categories/Categories";
import Products from "./Pages/Products/Products";
import Offers from "./Pages/Offers/Offers";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Fade direction="up">
        <Footer />
      </Fade>
    </>
  );
}

export default App;
