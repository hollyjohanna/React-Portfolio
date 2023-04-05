// Import Styles
import "../css/styles.css";
// Import Components
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Import Pages
import Home from "./../pages/Home";
import Portfolio from "./../pages/Portfolio";
import WackyWeka from "../pages/WackyWeka";
import GigFort from "../pages/GigFort";
import Kiwiburn from "../pages/Kiwiburn";
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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/wackywekaproject" element={<WackyWeka />} />
          <Route path="/gigfortproject" element={<GigFort />} />
          <Route path="/kiwiburnproject" element={<Kiwiburn />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default Website;
