
import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"

function Header (){
  return (
    <div className="Landing_header">
      <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
      <Link style={{textDecoration:"none",color: "black"}} to='/start'><h4>LOG IN</h4></Link>
    </div>
  )
}
export {Header};

function Landing(props) {
  return (
    <div>
      <Header/>
    <div className="main_div">
      <div className="Land-one">
        <div style={{width:"50%"}}>
            <h1>Good health starts with what you eat.</h1>
            <p>Want to eat more mindfully? Track meals, learn about your habits, and reach your goals with MyFitnessPal.</p>
            <Link className="startbtn" to='/start'>START YOUR JOURNEY</Link>
        </div>
        <div>
            <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75"/>
        </div>
      </div>
      <div className="Land-two">
        <img src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fsecondary-hero-slice%402x.png&w=512&q=75"></img>
        <div>
            <h1>Log from over 14 million foods.</h1>
            <p>See a breakdown of calories and nutrients, compare serving sizes, and discover how the food you eat supports your goals.</p>
        </div>
      </div>

      <div className="Land-three">
        <h1>The Tools for Your Goals</h1>
        <p>Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the right features to get there.</p>
      </div>

      <div className="Land-four">
        <div>
            <img src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg"/>
            <h3>Learn. Track. Improve.</h3>
            <p>Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.</p>
        </div>
        <div>
            <img src="https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg"/>
            <h3>Logging Simplified.</h3>
            <p>Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.</p>
        </div>
        <div>
            <img src="https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg"/>
            <h3>Stay Motivated.</h3>
            <p>Join the World’s Largest Fitness Community for advice, tips, and support 24/7.</p>
        </div>
      </div>
      <div className="Land-five">
        <h1>Victory Stories</h1>
        <p>Every day, more than 3,000 members reach their goals with MyFitnessPal. Get inspired for the journey ahead.</p>
      </div>
      

      <div className="mid_btn">
        <Link className="mid_startbtn" to='/start'>START YOUR JOURNEY</Link>
      </div>

      <div className="Land_five" >
        <h1 style={{fontSize: "50px"}}>Recipes & Inspiration</h1>
        <p>Get nutritionist-approved recipes and motivational workout tips from MyFitnessPal experts.</p>
      </div>

      <div className="Land_six" style={{display:"flex", margin:"20px", paddingTop: "36px" , justifyContent: "center"}}>
        
        <div style={{margin:"0 10px" , width: "300px" , borderRadius:"10px" , boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"}}>
          <img style={{width:"100%"}} 
          src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=1920&q=75"/>
          <h3 style={{textAlign: "left", width: "250px" , marginLeft:"20px"}}>15 Make-Ahead Breakfasts Under 300 Calories</h3>
          <h3 style={{textAlign: "left", width: "250px" , marginLeft:"20px" , color:"#0066EE"}}>MyFitnessPal</h3>
        </div>
        <div style={{margin:"0 10px" ,width: "300px", borderRadius:"10px" , boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"}}>
          <img style={{width:"100%"}} 
          src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheat-days.a49e92b5.jpg&w=1920&q=75"/>
          <h3 style={{textAlign: "left", width: "250px" , marginLeft:"20px"}}>The Problem with Cheat Days</h3>
          <h3 style={{textAlign: "left", width: "250px" , marginLeft:"20px" , color:"#0066EE"}}>MyFitnessPal</h3>
        </div>
        <div style={{margin:"0 10px",width: "300px" , borderRadius:"10px" ,boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"}}>
          <img style={{width:"100%"}} 
          src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.e3e4042a.png&w=1920&q=75"/>
          <h3 style={{textAlign: "left", width: "250px" , marginLeft:"20px"}}>Essential Guide to Getting Moving</h3>
          <h3 style={{textAlign: "left", width: "250px" , marginLeft:"20px" , color:"#0066EE"}}>MyFitnessPal</h3>
        </div>
      </div>

      <div className="Land_seven">
        <h1>Connect with over 50 apps.</h1>
        <p>Easily link your MyFitnessPal account with apps that support your healthier lifestyle. It’s not just about calories. It’s about feeling better, looking better, and living better.</p>
      </div>

      <img className="Land_eig" 
        src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75"/>
      <p className="Land_nin">
        MyFitnessPal is one of the best weight loss apps and fitness apps, 
        helping nearly 1 million members reach their nutrition and fitness 
        goals every year. Members use it as a calories tracker and calorie 
        counter to log their foods, and take advantage of the app’s food 
        database that contains over 14 million foods. It’s not just a free 
        calorie counter app — it’s also the best calorie counter app for people 
        who are looking to take back control of their health and fitness.
      </p>
    </div>

    <div className="footStyle">
      <div className = "navbar" style={{marginBottom:"10px"}}>
            <Link style={lin} to='/about'>ABOUT</Link>
            <Link style={lin} to='/food'>FOOD</Link>
            <Link style={lin} to='/exercise'>EXERCISE</Link>
            <Link style={lin} to='/apps'>APPS</Link>
            <Link style={lin} to='/community'>COMMUNITY</Link>
            <Link style={lin} to='/blog'>BLOG</Link>            
            <Link style={lin} to='/premium'>PREMIUM</Link>            
        </div>
        <div>
          <Link style={fin} to='/calorie'>Calorie Counter</Link>
          <Link style={fin} to='/blog'>Blog</Link>
          <Link style={fin} to='/terms'>Terms</Link>
          <Link style={fin} to='/privacy'>Privacy</Link>
          <Link style={fin} to='/contact'>Contact Us</Link>
          <Link style={fin} to='/api'>API</Link>
          <Link style={fin} to='/jobs'>Jobs</Link>
          <Link style={fin} to='/feedback'>Feedback</Link>
          <Link style={fin} to='/community'>Community Guidelines</Link>
        </div>
        <div>
          <Link style={fin} to='/cookie'>Cookie Preferences</Link>
          <Link style={fin} to='/ad'>Ad Choices</Link>
          <Link style={fin} to='/personalinfo'>Do Not Sell My Personal Information</Link>
        </div>
        <div>
          <p style={{fontSize: "11px" , paddingBottom:"10px"}}>© 2023 MyFitnessPal, Inc.</p>
          {/* <br/> */}
        </div>
      </div>
    </div>
  );
}

export default Landing;


const lin = {
  textDecoration: "none",
  marginRight: "10px",
  padding:"0px 16px",
  fontWeight: "700",
  color: "black"
}

const fin = {
  marginRight: "10px",
  fontSize: "11px",
  padding:"2px 2px",
  lineHeight: "18px",
  textDecoration: "none",
  color: "#0066EE"
}

