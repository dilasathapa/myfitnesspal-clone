import React from "react";

var header = {
    display: "flex",
    height: "75px",
    justifyContent: "space-around"
}

var startButton = {
    backgroundColor: "rgb(0, 102, 238)",
    padding: "12px 28px",
    marginRight: "10px",
    marginLeft: "10px",
    border: "None",
    borderRadius: "4px",
    letterSpacing: "0.015625rem",
    color: "rgb(255, 255, 255)",
    fontWeight: "500",
    fontSize: "0.9375rem",
    fontFamily: "Inter, Helvetica, Arial, -apple-system, sans-serif",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%"
}

function Landing(props) {
  return (
    <div style={{width:"70%",margin:"auto" }}>
      <div style={header}>
        <img src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" style={{height:"90px"}}/>
        <h4>LOG IN</h4>
      </div>
      <div style={{display:"flex", margin:"20px", paddingTop: "36px"}}>
        <div style={{width:"50%"}}>
            <h1 style={{fontSize: "60px"}}>Good health starts with what you eat.</h1>
            <p>Want to eat more mindfully? Track meals, learn about your habits, and reach your goals with MyFitnessPal.</p>
            <button style={startButton}>START FOR FREE</button>
        </div>
        <div>
            <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75"/>
        </div>
      </div>
      <div style={{display:"flex", margin:"20px", paddingTop: "36px"}}>
        <div><img src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fsecondary-hero-slice%402x.png&w=512&q=75"></img></div>
        <div>
            <h1 style={{fontSize: "60px"}}>Log from over 14 million foods.</h1>
            <p>See a breakdown of calories and nutrients, compare serving sizes, and discover how the food you eat supports your goals.</p>
        </div>
      </div>
      <div>
        <h1 style={{fontSize: "60px"}}>The Tools for Your Goals</h1>
        <p>Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the right features to get there.</p>
      </div>
      <div style={{display:"flex", margin:"20px", paddingTop: "36px"}}>
        <div style={{margin:"20px", paddingTop: "15px"}}>
            <img src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg"/>
            <h3>Learn. Track. Improve.</h3>
            <p>Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.</p>
        </div>
        <div style={{margin:"20px", paddingTop: "15px"}}>
            <img src="https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg"/>
            <h3>Logging Simplified.</h3>
            <p>Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.</p>
        </div>
        <div style={{margin:"20px", paddingTop: "15px"}}>
            <img src="https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg"/>
            <h3>Stay Motivated.</h3>
            <p>Join the World’s Largest Fitness Community for advice, tips, and support 24/7.</p>
        </div>
      </div>
      <div>
        <h1>Victory Stories</h1>
        <p>Every day, more than 3,000 members reach their goals with MyFitnessPal. Get inspired for the journey ahead.</p>
      </div>
    </div>
  );
}

export default Landing;