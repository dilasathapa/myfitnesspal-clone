import styles from "./Reports.module.css";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export default function Reports() {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    documentTitle: "report",
    pageStyle: "print",
    content: () => {
      return printRef.current;
    },
  });

  return (
    <div className={styles.Reports} ref={printRef}>
      <div className={styles.foodReport}>
        <h1>Food Report</h1>
      </div>
      <div className={styles.exerciseReport}>
        <h1>Exercise Report</h1>
      </div>
      <button className={styles.printBtn} onClick={handlePrint}>
        Print
      </button>
    </div>
  );
}
