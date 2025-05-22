import React from "react";
import Header1 from "./Components2/Header1";
import Header from "./Components2/Header";
import Carosel from "./Components2/Carosel";
import Cate from "./Components2/Cate";
import Cards from "./Components2/Cards";
import Testimonial from "./Components2/Testimonial";
import Products from "./Components2/Products";
import Latestnewz from "./Components2/Latestnewz";
import Icons from "./Components2/Icons";
import Footer from "./Components2/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pagess/Home";
import Men from "./Pagess/Men";
import Women from "./Pagess/Women";
import BabyCollection from "./Pagess/BabyCollection";
import About from "./Pagess/About";
import Contact from "./Pagess/Contact";
import Blog from "./Pagess/Blog";

const App = () => {
  return (
    <>
      <Header1 />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/baby-collection" element={<BabyCollection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
      <Carosel />
      <Cate />
      <Cards />
      <Testimonial />
      <Products />
      <Latestnewz />
      <Icons />

      <Footer />
    </>
  );
};

export default App;
