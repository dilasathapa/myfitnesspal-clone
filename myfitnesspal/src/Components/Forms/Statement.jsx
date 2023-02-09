import React from 'react'     //5
import { Link } from "react-router-dom";
import "./Start.css";
import "./Name.css";

export default function Statments() {
  return (
    <div>
      <div id='head'>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
      </div>
      <div id='mainDivG'>
        <div id='goal_heading'>
        <h3>Thanks dfgh! Now for your Statments.</h3><br/>
        <p>Select up to 3 that are important to you, including one weight goal.</p>
        </div><br/>
        <div>
        <Link id='backbtn' to='/steps'><button>BACK</button></Link>
        <Link id='nextbtn' to='/stress'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
  )
}

function Stress (){ //6
    return(
        <div>
      <div id='head'>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
      </div>
      <div id='mainDivG'>
        <div id='goal_heading'>
        <h3>Thanks dfgh! Now for your stress.</h3><br/>
        <p>Select up to 3 that are important to you, including one weight goal.</p>
        </div><br/>
        <div>
        <Link id='backbtn' to='/statments'><button>BACK</button></Link>
        <Link id='nextbtn' to='/baseline'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
    )
}

function Baseline (){  //7
    return(
        <div>
      <div id='head'>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
      </div>
      <div id='mainDivG'>
        <div id='goal_heading'>
        <h3>Thanks dfgh! Now for your baseline Activity.</h3><br/>
        <p>Select up to 3 that are important to you, including one weight goal.</p>
        </div><br/>
        <div>
        <Link id='backbtn' to='/stress'><button>BACK</button></Link>
        <Link id='nextbtn' to='/personadata1'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
    )
}

export {Stress , Baseline};