import { Fade } from "react-awesome-reveal";
import "./App.css";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Fade direction="up">
        <Footer />
      </Fade>
    </>
  );
}

export default App;
