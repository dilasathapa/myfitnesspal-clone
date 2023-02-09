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
          <TotalTable breakfast={storeData.Breakfast} lunch={storeData.Lunch} dinner={storeData.Dinner} snacks={storeData.Snacks} />

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
