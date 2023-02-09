import { useSelector } from "react-redux";
import Table from "../../Components/Table/Table";
import TotalTable from "../../Components/TotalTable/TotalTable";
import styles from "./Food.module.css";

export default function Food() {
  const storeData = useSelector((data) => {
    return data;
  });
  console.log(storeData);

  return (
    <div className={styles.Food}>
      <div className={styles.mainDiv}>
        <div className={styles.topAd}>
          <img
            src="https://tpc.googlesyndication.com/simgad/3928362859200258258"
            alt="ad"
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
              <button className={styles.quickAddBtn}>+1 cup</button>
              <button className={styles.quickAddBtn}>+2 cups</button>
              <button className={styles.quickAddBtn}>+4 cups</button>
              <h4>Add Custom</h4>
              <input type="number" /> &nbsp;
              <span>cups</span>
              <button>Add</button>
            </div>
            <div>
              <h4 style={{textAlign:"center", marginBottom:"30px"}}>2 cups</h4>
              <img src="https://cdn-icons-png.flaticon.com/512/1864/1864846.png" alt="water-glass" height="100px" />
            </div>
          </div>

          <div className={styles.waterRight}>
            <h4>Today's Food Notes</h4>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
      <div className={styles.sideDiv}>
        <img
          src="https://tpc.googlesyndication.com/simgad/17903055369230987743"
          alt="ad"
        />
      </div>
    </div>
  );
}
