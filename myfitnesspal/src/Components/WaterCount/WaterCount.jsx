import styles from "./WaterCount.module.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addWaterThunkActionCreator,
  saveNotesThunkActionCreator,
} from "../../Redux/action";

export default function WaterCount() {
  const storeData = useSelector((data) => {
    return data;
  });
  console.log(storeData);
  const dispatch = useDispatch();
  const waterRef = useRef();
  const notesRef = useRef();

  const addWaterCups = (cups) => {
    // console.log(cups);
    dispatch(addWaterThunkActionCreator(cups));
  };

  const saveNotes = () => {
    // console.log(notesRef.current.value);
    const notes = notesRef.current.value;
    dispatch(saveNotesThunkActionCreator(notes));
  };

  return (
    <div className={styles.waterDiv}>
      <div className={styles.waterLeft}>
        <div className={styles.leftUpper}>
          <div>
            <h3 style={{ color: "rgb(0,84,143)", marginBottom: "10px" }}>
              Water Consumption
            </h3>
            <h4>Today's Water Total</h4>
            <p style={{ fontSize: "small" }}>
              Aim to drink at least 8 cups of water today. You can quick add
              common sizes or enter a custom amount.{" "}
            </p>
            <h4>Quick Add</h4>
            <button
              className={styles.quickAddBtn}
              onClick={() => {
                addWaterCups(1);
              }}
            >
              +1 cup
            </button>
            <button
              className={styles.quickAddBtn}
              onClick={() => {
                addWaterCups(2);
              }}
            >
              +2 cups
            </button>
            <button
              className={styles.quickAddBtn}
              onClick={() => {
                addWaterCups(4);
              }}
            >
              +4 cups
            </button>
          </div>
          <div>
            <h4 style={{ textAlign: "center", marginBottom: "30px" }}>
              {storeData.water_consumed} cups
            </h4>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1864/1864846.png"
              alt="water-glass"
              height="100px"
            />
          </div>
        </div>
        <div className={styles.leftLower}>
          <h4>Add Custom</h4>
          <input type="number" ref={waterRef} /> &nbsp;
          <span>cups</span>
          <button
            onClick={() => {
              addWaterCups(+waterRef.current.value);
            }}
            className={styles.greenBtn}
          >
            Add
          </button>
        </div>
      </div>

      <div className={styles.waterRight}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <h4>Today's Food Notes</h4>
          <button
            style={{
              backgroundColor: "white",
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
              border: "none",
            }}
            onClick={saveNotes}
          >
            Save
          </button>
        </div>
        <textarea
          cols="30"
          rows="10"
          ref={notesRef}
          defaultValue={storeData.food_notes}
        ></textarea>
      </div>
    </div>
  );
}
