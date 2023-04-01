// Import Styles
import "../css/styles.css";
// Import Components
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Import Pages
import Home from "./../pages/Home";
import Portfolio from "./../pages/Portfolio";
import AboutMe from "../pages/AboutMe";
import WackyWeka from "../pages/WackyWeka";
import GigFort from "../pages/GigFort";
import Kiwiburn from "../pages/Kiwiburn";
// Import Dependencies
import { Routes, Route, HashRouter } from "react-router-dom";

function Website() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/aboutme" element={<AboutMe />} />
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
