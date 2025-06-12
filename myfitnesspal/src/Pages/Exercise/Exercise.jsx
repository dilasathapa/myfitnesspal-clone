import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Exercise.module.css";
import { removeExerciseThunkActionCreator } from "../../Redux/action";
import { useEffect, useState } from "react";
import ExNote from "./ExNote";
import ExDate from "./ExDate";
import "../../Components/Routes/Navbar.css"

export default function Exercise() {
  const cardio = useSelector((data) => {
    return data.cardio;
  });

  console.log(cardio);
  const strength = useSelector((data) => {
    return data.strength_training;
  });
  console.log(strength);
 

  const totMinDaily = () => {
    return (
      cardio.reduce((acc, el) => {
        return acc + el["minutes"];
      }, 0)
    )
  }
  const totCalDaily = () => {
    return (
      cardio.reduce((acc, el) => {
        return acc + el["calories_burned"];
      }, 0)
    )
  }

  // let totMinDaily = 0
  // let totMinWeek = 0
  // let totCalDaily = 0
  // let totCalWeek = 0;



  const dispatch = useDispatch();

  const deleteExercise = (type, id) => {
    dispatch(removeExerciseThunkActionCreator(type, id));

    if(type==='cardio'){
      localStorage.setItem(type,JSON.stringify(cardio.filter((el) => {
        return el.id !== id;
    })))
    }else if(type==="strength"){
      localStorage.setItem(type,JSON.stringify(strength.filter((el) => {
        return el.id !== id;
    })))
    }
   

  };

  return (
    <>
      <div id="navbar-bottom">
        <div id="navbar-bottom-section">
          <button> <Link id="link-color">Exercise Diary</Link> </button>
          <button> <Link id="link-color">Database</Link> </button>
          <button> <Link id="link-color">My Exercises</Link> </button>
          
          <button> <Link id="link-color">Settings</Link> </button>
        </div>

      </div>

      <div className={styles.Exercise}>
        <div className={styles.mainDiv}>
          <div className={styles.ex_ads}>
            <img
              src="https://tpc.googlesyndication.com/simgad/3928362859200258258"
              alt="ad"
              className={styles.ads}
            />
          </div>
          {/* <div className={styles.calender}>
          <h4>
            Your food diary for: <input type="date" name="date" id="date" />
          </h4>
        </div> */}
        <br />
          <ExDate></ExDate>
          <br />
          <hr />
          <br />
          <div className={styles.exerciseDiv}>
            <table className={styles.Table}>
              <thead>
                <tr>
                  <th>Cardiovascular</th>
                  <th>Minutes</th>
                  <th>Calories Burned</th>
                </tr>
              </thead>
              <tbody>
                {cardio.map((el) => {

                  return (
                    <tr key={el.id} className={styles.itemRow}>
                      <td>{el.title}</td>
                      <td>{el.minutes}</td>
                      <td>{el.calories_burned}</td>
                      <td>
                        <i
                          class="fa-solid fa-circle-minus"
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={() => {
                            deleteExercise("cardio", el.id);
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td>
                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <h4 style={{ margin: "0",fontSize:'15px'}}>
                        Daily Total /{" "}
                        <span style={{ color: "#00548f" }}>Goal</span>
                      </h4>
                    </div>
                  </td>
                  <td style={{ backgroundColor: '#f6f6f6' }}>

                    <h4 style={{ margin: "0",fontSize:'15px' }}>
                      <span>{totMinDaily()}</span>
                      &nbsp;/&nbsp;
                      <span style={{ color: "#00548f" }}>30</span>
                    </h4>

                  </td>

                  <td style={{ backgroundColor: '#f6f6f6' }}>

                    <h4 style={{ margin: "0",fontSize:'15px' }}>
                      <span>{totCalDaily()}</span>
                      &nbsp;/&nbsp;
                      <span style={{ color: "#00548f" }}>200</span>
                    </h4>

                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>

                    <h4 style={{ margin: "0",fontSize:'15px' }}>
                      Weekly Total /{" "}
                      <span style={{ color: "#00548f" }}>Goal</span>
                    </h4>

                  </td>
                  <td style={{ backgroundColor: '#f6f6f6' }}>

                    <h4 style={{ margin: "0" ,fontSize:'15px' }}>
                      <span>{totMinDaily()}</span>
                      &nbsp;/&nbsp;
                      <span style={{ color: "#00548f" }}>180</span>
                    </h4>

                  </td>

                  <td style={{ backgroundColor: '#f6f6f6' }}>

                    <h4 style={{ margin: "0",fontSize:'15px' }}>
                      <span>{totCalDaily()} </span>
                      &nbsp;/&nbsp;
                      <span style={{ color: "#00548f" }}>1200</span>
                    </h4>

                  </td>
                </tr>
                <br />
                <hr />
                <br />
                <tr className={styles.mealTotalRow}>
                  <td>
                    <Link to={`/add_exercise?type=cardio`} style={{ textDecoration: 'none', color: '#0072bf', fontWeight: 'bold' }}>Add Exercise</Link> &nbsp; | &nbsp;
                    Quick Tools
                  </td>
                </tr>
              </tbody>
            </table>

            <table className={styles.Table}>
              <thead>
                <tr>
                  <th>Strength Training</th>
                  <th>Sets</th>
                  <th>Reps</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                {strength.map((el) => {
                  return (
                    <tr key={el.id} className={styles.itemRow}>
                      <td>{el.title}</td>
                      <td>{el.sets}</td>
                      <td>{el.reps}</td>
                      <td>{el.weight}</td>
                      <td>
                        <i
                          class="fa-solid fa-circle-minus"
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={() => {
                            deleteExercise("strength", el.id);
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}

                <tr className={styles.mealTotalRow}>
                  <td>
                    <Link to={`/add_exercise?type=strength`} style={{ textDecoration: 'none', color: '#0072bf', fontWeight: 'bold' }}>Add Exercise</Link> &nbsp; | &nbsp;
                    Quick Tools
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <hr />
            <br />

            <br />
            <br />
            <ExNote></ExNote>
          </div>
          <button className={styles.reportBtn}>
            <Link to="/reports" style={{textDecoration:"none", color:"white"}}>View Full Report (Printable)</Link>
          </button>
        </div>
        <div className={styles.sideDiv}>
          <img
            src="https://tpc.googlesyndication.com/simgad/17903055369230987743"
            alt="ad"
            className={styles.ads}
          />
        </div>
      </div>
      <div className="footStyle">
      <div className = "navbar" style={{marginBottom:"10px"}}>
            <Link style={lin} to='/about'>ABOUT</Link>
            <Link style={lin} to='/food'>FOOD</Link>
            <Link style={lin} to='/exercise'>EXERCISE</Link>
            <Link style={lin} to='/apps'>APPS</Link>
            <Link style={lin} to='/community'>COMMUNITY</Link>
            <Link style={lin} to='/blog'>BLOG</Link>            
            <Link style={lin} to='/premium'>PREMIUM</Link>            
        </div>
        <div>
          <Link style={fin} to='/calorie'>Calorie Counter</Link>
          <Link style={fin} to='/blog'>Blog</Link>
          <Link style={fin} to='/terms'>Terms</Link>
          <Link style={fin} to='/privacy'>Privacy</Link>
          <Link style={fin} to='/contact'>Contact Us</Link>
          <Link style={fin} to='/api'>API</Link>
          <Link style={fin} to='/jobs'>Jobs</Link>
          <Link style={fin} to='/feedback'>Feedback</Link>
          <Link style={fin} to='/community'>Community Guidelines</Link>
        </div>
        <div>
          <Link style={fin} to='/cookie'>Cookie Preferences</Link>
          <Link style={fin} to='/ad'>Ad Choices</Link>
          <Link style={fin} to='/personalinfo'>Do Not Sell My Personal Information</Link>
        </div>
        <div>
          <p style={{fontSize: "11px" , paddingBottom:"10px"}}>© 2023 MyFitnessPal, Inc.</p>
          {/* <br/> */}
        </div>
      </div>
      

    </>
  );
}
const lin = {
  textDecoration: "none",
  marginRight: "10px",
  padding:"0px 16px",
  fontWeight: "700",
  color: "black"
}

const fin = {
  marginRight: "10px",
  fontSize: "11px",
  padding:"2px 2px",
  lineHeight: "18px",
  textDecoration: "none",
  color: "#0066EE"
}
