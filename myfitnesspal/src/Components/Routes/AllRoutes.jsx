import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import AddFood from "../../Pages/AddFood/AddFood";
import Food from "../../Pages/Food/Food";
import Reports from "../../Pages/Reports/Reports";
import Exercise from "../../Pages/Exercise/Exercise";
import AddExercise from "../../Pages/AddExercise/AddExercise";
import Landing from "../Landing/Landing";

import Profile from "../Homepage/Profile";


import Start from "../Forms/Start";
import Name from "../Forms/Name";
import Goals from "../Forms/Goals";
import Steps from "../Forms/Steps";
import Statments from "../Forms/Statement";
import { Stress,Baseline } from "../Forms/Statement";
import { PersonaData1, PersonaData2,Login,Username } from "../Forms/PersonalData1";
import { Calorie } from "../Forms/PersonalData1";
import { NavbarChange } from "./Navbar-real";

const AllRoutes = () =>{
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />}></Route>
            </Routes>
        </div>
    ) 
}

export default AllRoutes;