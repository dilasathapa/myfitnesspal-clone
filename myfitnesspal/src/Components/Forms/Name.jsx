import React, { useState } from "react"; //2
import { Link } from "react-router-dom";
import "./Start.css";
import "./Name.css";

export default function Name() {
  const [name, setName] = useState("");
  return (
    <div>
      <div id="head">
        <img
          src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png"
          style={{ height: "90px" }}
        />
      </div>
      <div id="mainDiv">
        <div id="mainDiv-top">
          <h3>What’s your first name?</h3>
          <br />
          <p>We’re happy you’re here.</p>
          <p>Let’s get to know a little about you.</p>
          <input
            placeholder="First Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <Link id="backbtn" to="/start">
            <button>BACK</button>
          </Link>
          <Link id="nextbtn" to="/goals">
            <button
              onClick={() => {
                localStorage.setItem("name", name);
              }}
            >
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
