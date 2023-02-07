import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Homepage/Home";
import Landing from "../Landing/Landing";

const AllRoutes = () =>{
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/' element={<Landing />}></Route>
            </Routes>
        </div>
    ) 
}

export default AllRoutes;