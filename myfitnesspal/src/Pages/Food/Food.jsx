import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Table from "../../Components/Table/Table";
import TotalTable from "../../Components/TotalTable/TotalTable";
import styles from "./Food.module.css";
import { useReactToPrint } from "react-to-print";
import CompleteEntry from "../../Components/CompleteEntry/CompleteEntry";
import WaterCount from "../../Components/WaterCount/WaterCount";

export default function Food() {
  const storeData = useSelector((data) => {
    return data;
  });
  console.log(storeData);

  const [isEatingEnough, setIsEatingEnough] = useState(false);
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    documentTitle: "new doc",
    pageStyle: "print",
    content: () => {
      return printRef.current;
    },
  });

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
            isEatingEnough={isEatingEnough}
            setIsEatingEnough={setIsEatingEnough}
          />
        </div>
        <CompleteEntry isEatingEnough={isEatingEnough} />

        <WaterCount />

        <button onClick={handlePrint} id={styles.printBtn}>
          View Full Report (Printable)
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
