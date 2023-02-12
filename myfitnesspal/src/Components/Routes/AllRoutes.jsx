import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Homepage/Home";
import Landing from "../Landing/Landing";

import Profile from "../Homepage/Profile";


import Start from "../Forms/Start";
import Name from "../Forms/Name";
import Goals from "../Forms/Goals";
import Steps from "../Forms/Steps";
import { Set ,Statments} from "../Forms/Steps";
import { Baseline } from "../Forms/Statement";
import { PersonaData1, PersonaData2,Login,Username } from "../Forms/PersonalData1";
import { Calorie } from "../Forms/PersonalData1";
import { NavbarChange } from "./Navbar-real";

const AllRoutes = () =>{


    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/' element={<Landing />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path='/start' element={<Start />}></Route>
                <Route path='/name' element={<Name />}></Route>
                <Route path='/goals' element={<Goals />}></Route>
                <Route path='/set' element={<Set />}></Route>  
                <Route path='/steps' element={<Steps />}></Route>  
                <Route path='/statments' element={<Statments />}></Route>
                <Route path='/baseline' element={<Baseline />}></Route>
                <Route path='/personadata1' element={<PersonaData1 />}></Route>
                <Route path='/personadata2' element={<PersonaData2 />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/username' element={<Username />}></Route>
                <Route path='/calorie' element={<Calorie />}></Route>
                <Route path="/changednavbar" element={<NavbarChange />}></Route>
            </Routes>
        </div>
    ) 
}

export default AllRoutes;
