import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Exercise.module.css";
import { removeExerciseThunkActionCreator } from "../../Redux/action";
import { useEffect, useState } from "react";
import ExNote from "./ExNote";
import ExDate from "./ExDate";

export default function Exercise() {
  const cardio = useSelector((data) => {
    return data.cardio;
  });

  console.log(cardio);
  const strength = useSelector((data) => {
    return data.strength_training;
  });
  console.log(strength);
  useEffect(()=>{

  },[])

  const carMinTotal=()=>{
    return (
      cardio.reduce((acc,el)=>{
        return acc+el["minutes"];
      },0)
    )
  }
  const carCalTotal=()=>{
    return (
      cardio.reduce((acc,el)=>{
        return acc+el["calories_burned"];
      },0)
    )
  }

  let totMinDaily=0
  let totMinWeek=0
  let totCalDaily=0
  let totCalWeek=0;
  

  console.log(carCalTotal())

  const dispatch = useDispatch();

  const deleteExercise = (type, id) => {
    dispatch(removeExerciseThunkActionCreator(type, id));
  };

  return (
    <div className={styles.Exercise}>
      <div className={styles.mainDiv}>
        <div>
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
        <ExDate></ExDate>
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
                    <h4 style={{ margin: "0" }}>
                      Daily Total /{" "}
                      <span style={{ color: "#00548f" }}>Goal</span>
                    </h4>
                  </div>
                </td>
                <td style={{backgroundColor:'#f6f6f6'}}>
                
                    <h4 style={{ margin: "0" }}>
                      <span>{totMinDaily}</span>
                      &nbsp;/&nbsp;
                      <span style={{ color: "#00548f" }}>0</span>
                    </h4>
             
                </td>

                <td style={{backgroundColor:'#f6f6f6'}}>
                 
                    <h4 style={{ margin: "0" }}>
                      <span>{totCalDaily}</span>
                      &nbsp;/&nbsp;
                      <span style={{ color: "#00548f" }}>0</span>
                    </h4>
                  
                </td>
              </tr>
              <tr>
              <td style={{textAlign:"right"}}>
                 
                    <h4 style={{ margin: "0" }}>
                    Weekly Total /{" "}
                      <span style={{ color: "#00548f" }}>Goal</span>
                    </h4>
                 
                </td>
                <td style={{backgroundColor:'#f6f6f6'}}>
                  
                    <h4 style={{ margin: "0" }}>
                      <span>{totMinWeek}</span>
                      &nbsp;/&nbsp;
                      <span style={{ color: "#00548f" }}>0</span>
                    </h4>
                 
                </td>

                <td style={{backgroundColor:'#f6f6f6'}}>
                 
                    <h4 style={{ margin: "0" }}>
                      <span>{totCalWeek} </span>
                      &nbsp;/&nbsp;
                      <span style={{ color: "#00548f" }}>0</span>
                    </h4>
               
                </td>
              </tr>
              <tr className={styles.mealTotalRow}>
                <td>
                  <Link to={`/add_exercise?type=cardio`}style={{textDecoration:'none',color:'#0072bf',fontWeight:'bold'}}>Add Exercise</Link> &nbsp; | &nbsp;
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
                  <Link to={`/add_exercise?type=strength`}style={{textDecoration:'none',color:'#0072bf',fontWeight:'bold'}}>Add Exercise</Link> &nbsp; | &nbsp;
                  Quick Tools
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <hr />
          <ExNote></ExNote>
        </div>
        <button className={styles.reportBtn}>
          <Link to="/reports">View Full Report (Printable)</Link>
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
  );
}
