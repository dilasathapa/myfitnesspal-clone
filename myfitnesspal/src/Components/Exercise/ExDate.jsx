import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft,faCaretRight,faCalendarDays } from '@fortawesome/free-solid-svg-icons'

import exStyle from './Exercise.module.css'

export default function ExDate() {
  
  return (
    <div className={exStyle.ex_date_main_con}>
      <div>
        <h3>
          Your Exercise Diary of: 
        </h3>
        <div>
          <button>
          <FontAwesomeIcon icon={faCaretLeft} color="white" size='xl' />
          </button>


         <div>
         <h3>
            Saturday,Febraury 11, 2023
          </h3>
         </div>
          <button>
          <FontAwesomeIcon icon={faCaretRight} color="white" size='xl' />
          </button>
        </div>
       
        <button className={exStyle.btncalender}>
          <FontAwesomeIcon icon={faCalendarDays} color="grey" size='xl' />
          </button>
       
      </div>
    </div>
  )
}
