import styles from "./TotalTable.module.css";

export default function TotalTable({ breakfast, lunch, dinner, snacks }) {
  const dailyGoal = {
    calories: 2310,
    carbs: 289,
    fat: 77,
    protein: 116,
    sodium: 2300,
    sugar: 87,
  };

  const total = {
    calories:
      breakfast.reduce((acc, el) => {
        return acc + el.calories;
      }, 0) +
      lunch.reduce((acc, el) => {
        return acc + el.calories;
      }, 0) +
      dinner.reduce((acc, el) => {
        return acc + el.calories;
      }, 0) +
      snacks.reduce((acc, el) => {
        return acc + el.calories;
      }, 0),

    carbs:
      breakfast.reduce((acc, el) => {
        return acc + el.carbs;
      }, 0) +
      lunch.reduce((acc, el) => {
        return acc + el.carbs;
      }, 0) +
      dinner.reduce((acc, el) => {
        return acc + el.carbs;
      }, 0) +
      snacks.reduce((acc, el) => {
        return acc + el.carbs;
      }, 0),

    fat:
      breakfast.reduce((acc, el) => {
        return acc + el.fat;
      }, 0) +
      lunch.reduce((acc, el) => {
        return acc + el.fat;
      }, 0) +
      dinner.reduce((acc, el) => {
        return acc + el.fat;
      }, 0) +
      snacks.reduce((acc, el) => {
        return acc + el.fat;
      }, 0),

    protein:
      breakfast.reduce((acc, el) => {
        return acc + el.protein;
      }, 0) +
      lunch.reduce((acc, el) => {
        return acc + el.protein;
      }, 0) +
      dinner.reduce((acc, el) => {
        return acc + el.protein;
      }, 0) +
      snacks.reduce((acc, el) => {
        return acc + el.protein;
      }, 0),

    sodium:
      breakfast.reduce((acc, el) => {
        return acc + el.sodium;
      }, 0) +
      lunch.reduce((acc, el) => {
        return acc + el.sodium;
      }, 0) +
      dinner.reduce((acc, el) => {
        return acc + el.sodium;
      }, 0) +
      snacks.reduce((acc, el) => {
        return acc + el.sodium;
      }, 0),

    sugar:
      breakfast.reduce((acc, el) => {
        return acc + el.sugar;
      }, 0) +
      lunch.reduce((acc, el) => {
        return acc + el.sugar;
      }, 0) +
      dinner.reduce((acc, el) => {
        return acc + el.sugar;
      }, 0) +
      snacks.reduce((acc, el) => {
        return acc + el.sugar;
      }, 0),
  };

//   console.log(total);

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
        <tr>
          <td>Remaining</td>
          <td>{dailyGoal.calories - total.calories}</td>
          <td>{dailyGoal.carbs - total.carbs}</td>
          <td>{dailyGoal.fat - total.fat}</td>
          <td>{dailyGoal.protein - total.protein}</td>
          <td>{dailyGoal.sodium - total.sodium}</td>
          <td>{dailyGoal.sugar - total.sugar}</td>
        </tr>
      </tbody>
    </table>
  );
}
