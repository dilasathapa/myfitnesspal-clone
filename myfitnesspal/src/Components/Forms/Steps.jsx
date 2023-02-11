import React , {useState} from 'react'     //4
import { Link } from "react-router-dom";
import "./Start.css";
import "./Name.css";

function Set() {
  return (
    <div>
      <div id='head'>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
      </div>
      <div id='mainDivG'>
        <div id='steps_heading'>
        <h3>Great! You’ve just taken a big step on your journey.</h3><br/>
        <p>Health benefits of being more active include increasing your metabolism, keeping your joints healthy, and improving your mental outlook.</p>
        <br/><p>Now, let’s talk about your goal to increase your step count.</p>
        </div><br/>
        <div style={{marginTop: "400px"}}>
        <Link id='backbtn' to='/goals'><button>BACK</button></Link>
        <Link id='nextbtn' to='/Steps'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
  )
}

export default function Steps() { //5

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
      <div id='mainDivS'>
        <div id='steps_heading'>
        <h3>How many steps do you take per day now?</h3><br/>
        
        </div><br/>
        <div id='goal-opt'>
          <button>Less than 1,000</button>
          <button onClick={() => setClicked(!clicked)}
          style={{
            border: clicked ? "2px solid rgb(0, 102, 238)":'2px solid rgb(188, 188, 192)',
            border: hovered ? "2px solid rgb(89, 89, 92)":'2px solid rgb(188, 188, 192)',
            padding: '10px 20px',
            color: clicked ? 'rgb(0, 102, 238)' : 'black',
            fontWeight: clicked ?  "700" :  "500",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>1,000 to 3,000</button>
          <button>3,000 to 7,000</button>
          <button>More than 7,000</button>
          <button>I don't Know</button>
        </div><br/>
        <div id='stepbtn'>
        <Link id='backbtn' to='/set'><button>BACK</button></Link>
        <Link id='nextbtn' to='/statments'><button>NEXT</button></Link>
        </div>
      </div>
    </div>
  )
}

function Statments() { //6
    return (
      <div>
        <div id='head'>
          <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
        </div>
        <div id='mainDivS'>
          <div id='goal_heading'>
          <h3>You’re off to a great start!</h3><br/>
          <p>Up your step count with our walking plans to increase your metabolism, improve your mood, and more.</p>
          <br/>
          <p>Let’s get into the specifics so we can build your personalized plan.</p>
          </div><br/>
          <div>
          <Link id='backbtn' to='/steps'><button>BACK</button></Link>
          <Link id='nextbtn' to='/baseline'><button>NEXT</button></Link>
          </div>
        </div>
      </div>
    )
  }

  export {Set,Statments}


//Starting is the hardest part.
//Up your step count with our walking plans to increase your metabolism, improve your mood, and more.

//You’re off to a great start!
//Up your step count with our walking plans to increase your metabolism, improve your mood, and more.


//Nice! The average person walks 3,000 to 4,000 steps per day.
//Take it to the next level with our walking plans to increase your metabolism, improve your mood, and more.

// WOW! You’re a mover and a shaker.
//Try one of our more challenging walking plans to help you reach your step goal.

//You might want to try tracking your steps!
//Did you know that your smartphone has a built-in step tracker that seamlessly integrates with MyFitnessPal? Check it out to see your average steps per day.