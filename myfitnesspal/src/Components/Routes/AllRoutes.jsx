import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Homepage/Home";
import Landing from "../Landing/Landing";
import Start from "../Forms/Start";
import Name from "../Forms/Name";
import Goals from "../Forms/Goals";
import Steps from "../Forms/Steps";
import Statments from "../Forms/Statement";
import { Stress,Baseline } from "../Forms/Statement";
import { PersonaData1, PersonaData2,Login,Username } from "../Forms/PersonalData1";
import { Calorie } from "../Forms/PersonalData1";

const AllRoutes = () =>{
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/' element={<Landing />}></Route>
                <Route path='/start' element={<Start />}></Route>
                <Route path='/name' element={<Name />}></Route>
                <Route path='/goals' element={<Goals />}></Route>
                <Route path='/steps' element={<Steps />}></Route>
                <Route path='/statments' element={<Statments />}></Route>
                <Route path='/stress' element={<Stress />}></Route>
                <Route path='/baseline' element={<Baseline />}></Route>
                <Route path='/personadata1' element={<PersonaData1 />}></Route>
                <Route path='/personadata2' element={<PersonaData2 />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/username' element={<Username />}></Route>
                <Route path='/calorie' element={<Calorie />}></Route>
            </Routes>
        </div>
    ) 
}

export default AllRoutes;

