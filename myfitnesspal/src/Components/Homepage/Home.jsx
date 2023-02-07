import React from 'react'
import "./Home.css";


export default function Home() {
  return (
    <>
      <div className='parent'>
        <div id='two-bars'>
          <div id='left-bar'>
            <div id='top-header'>
              <h2>Your Daily Summary</h2>
              <div>
                <h2>4</h2>
                <div>
                  <p>DAY</p>
                  <p>STREAK</p>
                </div>
              </div>
            </div>
            <div id='calculator'>
              
            </div>

          </div>
          <div id='right-bar'>

          </div>
        </div>
      </div>
    </>
  )
}
