import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Exercise.module.css";
import { removeExerciseThunkActionCreator } from "../../Redux/action";

export default function Exercise() {
  const cardio = useSelector((data) => {
    return data.cardio;
  });
  console.log(cardio);

  const strength = useSelector((data) => {
    return data.strength_training;
  });
  console.log(strength);

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
        <div className={styles.calender}>
          <h4>
            Your food diary for: <input type="date" name="date" id="date" />
          </h4>
        </div>
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
              <tr className={styles.mealTotalRow}>
                <td>
                  <Link to={`/add_exercise?type=cardio`}>Add Exercise</Link> |
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
                  <Link to={`/add_exercise?type=strength`}>Add Exercise</Link> |
                  Quick Tools
                </td>
              </tr>
            </tbody>
          </table>
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
