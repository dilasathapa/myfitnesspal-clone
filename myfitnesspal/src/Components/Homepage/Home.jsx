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
                    <p>Calories Remaining</p>
                    <h1>1400</h1>
                  </div>
                  <div>
                    <button>Add Excercise</button>
                    <button>Add Food</button>
                  </div>
                </div>
                <div id='calculations-bottom'>
                  <div>
                    <p>1400</p>
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
            <div id='news-feed'>
              <div>
                <h3>NEWS FEED</h3>
              </div>
              <div>
                <textarea placeholder="What's on your mind?" id="textarea" rows="3"></textarea>
                <div>
                  <button>Share</button>
                </div>
              </div>
            </div>

          </div>
          <div id='right-bar'>
            <div>
              <h5>Recent Forum Topics</h5>
              <p>View All</p>
              <hr />
              <ul>
                <li>Down 10 pounds this month!</li>
                <li>update Stronglifts and kettlebell transformation! Pictures!</li>
                <li>Achieved my weight loss goal.</li>
                <li>Down 62 pounds photo attached</li>
                <li>Intermittent fasting </li>
              </ul>
            </div>
            <div>
              <div>
                <h1>myfitnesspal <sup>TM</sup></h1>
                <button>BLOG</button>
              </div>
              <div>
                <p>View All</p>
                <hr />
                <p>The Health Benefits of Chocolate</p>
                <p>Not all chocolate is created equal. Here’s how to satisfy your craving and enjoy some health benefits, too.</p>
                <p>Read More</p>
                <p>5 Strategies to Boost Heart Health</p>
                <p>Our registered dietitian is sharing 5 strategies for a heart-healthy diet to help prevent cardiovascular disease.</p>
                <p>Read More</p>
                <p>These 10 Sugar Swaps Are Sure to Boost Heart Health</p>
                <p>February is Heart Health month. While many wish to cut back on sweets, you might not know that cutting back is good for your heart, too.</p>
                <p>Read More</p>

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
