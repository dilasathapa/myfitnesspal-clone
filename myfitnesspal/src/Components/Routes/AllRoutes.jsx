import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Homepage/Home";

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