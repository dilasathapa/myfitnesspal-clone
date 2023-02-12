import React from "react"
import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "50px",
};

function Navbar() {
    return(
        <div className = "navbar" >
            <Link to='/'>Landing Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/home'>Home</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/food'>Food</Link>
            <Link to='/blog'>Blog</Link>            
        </div>
    )
}

export default Navbar;
