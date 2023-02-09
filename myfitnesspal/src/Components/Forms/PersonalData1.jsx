import React from 'react'     //4
import { Link } from "react-router-dom";
import "./Start.css";
import "./Name.css";

function PersonaData1() {
  return (
    <div>
      <div id='head'>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
      </div>
      <div id='mainDivG'>
        <div id='goal_heading'>
        <h3>PersonaData1</h3><br/>
        <p>Select up to 3 that are important to you, including one weight goal.</p>
        </div><br/>
        <div>
        <Link id='backbtn' to='/baseline'><button>BACK</button></Link>
        <Link id='nextbtn' to='/personadata2'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
  )
}

function PersonaData2() {
  return (
    <div>
      <div id='head'>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
      </div>
      <div id='mainDivG'>
        <div id='goal_heading'>
        <h3>PersonaData2</h3><br/>
        <p>Select up to 3 that are important to you, including one weight goal.</p>
        </div><br/>
        <div>
        <Link id='backbtn' to='/personadata1'><button>BACK</button></Link>
        <Link id='nextbtn' to='/login'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
  )
}

function Login() {
  return (
    <div>
      <div id='head'>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
      </div>
      <div id='mainDivG'>
        <div id='goal_heading'>
        <h3>Login</h3><br/>
        <p>Select up to 3 that are important to you, including one weight goal.</p>
        </div><br/>
        <div>
        <Link id='backbtn' to='/personadata2'><button>BACK</button></Link>
        <Link id='nextbtn' to='/username'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
  )
}

function Username() {
  return (
    <div>
      <div id='head'>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
      </div>
      <div id='mainDivG'>
        <div id='goal_heading'>
        <h3>Username</h3><br/>
        <p>Select up to 3 that are important to you, including one weight goal.</p>
        </div><br/>
        <div>
        <Link id='backbtn' to='/login'><button>BACK</button></Link>
        <Link id='nextbtn' to='/calorie'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
  )
}

function Calorie () {
  return (
    <div>
      <div id='head'>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
      </div>
      <div id='mainDivG'>
        <div id='goal_heading'>
        <h3>calorie </h3><br/>
        <h2>Congratulations!</h2>
        </div><br/>
        <div>
        <Link id='backbtn' to='/username'><button>BACK</button></Link>
        <Link id='nextbtn' to='/home'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
  )
}

export {PersonaData1, PersonaData2,Login,Username,Calorie};