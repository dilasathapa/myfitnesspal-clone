import React from 'react'     //4
import { Link } from "react-router-dom";
import "./Start.css";
import "./Name.css";

export default function Steps() {
  return (
    <div>
      <div id='head'>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
      </div>
      <div id='mainDivG'>
        <div id='goal_heading'>
        <h3>Thanks dfgh! Now for your Steps.</h3><br/>
        <p>Select up to 3 that are important to you, including one weight goal.</p>
        </div><br/>
        <div>
        <Link id='backbtn' to='/goals'><button>BACK</button></Link>
        <Link id='nextbtn' to='/statments'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
  )
}
