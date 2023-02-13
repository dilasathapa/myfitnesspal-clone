import React, { useEffect, useState } from "react";
import BlogArticleLiseItem from "./BlogArticleListItem";
import BlogSlides from "./BlogSlides";
import listStyle from "./BlogStyles.module.css";
import {Link} from 'react-router-dom'

export default function BlogArticleList() {
  const [load,setLoad]=useState(false)
  const [dataArr,setDataArr]=useState([])
  const [page,setPage]=useState(1)

  
  const loadBlogData=()=>{
    try{
      fetch(`https://tame-jade-chinchilla-hose.cyclic.app/blogArticles`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDataArr(data);
      })
      .catch((err) => console.log(err));
    }catch(err){

    }
  }

  useEffect(()=>{
  
    // if(page===1){
    //   setDataArr([...blogpage1])
    //   setLoad(false)
    //   console.log(dataArr)
    // }else if(page===2){
    //   setDataArr([...blogpage2],[...blogpage2])
    //   setLoad(false)
    //   console.log(dataArr)
    // }else if(page===3){
    //   setDataArr([...blogpage3],[...blogpage3])
    //   setLoad(false)
    //   console.log(dataArr)
    // }
      loadBlogData();

  },[])
  return (
    <div>
      <div className={listStyle.blist_feature_con}>
        <div>
          <h3>LATEST ARTICLES</h3>
        </div>
        <div  className={listStyle.blist_ft_nar}>
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
