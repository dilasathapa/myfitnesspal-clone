import React, { useEffect, useState } from "react";
import BlogArticleLiseItem from "./BlogArticleListItem";
import BlogSlides from "./BlogSlides";
import listStyle from "./BlogStyles.module.css";
import {Link} from 'react-router-dom'

export default function BlogArticleList() {
  const [load,setLoad]=useState(false)
  const [dataArr,setDataArr]=useState([])
  const [page,setPage]=useState(1)

  
  const blogpage1=[
    {
      id: 1,
      img: "https://blog.myfitnesspal.com/wp-content/uploads/2022/02/5-Strategies-to-Boost-Heart-Health-750x592.jpg",
      title: "5 Strategies to Boost Heart Health",
      date: "FEBRUARY 3, 2023",
    },
    {
      id: 2,
      img: "https://blog.myfitnesspal.com/wp-content/uploads/2023/02/Blog-Hero-750x592.png",
      title: "These 10 Sugar Swaps Are Sure to Boost Heart Health",
      date: "FEBRUARY 1, 2023",
    },
    {
      id: 3,
      img: "https://blog.myfitnesspal.com/wp-content/uploads/2019/02/Blog-Main-image-750x592.jpg.webp",
      title: "4-Week Treadmill Training Plan",
      date: "JANUARY 30, 2023",
    },
    {
      id: 4,
      img: "https://blog.myfitnesspal.com/wp-content/uploads/2018/12/8-Powerful-Goal-Setting-Tips-From-Experts-750x592.jpg",
      title: "8 Powerful Goal-Setting Tips From Experts",
      date: "JANUARY 27, 2023",
    },
    {
      id: 5,
      img: "https://blog.myfitnesspal.com/wp-content/uploads/2019/05/5-Fueling-Mistakes-Runners-Need-to-Avoid-2-750x592.jpg",
      title: "5 Fueling Mistakes Runners Need to Avoid",
      date: "JANUARY 25, 2023",
    },
    {
      id: 6,
      img: "https://blog.myfitnesspal.com/wp-content/uploads/2022/02/6-Tips-to-Make-Your-New-Years-Resolutions-Last-750x592.jpg.webp",
      title: "6 Tips to Make Your New Year’s Resolutions Last",
      date: "JANUARY 23, 2023",
    },
  ]
  const blogpage2=[
    {
      id: 7,
      img: "https://blog.myfitnesspal.com/wp-content/uploads/2021/11/VS-Blog-Featured-Image-Alisha1-750x592.jpg",
      title:
        "A Health Scare Encouraged Alisha to Change Her Lifestyle and Lose 70 Pounds",
      date: "JANUARY 20, 2023",
    },
    {
      id: 8,
      img: "https://blog.myfitnesspal.com/wp-content/uploads/2019/03/Before-After-Hero-1-750x592.jpg",
      title: "How David Turned a New Year’s Resolution Into a New Life",
      date: "JANUARY 18, 2023",
    },
    {
      id: 9,
      img: "https://blog.myfitnesspal.com/wp-content/uploads/2022/12/120922_PARTNERSHIP_MyFitnessPal_1504x944_4-750x592.jpg",
      title:
        "Feel the Transformation with Exclusive Content from our Partners at obé Fitness",
      date: "JANUARY 17, 2023",
    },
    {
      id: 10,
      img: "https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Fitness-Basics-Goal-Setting-and-Motivation-2-1-750x592.jpg",
      title: "Fitness Basics: Goal Setting and Motivation",
      date: "JANUARY 13, 2023",
    },
    {
      id: 11,
      img: "https://blog.myfitnesspal.com/wp-content/uploads/2020/11/UACF-Ask-the-RD-Macros-Featured-750x592.jpg",
      title: "Ask the RD: How Do You Determine the Right Macro Mix?",
      date: "JANUARY 12, 2023",
    },
    {
      id: 12,
      img: "https://blog.myfitnesspal.com/wp-content/uploads/2014/03/44-Nicknames-for-Added-Sugar-2-750x592.jpg",
      title: "44 Nicknames for Added Sugar",
      date: "JANUARY 11, 2023",
    },
  ]
  const blogpage3=[  {
    id: 13,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/2017/09/Are-You-Eating-Enough-Protein_2-750x592.jpg",
    title: "Are You Eating Enough Protein?",
    date: "JANUARY 10, 2023",
  },
  {
    id: 14,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/2021/04/7-Time-Saving-Tips-for-Keeping-an-Accurate-Food-Journal-2-750x592.jpg.webp",
    title: "7 Time-Saving Tips for Keeping an Accurate Food Journal",
    date: "JANUARY 9, 2023",
  },
  {
    id: 15,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/2019/01/Clean-Green-Mango-Kale-Smoothie-750x592.jpg",
    title: "Clean Green Mango Kale Smoothie",
    date: "JANUARY 6, 2023",
  },]

  useEffect(()=>{
    setDataArr([...blogpage1])
    console.log('data',dataArr)
    console.log('page',page)

    if(page===1){
      setDataArr([...blogpage1])
      setLoad(false)
      console.log(dataArr)
    }else if(page===2){
      setDataArr([...blogpage2],[...blogpage2])
      setLoad(false)
      console.log(dataArr)
    }else if(page===3){
      setDataArr([...blogpage3],[...blogpage3])
      setLoad(false)
      console.log(dataArr)
    }


  },[page])
  return (
    <div>
      <div className={listStyle.blist_feature_con}>
        <div>
          <h3>LATEST ARTICLES</h3>
        </div>
        <div>
         <Link to='/blogposts'>
         <img
            className={listStyle.blist_feature_img}
            src="https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-6.jpg"
            alt="THE HEALTH BENEFITS OF CHOCOLATE"
          />
         </Link>

          <div className={listStyle.blist_feature_tcon}>
            <h1>15 Make-Ahead Breakfasts Under 300 Calories</h1>
            <p>
            Make your morning routine a breeze by preparing a few nutritious staples ahead of time, like hearty oatmeal cups, simple egg dishes and grab-and-go bars. Your alarm clock will thank you!
            </p>
            <p>MYFITNESSPAL’S RECIPES  - FEBRUARY 6, 2020</p>
          </div>
        </div>
      </div>

      <br />
      <br />


      <div className={listStyle.blist_con}>
        {dataArr.map((el) => {
          return (
            <BlogArticleLiseItem
            key={el.id}
              image={el.img}
              title={el.title}
              date={el.date}
            ></BlogArticleLiseItem>
          );
        })}
      </div>


      <br />
      <br />

      <div disabled={true} className={listStyle.blist_load_con}
      onClick={()=>{
        setLoad(true)
        if(page===1){
          setPage(2)
        }else if(page===2){
          setPage(3)
        }
       
      }}
      >

        {
          load ? <img src="https://blog.myfitnesspal.com/wp-content/themes/under-armour//assets/images/site-mfp/load-more-posts.gif" alt="loading" /> : <h3>LOAD MORE</h3>    
        }

        
      
      </div>

      <br />
      <br />
      <div>
      <BlogSlides></BlogSlides>

      </div>
    </div>
  );
}
