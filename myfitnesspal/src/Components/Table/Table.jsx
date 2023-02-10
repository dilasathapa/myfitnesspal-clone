import { useDispatch, useSelector } from "react-redux";
import styles from "./Table.module.css";
import { Link } from "react-router-dom";
import { removeFoodThunkActionCreator } from "../../Redux/action";

export default function Table({ meal }) {
  const dispatch = useDispatch();

  const foodItems = useSelector((data) => {
    return data[meal];
  });
  // console.log(foodItems);

  const deleteItemFromMeal = (id) => {
    dispatch(removeFoodThunkActionCreator(meal, id));
  };

  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          <th>{meal}</th>
          <th>
            Calories <br /> kcal
          </th>
          <th>
            Carbs <br /> g
          </th>
          <th>
            Fat <br /> g
          </th>
          <th>
            Protein <br /> g
          </th>
          <th>
            Sodium <br /> mg
          </th>
          <th>
            Sugar <br /> g
          </th>
        </tr>
      </thead>
      <tbody>
        {
          // food items will be added here
          foodItems.map((el) => {
            return (
              <tr key={el.id} className={styles.itemRow}>
                <td>{el.item}</td>
                <td>{el.calories}</td>
                <td>{el.carbs}</td>
                <td>{el.fat}</td>
                <td>{el.protein}</td>
                <td>{el.sodium}</td>
                <td>{el.sugar}</td>
                <td>
                  <i
                    class="fa-solid fa-circle-minus"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      deleteItemFromMeal(el.id);
                    }}
                  ></i>
                </td>
              </tr>
            );
          })
        }
        <tr className={styles.mealTotalRow}>
          <td>
            <Link to={`/add_food?meal=${meal}`}>Add Food</Link> | Quick Tools
          </td>
          <td>
            {foodItems.reduce((acc, el) => {
              return acc + el.calories;
            }, 0)}
          </td>
          <td>
            {foodItems.reduce((acc, el) => {
              return acc + el.carbs;
            }, 0)}
          </td>
          <td>
            {foodItems.reduce((acc, el) => {
              return acc + el.fat;
            }, 0)}
          </td>
          <td>
            {foodItems.reduce((acc, el) => {
              return acc + el.protein;
            }, 0)}
          </td>
          <td>
            {foodItems.reduce((acc, el) => {
              return acc + el.sodium;
            }, 0)}
          </td>
          <td>
            {foodItems.reduce((acc, el) => {
              return acc + el.sugar;
            }, 0)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
