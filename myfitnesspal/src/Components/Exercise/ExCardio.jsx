import React from "react";
import exStyle from "./Exercise.module.css";

export default function ExCardio() {
  return (
    <div className={exStyle.excar_main_con}>
      <div>
        <div className={exStyle.excar_left_con}>
          <div>
          <h3 style={{color:'#00548f'}}>Cardiovascular</h3>
          </div>


          <div className={exStyle.div_card_data}>
            <p>
                Walking 2.5 mph, downhill
            </p>
          </div>



          <div>
            <a style={{textDecoration:'none'}} href="">
            <h5 style={{color:'#0072bf'}}>Add Exercise</h5>
            </a>

            <div className={exStyle.vl}>

            </div>
            <a style={{textDecoration:'none'}} href="">
            <h5 style={{color:'#0072bf'}} >Quick Tools</h5>
            </a>
          </div>
        </div>
        <div className={exStyle.excar_right_con}>
          <div>
            <div>
              <p>Minutes</p>
            </div>
            <div>
              <p>Calories Burned</p>
            </div>
          </div>



          <div>
          <div className={exStyle.div_card_data}>
            <p>
                Walking 2.5 mph, downhill
            </p>
          </div>
          <div className={exStyle.div_card_data}>
            <p>
                Walking 2.5 mph, downhill
            </p>
          </div>
          </div>



            
        </div>
      </div>


      <div>
        <div className={exStyle.excar_left_con}>
          <div style={{display:'flex',justifyContent:'end'}}>
            <h4>Daily Total / <span style={{color:'#00548f'}} >Goal</span></h4>
          </div>
          <div style={{display:'flex',justifyContent:'end'}}>
            <h4>Weekly Total / <span style={{color:'#00548f'}} >Goal</span></h4>
          </div>
        </div>
        <div className={exStyle.excar_right_con}>
          <div>
            <div style={{backgroundColor:'#f6f6f6',color:'black'}}>
              <h4 style={{margin:'0'}}>
                <span>0</span>
                &nbsp;/&nbsp;
                 <span style={{color:'#00548f'}}>0</span>
              </h4>
            </div>
            <div style={{backgroundColor:'#f6f6f6',color:'black'}}>
              <h4 style={{margin:'0'}}>
                <span>0</span>
                &nbsp;/&nbsp;
                 <span style={{color:'#00548f'}}>0</span>
              </h4>
            </div>
          </div>
          <div>
            <div style={{backgroundColor:'#f6f6f6',color:'black'}}>
              <h4 style={{margin:'0'}}>
                <span>0</span>
                &nbsp;/&nbsp;
                 <span style={{color:'#00548f'}}>0</span>
              </h4>
            </div>
            <div style={{backgroundColor:'#f6f6f6',color:'black'}}>
              <h4 style={{margin:'0'}}>
                <span>0</span>
                &nbsp;/&nbsp;
                 <span style={{color:'#00548f'}}>0</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
