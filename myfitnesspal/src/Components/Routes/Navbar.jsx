import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserThunkActionCreator } from "../../Redux/action";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.setItem("login", JSON.stringify(false));
    localStorage.setItem("userImg", null);
    dispatch(logoutUserThunkActionCreator());
    navigate("/");
  };

  const auth = useSelector((data) => {
    return data.auth;
  });
  return (
    <>
      <div id="navbar-parent">
        <div id="navbar-header">
          <div id="img-myfitnesspal">
            <Link to="/home" id="img-myfitnesspal">
              {" "}
              <h1>
                myfitnesspal <sup>TM</sup>{" "}
              </h1>
            </Link>
          </div>
          <div id="navbar-topmost-header">
            <p>
              Hi, <span>{auth.userDetails.name}</span>
            </p>
            <FaUser className="fauser" />
            <FaEnvelope className="faenvelope" />

            <p>Help</p>
            <p>|</p>
            <p>Settings</p>
            <p>|</p>
            <p onClick={logoutUser}>Log Out</p>
            <p>|</p>
            <p>Follow Us: </p>
            <FaFacebookSquare className="fafacebook" />
            <FaTwitter className="fatwitter" />
          </div>
        </div>
        <div id="navigations">
          <div id="navigation-details">
            <button>
              {" "}
              <Link id="link-color" to="/home">
                MY HOME
              </Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color" to="/food">
                FOOD
              </Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color" to="/exercise">
                EXCERCISE
              </Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color" to="/reports">
                REPORTS
              </Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color" to="#">
                APPS
              </Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color" to="#">
                COMMUNITY
              </Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color" to="/blogpage">
                BLOG
              </Link>{" "}
            </button>
            <button>
              {" "}
              <Link id="link-color" to="#">
                PREMIUM
              </Link>{" "}
            </button>
          </div>
        </div>
        {/* <div id="navbar-bottom">
                    <div id="navbar-bottom-section">
                        <button> <Link id="link-color">Home</Link> </button>
                        <button> <Link id="link-color">Goals</Link> </button>
                        <button> <Link id="link-color">Check-In</Link> </button>
                        <button> <Link id="link-color">Mail</Link> </button>
                        <button> <Link id="link-color">Profile</Link> </button>
                        <button> <Link id="link-color">Friends</Link> </button>
                        <button> <Link id="link-color">Settings</Link> </button>
                    </div>

                </div> */}

        {/* <div className="navbar" >
                    <Link to='/'>Landing Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/home'>Home</Link>
                    <Link to='/profile'>Profile</Link>
                    <Link to='/food'>Food</Link>
                    <Link to='/blog'>Blog</Link>
                </div> */}
      </div>
    </>
  );
}

export { Navbar };
