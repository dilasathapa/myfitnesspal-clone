import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styles from "./AddExercise.module.css";
import { addExerciseThunkActionCreator } from "../../Redux/action";
import { useNavigate } from "react-router-dom";

export default function AddExercise() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  console.log(type);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const exercises = useSelector((data) => {
    switch (type) {
      case "cardio":
        return data.cardio;
      case "strength":
        return data.strength_training;
    }
  });
  //   console.log(exercises);

  const [title, setTitle] = useState("");
  const [searchResult, setSearchResult] = useState();

  const searchExercise = () => {
    // console.log(title);
    fetch(`http://localhost:8080/${type}-workouts?title=${title}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSearchResult(data);
      })
      .catch((err) => console.log(err));
  };

  const addExercise = () => {
    dispatch(addExerciseThunkActionCreator(type, searchResult[0]));
    navigate("/exercise");
  };

  return (
    <div className={styles.AddExercise}>
      <div>
        <img src="https://s0.2mdn.net/simgad/468308462477826160" alt="ad" />
      </div>
      <h3 className={styles.heading}>Add Exercise</h3>
      <hr />
      <div className={styles.centerDiv}>
        <div className={styles.mainDiv}>
          <div className={styles.searchDiv}>
            <label htmlFor="searchBox">
              Search our exercise database by name
            </label>
            <br />
            <input
              type="text"
              name="searchBox"
              id={styles.searchBox}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <div id={styles.searchResultDiv}>
              {searchResult &&
                (searchResult.length > 0 ? (
                  <div>
                    {searchResult[0].title}{" "}
                    <button onClick={addExercise}>Add Exercise</button>
                  </div>
                ) : (
                  <div>No results found</div>
                ))}
            </div>

            <button id={styles.searchBtn} onClick={searchExercise}>
              Search
            </button>
          </div>
          <div className={styles.tableDiv}>
            <h3>
              {type === "cardio" ? "Cardiovascular" : "Strength Training"}
            </h3>
            <table className={styles.itemsTable}>
              <thead></thead>
              <tbody>
                {exercises.map((el) => {
                  return (
                    <tr key={el.id}>
                      <td>
                        <input type="checkbox" /> &nbsp; {el.title}
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
