import React from 'react'
import exStyle from "./Exercise.module.css";
export default function () {
  return (
    <div  style={{textAlign:'left'}}>
         <h3>
            Add Cardio Exercise
          </h3>
          <hr />
        <div>
         
          <div>
            <h4>
              Search our exercise database by name: 
            </h4>
            <div>
              <input className={exStyle.exs_sr_input} type="text" />
              <button className={exStyle.exs_button}>Search</button>
            </div>
          </div>

          <div>
            <h4>
              Matching Exercises:
            </h4>
            <div className={exStyle.exs_res_con}>
              <div className={exStyle.exs_result_div}>
                  <ul>
                    <li>hi sdf sdf sd f</li>
                    <li>hi sdf sdf sd f</li>
                    <li>hi sdf sdf sd f</li>
                    <li>hi sdf sdf sd f</li>
                    <li>hi sdf sdf sd f</li>
                    <li>hi sdf sdf sd f</li>
                    <li>hi sdf sdf sd f</li>
                   
                
                  </ul>
              </div>

              <div className={exStyle.exs_res_det_con}>
                  <h4>Adding</h4>
                  <h5>Exercise name</h5>
                  <div>
                    <h4>How long? </h4>
                    &nbsp;
                    <input type="number" value="1" />
                  </div>
                  <div>
                    <h4>Calories Burned: </h4>
                    &nbsp;
                    <input type="number"  value="1"/>
                  </div>
                  <p>
                  If you know how many calories you burned (e.g. from a machine at the gym), manually enter that value above


                  </p>
                  <button className={exStyle.exs_button}>
                    Add Exercise
                  </button>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
