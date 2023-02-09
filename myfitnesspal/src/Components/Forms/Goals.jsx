import React from 'react'     //3
import { Link } from "react-router-dom";
import "./Start.css";
import "./Name.css";

export default function Goals() {
  return (
    <div>
      <div id='head'>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
      </div>
      <div id='mainDivG'>
        <div id='goal_heading'>
        <h3>Thanks dfgh! Now for your goals.</h3><br/>
        <p>Select up to 3 that are important to you, including one weight goal.</p>
        </div><br/>
        <div id='goal-opt'>
          <button>Lose Weight</button>
          <button>Maintain Weight</button>
          <button>Gain Weight</button>
          <button>Gain Muscle</button>
          <button>Modify my diet</button>
          <button>Manage stress</button>
          <button>Increase step count</button>
        </div><br/>
        <div>
        <Link id='backbtn' to='/name'><button>BACK</button></Link>
        <Link id='nextbtn' to='/steps'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
  )
}
