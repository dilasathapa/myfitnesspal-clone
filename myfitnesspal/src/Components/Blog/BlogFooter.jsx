import React from 'react'
import ftStyle from "./BlogStyles.module.css";
export default function BlogFooter() {
  return (
    <div className={ftStyle.bfooter_con}>

      <div>
        <img src="https://blog.myfitnesspal.com/wp-content/uploads/2021/03/logo-1.png" alt="myfitnesspal" />

        <br />

        <p>
          <a href="">MyFitnessPal </a>
          is the leading app for tracking—and conquering—your nutrition and fitness goals. Log meals from a database of 14 million foods, track physical activity, and learn how to build healthy habits that stick. With more than 500 recipes, 150 workout routines, and a variety of expert-guided meal and workout plans, you’ll have the support you need for your entire health and fitness journey.
        </p>
      </div>

      
      <div style={{width:'100%',textAlign:'center',margin:'auto',backgroundColor:'white'}}>

          <div >
            <a className={ftStyle.bfooter_btlink} href=""><h4>
            MyFitnessPal Blog</h4></a>

          </div>

          <div className={ftStyle.bfooter_link_con}>
            <p>© 2023MyFitnessPal™</p>
            <div>
              <p>
              Privacy Policy 
              </p>
              <p>
              Terms
              </p>
              <p>
              Cookie Preferences 
              </p>
              <p>
              Do Not Sell My Personal Information
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}
