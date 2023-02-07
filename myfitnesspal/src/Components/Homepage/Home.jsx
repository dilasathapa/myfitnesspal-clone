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
              <div className='upload-img'>

              </div>
              <div className='calculations'>
                <div id='calculations-top'>
                  <div>
                    <p>calories</p>
                    <h1>0</h1>
                  </div>
                  <div>
                    <button>Add Excercise</button>
                    <button>Add Food</button>
                  </div>
                </div>
                <div id='calculations-bottom'>
                  <div>
                    <p>0</p>
                    <p>GOAL</p>
                    <p></p>
                  </div>
                  <div>
                    <p>0</p>
                    <p>FOOD</p>
                  </div>
                  <div>
                    <p>0</p>
                    <p>EXCERCISE</p>
                  </div>
                  <div>
                    <p>0</p>
                    <p>NET</p>
                  </div>

                </div>
              </div>
            </div>
            <div id='scroll-bar'>
              <div id='lbs-gained'>
                <div>
                  <p><span>0</span> lbs </p>
                  <p>GAINED</p>
                </div>
                <div id='clipboard-icon'>icon</div>

              </div>
              <div id='bar'>
              </div>
            </div>
            <div id='confirm-mail'>
              <div>icon</div>
              <div>
                <h3>Don't forget to verify your email.</h3>
                <p>We sent an email to : </p>
                <p>example@gmail.com</p>
              </div>
              <div>
                <button>RESEND EMAIL</button>
                <p>Or, change your email address</p>
              </div>
            </div>

          </div>
          <div id='right-bar'>

          </div>
        </div>
      </div>
    </>
  )
}
