import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./AddFood.module.css";
import { useDispatch } from "react-redux";
import { addFoodThunkActionCreator } from "../../Redux/action";

export default function AddFood() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const meal = searchParams.get("meal");

  const [item, setItem] = useState("");
  const [searchResult, setSearchResult] = useState();

  console.log(searchResult);

  const foodItems = useSelector((data) => {
    switch (meal) {
      case "Breakfast":
        return data.Breakfast;
      case "Lunch":
        return data.Lunch;
      case "Dinner":
        return data.Dinner;
      case "Snacks":
        return data.Snacks;
    }
  });
  console.log(foodItems);

  const searchForItem = () => {
    // console.log(item);
    fetch(`https://tame-jade-chinchilla-hose.cyclic.app/food-items?q=${item}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSearchResult(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToMeal = () => {
    dispatch(addFoodThunkActionCreator(meal, searchResult[0]));
    navigate("/food");
  };

  return (
    <div className={styles.AddFood}>
      <div>
        <img src="https://s0.2mdn.net/simgad/468308462477826160" alt="ad" />
      </div>
      <h3 className={styles.heading}>Add Food To {meal}</h3>
      <hr />
      <div className={styles.centerDiv}>
        <div className={styles.mainDiv}>
          <div className={styles.searchDiv}>
            <label htmlFor="searchBox">Search our food database by name</label>
            <br />
            <input
              type="text"
              name="searchBox"
              id={styles.searchBox}
              onChange={(e) => {
                setItem(e.target.value);
              }}
            />
            <div id={styles.searchResultDiv}>
              {searchResult &&
                (searchResult.length > 0 ? (
                  <div>
                    {searchResult[0].item}{" "}
                    <button onClick={addToMeal}>Add to meal</button>
                  </div>
                ) : (
                  <div>No results found</div>
                ))}
            </div>
            <button id={styles.searchBtn} onClick={searchForItem}>
              Search
            </button>
          </div>
          <div className={styles.tableDiv}>
            <h3>{meal}</h3>
            <table className={styles.itemsTable}>
              <thead></thead>
              <tbody>
                {foodItems.map((el) => {
                  return (
                    <tr key={el.id}>
                      <td>
                        <input type="checkbox" /> &nbsp; {el.item}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className={styles.bottomAd}>
            <img
              src="https://tpc.googlesyndication.com/simgad/4841471653946608601"
              alt="ad"
            />
          </div>
        </div>
        <div className={styles.sideDiv}>
          <img
            src="https://tpc.googlesyndication.com/simgad/17903055369230987743"
            alt="ad"
          />
        </div>
      </div>
    </div>
  );
}
