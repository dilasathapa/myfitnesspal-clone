import styles from "./CompleteEntry.module.css";
import { useState } from "react";

export default function CompleteEntry({ isEatingEnough }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className={styles.completeEntryDiv}>
      {!showDetails && (
        <div>
          <p>
            When you're finished logging all foods and exercise for this day,
            click here:
          </p>
          <button
            onClick={() => {
              setShowDetails(true);
            }}
            className={styles.exs_button}
          >
            Complete This Entry
          </button>
        </div>
      )}
      <div className={styles.detailsDiv}>
        {showDetails &&
          (isEatingEnough ? (
            <div>
              <p className={styles.greenText}>
                Hurray....You have achieved your diet goal today!
              </p>
              <p>
                Just keep up the good work and keep focusing on your diet and
                exercise if you want to achieve your goals.
              </p>
            </div>
          ) : (
            <div>
              <p className={styles.redText}>
                Based on your total calories consumed for today, you are likely
                not eating enough.
              </p>
              <p>
                For safe weight loss, the National Institutes of Health
                recommends no less than 1000-1200 calories for women and
                1200-1500 calories for men.
              </p>
              <p>
                Completing your diary with fewer than the minimum calories noted
                above will not generate a news feed post for that day, or show a
                five-week weight projection.
              </p>
              <p>
                Even during weight loss, it's important to meet your body's
                basic nutrient and energy needs. Over time, not eating enough
                can lead to nutrient deficiencies, unpleasant side effects &
                other serious health problems.
              </p>
              <p className={styles.boldText}>To safely meet your goals:</p>
              <ul>
                <li>Focus on consuming nutrient-rich foods and beverages</li>
                <li>Check your progress in MyFitnessPal throughout the day</li>
                <li>Add nutritious snacks between meals as needed</li>
              </ul>
            </div>
          ))}
      </div>
      {showDetails && (
        <button
          onClick={() => {
            setShowDetails(false);
          }}
          className={styles.exs_button}
        >
          Make Additional Entries
        </button>
      )}
    </div>
  );
}
