import React, { useState } from "react"; //4
import { Link } from "react-router-dom";
import "./Start.css";
import "./Name.css";
import "./personalData.css";
import Landing from "../Landing/Landing";
import CountrySelect from "./Country";
import { useDispatch } from "react-redux";
import { loginUserThunkActionCreator } from "../../Redux/action";



const GenderSelect = () => {
  // const [selectedGender, setSelectedGender] = useState("");

  const handleChange = (e) => {
    // setSelectedGender(event.target.value);
    let selectedGender = e.target.value;
    localStorage.setItem("gender", selectedGender);
  };

  return (
    <select id="g_select" onChange={handleChange} placeholder="Select Gender">
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  );
};

const BirthDateInput = () => {
  const [birthDate, setBirthDate] = useState("");

  const handleChange = (event) => {
    setBirthDate(event.target.value);
  };

  return (
    <input
      id="birthData"
      type="date"
      value={birthDate}
      onChange={handleChange}
    />
  );
};

function PersonaData1() {
  return (
    <div>
      <div id="head">
        <Link to="/start">
          <img
            src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png"
            style={{ height: "90px" }}
          />
        </Link>
      </div>
      <div id="mainDivP">
        <div id="goal_heading">
          <h3 className="c">
            Please select which sex we should use to calculate your calorie
            needs.
          </h3>
          <br />
          <GenderSelect />
        </div>
        <br />
        <div>
          <h3 className="c">When were you born?</h3>
          <BirthDateInput />
        </div>
        <div>
          <h3 className="c">Where do you live?</h3>
          <CountrySelect />
        </div>
        <div>
          <Link id="backbtn" to="/baseline">
            <button>BACK</button>
          </Link>
          <Link id="nextbtn" to="/personadata2">
            <button>NEXT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function PersonaData2() {
  return (
    <div>
      <div id="head">
        <img
          src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png"
          style={{ height: "90px" }}
        />
      </div>
      <div id="mainDivP2">
        <div id="PD2_heading">
          <h3>How tall are you?</h3>
          <div className="ht_div">
            <input id="ht" placeholder="Height (feet)" />
            <input id="ht" placeholder="Height (inches)" />
          </div>
        </div>
        <div>
          <h3>How much do you weigh?</h3>
          <p>It's OK to estimate. You can update this later.</p>
          <input id="ht" placeholder="Current weight" />
        </div>
        <div>
          <h3>What's your goal weight?</h3>
          <p>
            Don't worry. This doesn't affect your daily calorie goal and you can
            always change it later.
          </p>
          <input id="ht" placeholder="Goal weight" />
        </div>
        <div>
          <Link id="backbtn" to="/personadata1">
            <button>BACK</button>
          </Link>
          <Link id="nextbtn" to="/login">
            <button>NEXT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const changeData = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const saveUserData = () => {
    console.log(loginData.email);
    console.log(loginData.password);

    localStorage.setItem("email", loginData.email);
    localStorage.setItem("password", loginData.password);
  };

  return (
    <div>
      <div id="head">
        <img
          onClick={<Landing />}
          src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png"
          style={{ height: "90px" }}
        />
      </div>
      <div id="mainDivL">
        <div id="cover">
          <h3>Almost there! Create your account.</h3>
          <input
            type={"text"}
            name="email"
            placeholder="Email address"
            onChange={changeData}
          />
          <input
            type={"password"}
            name="password"
            placeholder="Create a password"
            onChange={changeData}
          />
          <br />
          <br />
          <p>
            By signing up for MyFitnessPal, you are agreeing to our Privacy
            Policy and Terms.
          </p>
          <div id="loginbtn">
            <Link id="continue" to="/username">
              <button onClick={saveUserData}>CONTINUE</button>
            </Link>
          </div>
          <p id="alt-text">or</p>
          <div id="alt-loginbtn">CONTINUE WITH FACEBOOK</div>
          <p>We will never post anything without your permission</p>
        </div>
      </div>
    </div>
  );
}

function Username() {
  return (
    <div>
      <div id="head">
        <img
          src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png"
          style={{ height: "90px" }}
        />
      </div>
      <div id="mainDivG">
        <div id="PD2_heading">
          <h3>Create a username.</h3>
          <br />
          <input id="username" placeholder="Create a username" />
        </div>
        <br />
        <div>
          <Link id="backbtn" to="/login">
            <button>BACK</button>
          </Link>
          <Link id="nextbtn" to="/calorie">
            <button>Finish</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Calorie() {
  const dispatch = useDispatch();
  const loginUser = () => {
    localStorage.setItem("login", JSON.stringify(true));
    const newUser = {
      name: localStorage.getItem("name") || " ",
      gender: localStorage.getItem("gender") || " ",
      email: localStorage.getItem("email") || " ",
      password: localStorage.getItem("password") || " ",
    };
    dispatch(loginUserThunkActionCreator(newUser));
  };
  return (
    <div>
      <div id="head">
        <img
          src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png"
          style={{ height: "90px" }}
        />
      </div>
      <div id="mainDivL">
        <div id="goal_heading">
          <h3 id="congo_blue">Congratulations! </h3>
          <h4>Your daily net calorie goal is:</h4>
          <h1>2,860</h1>
        </div>
        <br />
        <div>
          <Link id="explorebtn" to="/home">
            <button onClick={loginUser}>EXPLORE MYFITNESSPAL</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { PersonaData1, PersonaData2, Login, Username, Calorie };
