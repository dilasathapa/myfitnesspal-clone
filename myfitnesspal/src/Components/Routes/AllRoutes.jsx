import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import AddFood from "../../Pages/AddFood/AddFood";
import Food from "../../Pages/Food/Food";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/food" element={<Food />} />
        <Route path="/add_food" element={<AddFood />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
