import React from 'react'
import { Link } from "react-router-dom";
import Name from './Name';

export default function Start() {
  return (
    <div>
      <div style={header}>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
        <Link style={{textDecoration:"none",color: "black"}} to='/start'><h4>LOG IN</h4></Link>
      </div>
      <div style={mainDiv}>
        <h2>Welcome! Let’s customize MyFitnessPal for your goals.</h2>
        <Link style={startButton} to='/Name'>CONTINUE</Link>
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
const mainDiv ={
    width: "25%",
    margin: "auto",
    // border: "1px solid red",
    padding: "150px 10px",
    height: "300px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    borderRadius: "15px"
}

var startButton = {
    backgroundColor: "rgb(0, 102, 238)",
    padding: "12px 40px",
    marginRight: "10px",
    marginLeft: "10px",
    border: "None",
    borderRadius: "4px",
    letterSpacing: "0.015625rem",
    color: "rgb(255, 255, 255)",
    fontWeight: "500",
    fontSize: "0.9375rem",
    fontFamily: "Inter, Helvetica, Arial, -apple-system, sans-serif",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    textDecoration:"none"
}