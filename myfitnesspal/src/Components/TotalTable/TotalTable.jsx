import { useEffect } from "react";
import styles from "./TotalTable.module.css";

export default function TotalTable({
  breakfast,
  lunch,
  dinner,
  snacks,
  isEatingEnough,
  setIsEatingEnough,
}) {
  useEffect(() => {
    if (
      total.calories >= dailyGoal.calories &&
      total.carbs >= dailyGoal.carbs &&
      total.fat >= dailyGoal.fat &&
      total.protein >= dailyGoal.protein &&
      total.sodium >= dailyGoal.sodium &&
      total.sugar >= dailyGoal.sugar
    ) {
      setIsEatingEnough(true);
    }
  }, []);

  const dailyGoal = {
    calories: 2860,
    carbs: 289,
    fat: 77,
    protein: 116,
    sodium: 2300,
    sugar: 87,
  };

  const calTotal = (nutrient) => {
    return (
      breakfast.reduce((acc, el) => {
        return acc + el[nutrient];
      }, 0) +
      lunch.reduce((acc, el) => {
        return acc + el[nutrient];
      }, 0) +
      dinner.reduce((acc, el) => {
        return acc + el[nutrient];
      }, 0) +
      snacks.reduce((acc, el) => {
        return acc + el[nutrient];
      }, 0)
    );
  };

  const total = {
    calories: calTotal("calories"),
    carbs: calTotal("carbs"),
    fat: calTotal("fat"),
    protein: calTotal("protein"),
    sodium: calTotal("sodium"),
    sugar: calTotal("sugar"),
  };

  const remaining = {
    calories: dailyGoal.calories - total.calories,
    carbs: dailyGoal.carbs - total.carbs,
    fat: dailyGoal.fat - total.fat,
    protein: dailyGoal.protein - total.protein,
    sodium: dailyGoal.sodium - total.sodium,
    sugar: dailyGoal.sugar - total.sugar,
  };

  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total</td>
          <td>{total.calories}</td>
          <td>{total.carbs}</td>
          <td>{total.fat}</td>
          <td>{total.protein}</td>
          <td>{total.sodium}</td>
          <td>{total.sugar}</td>
        </tr>
        <tr>
          <td>Your Daily Goal</td>
          <td>{dailyGoal.calories}</td>
          <td>{dailyGoal.carbs}</td>
          <td>{dailyGoal.fat}</td>
          <td>{dailyGoal.protein}</td>
          <td>{dailyGoal.sodium}</td>
          <td>{dailyGoal.sugar}</td>
        </tr>
        <tr style={{ color: isEatingEnough ? "red" : "green" }}>
          <td>Remaining</td>
          <td>{remaining.calories}</td>
          <td>{remaining.carbs}</td>
          <td>{remaining.fat}</td>
          <td>{remaining.protein}</td>
          <td>{remaining.sodium}</td>
          <td>{remaining.sugar}</td>
        </tr>
      </tbody>
    </table>
  );
}
