import React from "react";
import { Route, Routes } from "react-router-dom";
import Enterprise from "./components/Company";
import Home from "./components/Home";
import Individuals from "./components/Associates";
import Teams from "./components/Members";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
};

export default Routing;
