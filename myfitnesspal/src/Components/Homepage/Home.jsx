import React from "react";
import "./Home.css";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./../Routes/Navbar.css";

export default function Home() {
  const breakfast = useSelector((data) => {
    return data.Breakfast;
  });
  const lunch = useSelector((data) => {
    return data.Lunch;
  });
  const dinner = useSelector((data) => {
    return data.Dinner;
  });
  const snacks = useSelector((data) => {
    return data.Snacks;
  });
  const cardio = useSelector((data) => {
    return data.cardio;
  });

  const auth = useSelector((data) => {
    return data.auth;
  });

  const calTotalCalories = () => {
    return (
      breakfast.reduce((acc, el) => {
        return acc + el.calories;
      }, 0) +
      lunch.reduce((acc, el) => {
        return acc + el.calories;
      }, 0) +
      dinner.reduce((acc, el) => {
        return acc + el.calories;
      }, 0) +
      snacks.reduce((acc, el) => {
        return acc + el.calories;
      }, 0)
    );
  };

  const calTotalBurned = () => {
    return cardio.reduce((acc, el) => {
      return acc + el.calories_burned;
    }, 0);
  };


  const profileImg = JSON.parse(localStorage.getItem("userImg"))|| null;

  return (
    <>
      <div className="parent">
        <div id="navbar-bottom">
          <div id="navbar-bottom-section">
            <button>
              {" "}
              <Link id="link-color">Home</Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color">Goals</Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color">Check-In</Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color">Mail</Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color" to="/profile">
                Profile
              </Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color">Friends</Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color">Settings</Link>{" "}
            </button>
          </div>
        </div>
        <div id="two-bars">
          <div id="left-bar">
            <div id="top-header">
              <h2>Your Daily Summary</h2>
              <div>
                <h2>1</h2>
                <div>
                  <p>DAY</p>
                  <p>STREAK</p>
                </div>
                
              </div>
            </div>
            <div id="calculator">
              <div className="upload-img">
                
                {profileImg && <img src={profileImg} style={{width:"100%", height:"180px"}}/> }
                {!profileImg && <p>No photo</p> }
                {!profileImg && <p>provided</p> }
                
                <h4>
                {!profileImg && <Link to="/profile" style={{ textDecoration: "none" }}>
                    Upload Photo
                  </Link> }
                  
                </h4>
              </div>
              <div className="calculations">
                <div id="calculations-top">
                  <div>
                    <p>Calories Remaining</p>
                    <h1>{2860 - (calTotalCalories() - calTotalBurned())}</h1>
                  </div>
                  <div>
                    <button>
                      <Link
                        to="/exercise"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Add Excercise
                      </Link>
                    </button>

                    <button>
                      <Link
                        to="/food"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Add Food
                      </Link>
                    </button>
                  </div>
                </div>
                <div id="calculations-bottom">
                  <div>
                    <p>2860</p>
                    <p>GOAL</p>
                  </div>
                  <div>
                    <p></p>
                  </div>
                  <div>
                    <p>{calTotalCalories()}</p>
                    <p>FOOD</p>
                  </div>
                  <div>
                    <p>-</p>
                  </div>
                  <div>
                    <p>{calTotalBurned()}</p>
                    <p>EXCERCISE</p>
                  </div>
                  <div>
                    <p>=</p>
                  </div>
                  <div>
                    <p>{calTotalCalories() - calTotalBurned()}</p>
                    <p>NET</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="scroll-bar">
              <div id="lbs-gained">
                <div>
                  <p>
                    <span>{(calTotalCalories() - calTotalBurned())/100}</span> lbs{" "}
                  </p>
                  <p>GAINED</p>
                </div>
                <div id="clipboard-icon">
                  <FaClipboardList className="clip-icon" />
                </div>
              </div>
              <div id="bar">
                {/* <input type="range" style={{color}}/> */}
                <progress
                  id="progress"
                  max="20"
                  value={(calTotalCalories() - calTotalBurned())/100}
                  style={{ height: "30px", accentColor: "rgb(133,196,0)" }}
                ></progress>
              </div>

              {/* <div id='bar'
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "25%" }}>
              </div> */}
            </div>
            <div id="confirm-mail">
              <div>
                <img
                  src="https://seeklogo.com/images/M/mail-icon-logo-28FE0635D0-seeklogo.com.png"
                  alt="img-mail"
                />
              </div>
              <div>
                <h3>Don't forget to verify your email.</h3>
                <p>We sent an email to : </p>
                <p>{auth.userDetails.email}</p>
              </div>
              <div>
                <button>RESEND EMAIL</button>
                <p>Or, change your email address</p>
              </div>
            </div>
            <div id="news-feed">
              <div>
                <h3>NEWS FEED</h3>
              </div>
              <div>
                <textarea
                  placeholder="What's on your mind?"
                  id="textarea"
                  rows="3"
                ></textarea>
                <div>
                  <button>Share</button>
                </div>
              </div>
            </div>
          </div>
          <div id="right-bar">
            <div>
              <h5>Recent Forum Topics</h5>
              <p>View All</p>
              <hr />
              <ul>
                <li>Down 10 pounds this month!</li>
                <li>
                  update Stronglifts and kettlebell transformation! Pictures!
                </li>
                <li>Achieved my weight loss goal.</li>
                <li>Down 62 pounds photo attached</li>
                <li>Intermittent fasting </li>
              </ul>
            </div>
            <div>
              <div>
                <h1>
                  myfitnesspal <sup>TM</sup>
                </h1>
                <button>BLOG</button>
              </div>
              <div>
                <p>View All</p>
                <hr />
                <p>The Health Benefits of Chocolate</p>
                <p>
                  Not all chocolate is created equal. Here’s how to satisfy your
                  craving and enjoy some health benefits, too.
                </p>
                <p>Read More</p>
                <p>5 Strategies to Boost Heart Health</p>
                <p>
                  Our registered dietitian is sharing 5 strategies for a
                  heart-healthy diet to help prevent cardiovascular disease.
                </p>
                <p>Read More</p>
                <p>These 10 Sugar Swaps Are Sure to Boost Heart Health</p>
                <p>
                  February is Heart Health month. While many wish to cut back on
                  sweets, you might not know that cutting back is good for your
                  heart, too.
                </p>
                <p>Read More</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footStyle">
          <div className="navbar" style={{ marginBottom: "10px" }}>
            <Link style={lin} to="/about">
              ABOUT
            </Link>
            <Link style={lin} to="/food">
              FOOD
            </Link>
            <Link style={lin} to="/exercise">
              EXERCISE
            </Link>
            <Link style={lin} to="/apps">
              APPS
            </Link>
            <Link style={lin} to="/community">
              COMMUNITY
            </Link>
            <Link style={lin} to="/blog">
              BLOG
            </Link>
            <Link style={lin} to="/premium">
              PREMIUM
            </Link>
          </div>
          <div>
            <Link style={fin} to="/calorie">
              Calorie Counter
            </Link>
            <Link style={fin} to="/blog">
              Blog
            </Link>
            <Link style={fin} to="/terms">
              Terms
            </Link>
            <Link style={fin} to="/privacy">
              Privacy
            </Link>
            <Link style={fin} to="/contact">
              Contact Us
            </Link>
            <Link style={fin} to="/api">
              API
            </Link>
            <Link style={fin} to="/jobs">
              Jobs
            </Link>
            <Link style={fin} to="/feedback">
              Feedback
            </Link>
            <Link style={fin} to="/community">
              Community Guidelines
            </Link>
          </div>
          <div>
            <Link style={fin} to="/cookie">
              Cookie Preferences
            </Link>
            <Link style={fin} to="/ad">
              Ad Choices
            </Link>
            <Link style={fin} to="/personalinfo">
              Do Not Sell My Personal Information
            </Link>
          </div>
          <div>
            <p style={{ fontSize: "11px", paddingBottom: "10px" }}>
              © 2023 MyFitnessPal, Inc.
            </p>
            {/* <br/> */}
          </div>
        </div>
      </div>
    </>
  );
}

const lin = {
  textDecoration: "none",
  marginRight: "10px",
  padding: "0px 16px",
  fontWeight: "700",
  color: "black",
};

const fin = {
  marginRight: "10px",
  fontSize: "11px",
  padding: "2px 2px",
  lineHeight: "18px",
  textDecoration: "none",
  color: "#0066EE",
};
