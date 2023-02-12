import React from 'react'
import exStyle from './Exercise.module.css'

export default function ExStrength() {
  return (
    <div className={exStyle.excar_main_con}>
      <div>
        <div className={exStyle.excar_left_con}>
          <div>
          <h3 style={{color:'#00548f'}}>Strength Training</h3>
          </div>


          <div className={exStyle.div_card_data}>
            <p>
                Back Extension
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
        <div className={exStyle.exst_right_con}>
          <div>
            <div>
              <p>Sets</p>
            </div>
            <div>
              <p>Reps/Set</p>
            </div>
            <div>
              <p>Weight/Set</p>
            </div>
          </div>



          <div>
          <div className={exStyle.div_card_data}>
            <p>
                5
            </p>
          </div>
          <div className={exStyle.div_card_data}>
            <p>
               3
            </p>
          </div>
          <div className={exStyle.div_card_data}>
            <p>
                6
            </p>
          </div>
          </div>



            
        </div>
      </div>
    </div>
  )
}
