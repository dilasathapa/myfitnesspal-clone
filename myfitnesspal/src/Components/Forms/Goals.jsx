import React from 'react'
import { Link } from "react-router-dom";

export default function Goals() {
  return (
    <div>
      <div style={header}>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
        <Link style={{textDecoration:"none",color: "black"}} to='/start'><h4>LOG IN</h4></Link>
      </div>
      <div style={{}}>
        <h4>Now for your goals.</h4>
        <input placeholder='First Name'/>
      </div>
    </div>
  )
}

var header = {
    display: "flex",
    height: "75px",
    justifyContent: "space-around",
    // boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
    marginBottom: "50px"
}