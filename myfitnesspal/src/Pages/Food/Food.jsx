import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../Components/Table/Table";
import TotalTable from "../../Components/TotalTable/TotalTable";
import styles from "./Food.module.css";
import {
  addWaterThunkActionCreator,
  saveNotesThunkActionCreator,
} from "../../Redux/action";
import { useReactToPrint } from "react-to-print";

export default function Food() {
  const storeData = useSelector((data) => {
    return data;
  });
  console.log(storeData);

  const waterRef = useRef();
  const notesRef = useRef();
  const printRef = useRef();

  const dispatch = useDispatch();

  const handlePrint = useReactToPrint({
    documentTitle: "new doc",
    pageStyle: "print",
    content: () => {
      return printRef.current;
    },
  });

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
    <div className={styles.Food} ref={printRef}>
      <div className={styles.mainDiv}>
        <div className={styles.topAd}>
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
        <div className={styles.meals}>
          <Table meal="Breakfast" />
          <Table meal="Lunch" />
          <Table meal="Dinner" />
          <Table meal="Snacks" />
          <TotalTable
            breakfast={storeData.Breakfast}
            lunch={storeData.Lunch}
            dinner={storeData.Dinner}
            snacks={storeData.Snacks}
          />
        </div>
        <div className={styles.waterDiv}>
          <div className={styles.waterLeft}>
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
              <h4>Add Custom</h4>
              <input type="number" ref={waterRef} /> &nbsp;
              <span>cups</span>
              <button
                onClick={() => {
                  addWaterCups(+waterRef.current.value);
                }}
              >
                Add
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
        <button onClick={handlePrint} id={styles.printBtn}>View Full Report (Printable)</button>
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
