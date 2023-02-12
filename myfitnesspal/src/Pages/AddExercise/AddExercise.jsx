import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import exStyle from "./AddExercise.module.css";
import { addExerciseThunkActionCreator } from "../../Redux/action";
import { saveNotesThunkActionCreator } from "../../Redux/action"; 
import { useNavigate } from "react-router-dom";
import ExCardDet from "./ExCardDet";
import ExStrengthDet from "./ExStrengthDet";

export default function AddExercise() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [minVal,setMinVal]=useState(0)
  // const [calVal,setCalVal]=useState(0)
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
     console.log(title);
    fetch(`http://localhost:3008/${type}-workouts?title=${title}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSearchResult(data);
      })
      .catch((err) => console.log(err));
  };

  // const addExercise = () => {
  //   dispatch(addExerciseThunkActionCreator(type, searchResult[0]));
  //   navigate("/exercise");
  // };

  return (
    <div  style={{textAlign:'left',width:'60%',margin:'auto'}}>
         <h2 style={{color:'#00548f',margin:'0'}}>
            Add {type} Exercise
          </h2>
          <hr />
        <div>
         
          <div>
            <h4 style={{color:'#00548f',margin:'0'}}>
              Search our exercise database by name: 
            </h4>
            <div>
              <input className={exStyle.exs_sr_input} type="text" value={title} onChange={(e)=>{
                setTitle(e.target.value)
              }} />
              <button onClick={searchExercise} className={exStyle.exs_button}>Search</button>
            </div>
          </div>

          <div>
            <h4>
              Matching Exercises:
            </h4>
            <div className={exStyle.exs_res_con}>
              <div className={exStyle.exs_result_div}>
                  <ul>
                   
                    {
                      searchResult && (
                        searchResult.length>0?(
                          <li onClick={()=>{
                          
                           }}>{searchResult[0].title}</li>
                           
                        
                        ) :
                          <div>No results found</div>
                      )
                    }
                  </ul>
              </div>

             {
              searchResult && (
              searchResult.length>0 ? (
                  type==='cardio' ? (
                    <ExCardDet searchResult={searchResult}></ExCardDet>
                  ) : 
                  <ExStrengthDet searchResult={searchResult}></ExStrengthDet>
              ): <div>No results found</div>
              )
             }


              <div>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
