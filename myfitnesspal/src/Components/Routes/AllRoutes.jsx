import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Homepage/Home";
import Landing from "../Landing/Landing";
import Profile from "../Homepage/Profile";
import { NavbarChange } from "./Navbar-real";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/' element={<Landing />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/changednavbar" element={<NavbarChange />}></Route>
            </Routes>
        </div>
    )
}

export default AllRoutes;