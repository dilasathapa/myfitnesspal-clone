import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styles from "./AddFood.module.css";
import ItemCard from "./ItemCard";

export default function AddFood() {
  const [searchParams, setSearchParams] = useSearchParams();
  const meal = searchParams.get("meal");

  const [item, setItem] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [foodDetails, setDetails] = useState({});

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
            <button className={styles.exs_button} onClick={searchForItem}>
              Search
            </button>

            <div>
              <h4>Matching food items:</h4>
              <div className={styles.exs_res_con}>
                <div className={styles.exs_result_div}>
                  <ul>
                    {searchResult &&
                      (searchResult.length > 0 ? (
                        searchResult.map((el) => {
                          return (
                            <li
                              onClick={() => {
                                setDetails(el);
                              }}
                            >
                              {el.item}
                            </li>
                          );
                        })
                      ) : (
                        <div>No results found</div>
                      ))}
                  </ul>
                </div>

                {searchResult &&
                  (searchResult.length > 0 ? (
                    <ItemCard searchResult={foodDetails} meal={meal} />
                  ) : (
                    <div>No results found</div>
                  ))}
              </div>
            </div>
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
