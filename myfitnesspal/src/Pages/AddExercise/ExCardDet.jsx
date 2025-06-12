import React from 'react'
import exStyle from "./AddExercise.module.css";

import { useSearchParams } from "react-router-dom";
import { addExerciseThunkActionCreator } from "../../Redux/action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {useState,useEffect} from 'react'

export default function 
({searchResult}) {
    const [searchParams, setSearchParams] = useSearchParams();
    // const [minVal,setMinVal]=useState(0)
    // const [calVal,setCalVal]=useState(0)
    const type = searchParams.get("type");
    console.log(type);
  
    const [lsCardio,setlsCardio]=useState([])
   

    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
      setlsCardio(JSON.parse(localStorage.getItem("cardio")) || [])
    },[])

    const addExercise = () => {
        if(searchResult.title){

          dispatch(addExerciseThunkActionCreator(type, searchResult));
          localStorage.setItem("cardio",JSON.stringify([...lsCardio,searchResult]))
          navigate("/exercise");
        }else{
          alert("Select any exercise")
        }
      };
    
  return (
    <div className={exStyle.exs_res_det_con}>
    <h4>Adding:</h4>
    <h5>{searchResult.title}</h5>
    <div>
      <h4>How long? </h4>
      &nbsp;
      <input value={searchResult.minutes} type="number"  />
    </div>
    <div>
      <h4>Calories Burned: </h4>
      &nbsp;
      <input value={searchResult.calories_burned} type="number" />
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
