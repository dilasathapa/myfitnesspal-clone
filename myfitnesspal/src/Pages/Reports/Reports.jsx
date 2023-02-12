import styles from "./Reports.module.css";
import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function Reports() {
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

  const foodNotes = useSelector((data) => {
    return data.food_notes;
  });

  const cardio = useSelector((data) => {
    return data.cardio;
  });

  const strengthTraining = useSelector((data) => {
    return data.strength_training;
  });

  const exerciseNotes = useSelector((data) => {
    return data.exercise_notes;
  });

  const printRef = useRef();

  const handlePrint = useReactToPrint({
    documentTitle: "report",
    pageStyle: "print",
    content: () => {
      return printRef.current;
    },
  });

  let initialValue = {
    foodDiary: true,
    foodNotes: false,
    exerciseDiary: true,
    exerciseNotes: false,
  };

  const [show, setShow] = useState(initialValue);
  const [checkboxValues, setCheckboxValues] = useState(initialValue);

  const handleChange = (e) => {
    setCheckboxValues({
      ...checkboxValues,
      [e.target.name]: e.target.checked,
    });
  };

  const changeReport = () => {
    // console.log(checkboxValues);
    setShow(checkboxValues);
  };

  return (
    <div className={styles.Reports} ref={printRef}>
      <div className={styles.desc}>
        <div>
          <h1>Printable Diary for mayanksharma5104</h1>
          <p>
            This is a printable report for your food and exercise diary data,
            including daily notes.
          </p>
        </div>
        <div className={styles.showDiv}>
          <p>Show: </p>
          <div className={styles.checkDiv}>
            <div>
              <input
                type="checkbox"
                name="foodDiary"
                id="foodDiary"
                checked={checkboxValues.foodDiary}
                onChange={handleChange}
              />
              &nbsp;
              <label htmlFor="foodDiary">Food Diary</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="foodNotes"
                id="foodNotes"
                checked={checkboxValues.foodNotes}
                onChange={handleChange}
              />
              &nbsp;
              <label htmlFor="foodNotes">Food Notes</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="exerciseDiary"
                id="exerciseDiary"
                checked={checkboxValues.exerciseDiary}
                onChange={handleChange}
              />
              &nbsp;
              <label htmlFor="exerciseDiary">Exercise Diary</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="exerciseNotes"
                id="exerciseNotes"
                checked={checkboxValues.exerciseNotes}
                onChange={handleChange}
              />
              &nbsp;
              <label htmlFor="exerciseNotes">Exercise Notes</label>
            </div>
          </div>
          <button className={styles.blueBtn} onClick={changeReport}>
            CHANGE <br /> REPORT
          </button>
        </div>
      </div>
      <div className={styles.foodReport}>
        {show.foodDiary && (
          <table className={styles.reportsTable}>
            <thead>
              <tr>
                <th>FOODS</th>
                <th>Calories</th>
                <th>Carbs</th>
                <th>Fat</th>
                <th>Protein</th>
                <th>Sodium</th>
                <th>Sugar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.boldText}>Breakfast</td>
              </tr>
              {breakfast.map((el) => {
                return (
                  <tr key={el.id}>
                    <td>{el.item}</td>
                    <td>{el.calories}</td>
                    <td>{el.carbs}g</td>
                    <td>{el.fat}g</td>
                    <td>{el.protein}g</td>
                    <td>{el.sodium}mg</td>
                    <td>{el.sugar}g</td>
                  </tr>
                );
              })}
              <tr>
                <td className={styles.boldText}>Lunch</td>
              </tr>
              {lunch.map((el) => {
                return (
                  <tr key={el.id}>
                    <td>{el.item}</td>
                    <td>{el.calories}</td>
                    <td>{el.carbs}g</td>
                    <td>{el.fat}g</td>
                    <td>{el.protein}g</td>
                    <td>{el.sodium}mg</td>
                    <td>{el.sugar}g</td>
                  </tr>
                );
              })}
              <tr>
                <td className={styles.boldText}>Dinner</td>
              </tr>
              {dinner.map((el) => {
                return (
                  <tr key={el.id}>
                    <td>{el.item}</td>
                    <td>{el.calories}</td>
                    <td>{el.carbs}g</td>
                    <td>{el.fat}g</td>
                    <td>{el.protein}g</td>
                    <td>{el.sodium}mg</td>
                    <td>{el.sugar}g</td>
                  </tr>
                );
              })}
              <tr>
                <td className={styles.boldText}>Snacks</td>
              </tr>
              {snacks.map((el) => {
                return (
                  <tr key={el.id}>
                    <td>{el.item}</td>
                    <td>{el.calories}</td>
                    <td>{el.carbs}g</td>
                    <td>{el.fat}g</td>
                    <td>{el.protein}g</td>
                    <td>{el.sodium}mg</td>
                    <td>{el.sugar}g</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {show.foodNotes && (
          <div>
            <h3>Food Notes</h3>
            <p>{foodNotes}</p>
          </div>
        )}
      </div>
      <div className={styles.exerciseReport}>
        {show.exerciseDiary && (
          <table className={styles.reportsTable}>
            <thead>
              <tr>
                <th>EXERCISES</th>
                <th>Calories</th>
                <th>Minutes</th>
                <th>Sets</th>
                <th>Reps</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.boldText}>Cardiovascular</td>
              </tr>
              {cardio.map((el) => {
                return (
                  <tr key={el.id}>
                    <td>{el.title}</td>
                    <td>{el.calories_burned}</td>
                    <td>{el.minutes}</td>
                    <td>{el.sets}</td>
                    <td>{el.reps}</td>
                    <td>{el.weights}</td>
                  </tr>
                );
              })}
              <tr>
                <td className={styles.boldText}>Strength Training</td>
              </tr>
              {strengthTraining.map((el) => {
                return (
                  <tr key={el.id}>
                    <td>{el.title}</td>
                    <td>{el.calories_burned}</td>
                    <td>{el.minutes}</td>
                    <td>{el.sets}</td>
                    <td>{el.reps}</td>
                    <td>{el.weights}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {show.exerciseNotes && (
          <div>
            <h3>Exercise Notes</h3>
            <p>{exerciseNotes}</p>
          </div>
        )}
      </div>
      <button className={styles.blueBtn} onClick={handlePrint}>
        PRINT REPORT
      </button>
    </div>
  );
}
