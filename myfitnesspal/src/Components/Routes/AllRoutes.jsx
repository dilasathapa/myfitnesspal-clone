import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Homepage/Home";
import Landing from "../Landing/Landing";
import Profile from "../Homepage/Profile";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/' element={<Landing />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </div>
    ) 
}

export default AllRoutes;

