import React from 'react'
import { useSearchParams } from "react-router-dom";
import exStyle from "./AddExercise.module.css";
import { addExerciseThunkActionCreator } from "../../Redux/action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {useState,useEffect} from 'react'

export default function ({searchResult})  {

    const [searchParams, setSearchParams] = useSearchParams();
    // const [minVal,setMinVal]=useState(0)
    // const [calVal,setCalVal]=useState(0)
    const type = searchParams.get("type");
    const [lsStrength,setlsStrength]=useState([])
    useEffect(()=>{
      setlsStrength(JSON.parse(localStorage.getItem("strength")) || [])
    },[])

    
    console.log(type);
  
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addExercise = () => {
        if(searchResult.title){
          dispatch(addExerciseThunkActionCreator(type, searchResult));
          localStorage.setItem("strength",JSON.stringify([...lsStrength,searchResult]))
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
      <h4>Number of sets:</h4>
      &nbsp;
      <input value={searchResult.sets} type="number"  />
    </div>
    <div>
      <h4>Repetitions per set: </h4>
      &nbsp;
      <input value={searchResult.reps} type="number" />
    </div>
    <div>
      <h4>Weight per set: </h4>
      &nbsp;
      <input value={searchResult.reps} type="number" />
      <p>lbs</p>
    </div>
    <p>
    Leave blank if weight is not applicable, e.g. sit-ups


    </p>
    <button onClick={addExercise} className={exStyle.exs_button}>
      Add Exercise
    </button>
</div>
  )
}

