   //5
import { Link } from "react-router-dom";
import "./Start.css";
import "./Name.css";
import { useState } from "react";



function Baseline (){  //7

  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);


  
const handleMouseEnter = () => {
  setHovered(true);
};

const handleMouseLeave = () => {
  setHovered(false);
};

    return(
        <div>
      <div id='head'>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
      </div>
      <div id='mainDivB'>
        <div id='goal_heading'>
        <h3>What is your baseline activity level?</h3><br/>
        <p>Not including workouts–we count that separately</p>
        </div><br/>
        <div id='goal-opt'>
          <button onClick={() => setClicked(!clicked)}
          style={{
            border: clicked ? "2px solid rgb(0, 102, 238)":'2px solid rgb(188, 188, 192)',
            border: hovered ? "2px solid rgb(89, 89, 92)":'2px solid rgb(188, 188, 192)',
            padding: '10px 20px',
            color: clicked ? 'rgb(0, 102, 238)' : 'black',
            fontWeight: clicked ?  "700" :  "500",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>Not Very Active</button>
          <button>Lightly Active</button>
          <button>Active</button>
          <button>Very Active</button>
        </div><br/>
        <div>
        <Link id='backbtn' to='/statments'><button>BACK</button></Link>
        <Link id='nextbtn' to='/personadata1'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
    )
}

export {Baseline};