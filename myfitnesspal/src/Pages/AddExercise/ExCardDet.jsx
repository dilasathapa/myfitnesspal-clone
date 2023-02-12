import React from 'react'
import exStyle from "./AddExercise.module.css";

import { useSearchParams } from "react-router-dom";
import { addExerciseThunkActionCreator } from "../../Redux/action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function 
({searchResult}) {
    const [searchParams, setSearchParams] = useSearchParams();
    // const [minVal,setMinVal]=useState(0)
    // const [calVal,setCalVal]=useState(0)
    const type = searchParams.get("type");
    console.log(type);
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addExercise = () => {
        dispatch(addExerciseThunkActionCreator(type, searchResult[0]));
        navigate("/exercise");
      };
    
  return (
    <div className={exStyle.exs_res_det_con}>
    <h4>Adding:</h4>
    <h5>{searchResult[0].title}</h5>
    <div>
      <h4>How long? </h4>
      &nbsp;
      <input value={searchResult[0].minutes} type="number"  />
    </div>
    <div>
      <h4>Calories Burned: </h4>
      &nbsp;
      <input value={searchResult[0].calories_burned} type="number" />
    </div>
    <p>
    If you know how many calories you burned (e.g. from a machine at the gym), manually enter that value above


    </p>
    <button onClick={addExercise} className={exStyle.exs_button}>
      Add Exercise
    </button>
</div>
  )
}
