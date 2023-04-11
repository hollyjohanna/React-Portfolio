// Import Styles
import "../css/styles.css";
// Import Components
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Import Pages
import Home from "./../pages/Home";
import DivineStays from "../pages/DivineStays";
import WackyWeka from "../pages/WackyWeka";
import GigFort from "../pages/GigFort";
import Wetaverse from "../pages/Wetaverse";
// Import Components
import ScrollToTopBtn from "./ScrollToTopBtn";
// Import Dependencies
import { Routes, Route, HashRouter } from "react-router-dom";

function Website() {
  console.log(
    "Hello there, stoked you're having a look at whats going on in here ;) have fun looking around"
  );
  console.log("<3 <3 <3");
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <ScrollToTopBtn />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/divinestaysproject" element={<DivineStays />} />
          <Route path="/wackywekaproject" element={<WackyWeka />} />
          <Route path="/gigfortproject" element={<GigFort />} />
          <Route path="/wetaverseproject" element={<Wetaverse />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default Website;
