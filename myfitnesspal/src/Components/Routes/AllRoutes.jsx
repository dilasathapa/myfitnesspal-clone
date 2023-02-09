import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Homepage/Home";
import Landing from "../Landing/Landing";
import Start from "../Forms/Start";
import Name from "../Forms/Name";
const AllRoutes = () =>{
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/' element={<Landing />}></Route>
                <Route path='/start' element={<Start />}></Route>
                <Route path='/name' element={<Name />}></Route>
            </Routes>
        </div>
    ) 
}

export default AllRoutes;

