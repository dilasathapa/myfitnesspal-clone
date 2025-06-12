import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./AddFood.module.css";
import { addFoodThunkActionCreator } from "../../Redux/action";

export default function ItemCard({ searchResult, meal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToMeal = () => {
    if (searchResult.item) {
      dispatch(addFoodThunkActionCreator(meal, searchResult));
      navigate("/food");
    } else {
      alert("Select any food item");
    }
  };

  return (
    <div className={styles.exs_res_det_con}>
      <h4>Adding:</h4>
      <h5>{searchResult.item}</h5>
      <div>
        <input type="text" defaultValue="1.0" /> serving of
        <select>
          <option value="50g">50g</option>
          <option value="100g">100g</option>
          <option value="150g">150g</option>
          <option value="200g">200g</option>
        </select>
      </div>
      <div className={styles.mealSelectDiv}>
        <h4>To which meal?</h4>
        <select defaultValue={meal}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snacks">Snacks</option>
        </select>
      </div>
      <button className={styles.exs_button} onClick={addToMeal}>
        Add Food
      </button>
    </div>
  );
}
