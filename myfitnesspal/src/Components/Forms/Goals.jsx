import React, {useState} from 'react'     //3
import { Link } from "react-router-dom";
import "./Start.css";
import "./Name.css";

export default function Goals() {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);


  
const handleMouseEnter = () => {
  setHovered(true);
};

const handleMouseLeave = () => {
  setHovered(false);
};

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
          <button onClick={() => setClicked(!clicked)}
          style={{
            border: hovered ? "2px solid rgb(89, 89, 92)":'2px solid rgb(188, 188, 192)',
            border: clicked ? "2px solid rgb(0, 102, 238)":'2px solid rgb(188, 188, 192)',
            padding: '10px 20px',
            color: clicked ? 'rgb(0, 102, 238)' : 'black',
            fontWeight: clicked ?  "700" :  "500",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >Lose Weight</button>

          <button id='myButton'>Maintain Weight</button>
          <button>Gain Weight</button>
          <button>Gain Muscle</button>
          <button>Modify my diet</button>
          <button>Manage stress</button>
          <button>Increase step count</button>
        </div><br/>
        <div>
        <Link id='backbtn' to='/name'><button>BACK</button></Link>
        <Link id='nextbtn' to='/set'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
  )
}
