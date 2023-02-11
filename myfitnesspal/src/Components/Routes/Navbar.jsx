import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "50px",
};

function Navbar() {
  return (
    <div className="navbar" style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/food">Food</Link>
      <Link to="/exercise">Exercise</Link>
    </div>
  );
}

export default Navbar;
