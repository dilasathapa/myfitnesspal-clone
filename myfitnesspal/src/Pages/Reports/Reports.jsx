import styles from "./Reports.module.css";

export default function Reports(){
    return <div className={styles.Reports}>
        <div className={styles.foodReport}>
            <h1>Food Report</h1>

        </div>
        <div className={styles.exerciseReport}>
            <h1>Exercise Report</h1>

        </div>
    </div>
}