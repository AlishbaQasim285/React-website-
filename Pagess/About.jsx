// AppRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Men from "./Men";
import Women from "./Women";
// import NotFound from './NotFound';

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pagess/Men" element={<Men />} />
      <Route path="/Women" element={<Women />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Approutes;
