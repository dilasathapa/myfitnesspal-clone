import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import AddFood from "../../Pages/AddFood/AddFood";
import Food from "../../Pages/Food/Food";
import Reports from "../../Pages/Reports/Reports";
import Exercise from "../../Pages/Exercise/Exercise";
import AddExercise from "../../Pages/AddExercise/AddExercise";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/food" element={<Food />} />
        <Route path="/add_food" element={<AddFood />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/add_exercise" element={<AddExercise />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
