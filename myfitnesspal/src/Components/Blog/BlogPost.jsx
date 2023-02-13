import React, { useState,useEffect } from 'react'
import postStyle from "./BlogStyles.module.css";
export default function BlogPost() {
  
    const [blogArray,setBlogArr]=useState({})
    const loadBlogData=()=>{
       
      }

      useEffect(()=>{
        try{
            fetch(`https://tame-jade-chinchilla-hose.cyclic.app/postsArray`)
            .then((res) => res.json())
            .then((data) => {
               console.log("data",data);
              setBlogArr(data[0]);
            })
            .catch((err) => console.log(err));
          }catch(err){
                  console.log(err)
          }
      },[])
    
  return (
    <div>
        
       {
        blogArray.title ? (
            <div className={postStyle.bpost_main_con}>
            <h1>
                    {blogArray.title}
            </h1>
            <div className={postStyle.bpost_auth_topcon}>
                <img className={postStyle.bpost_auth_img} src={blogArray.author[0].image} alt={blogArray.author[0].name} />
                <p>
                    BY <span>{blogArray.author[0].name}</span> 
                    &nbsp; {blogArray.date}
                </p>
            </div>

            <div className={postStyle.bpost_auth_mnarration}>
                <p>
                    {blogArray.narration}
                </p>
            </div>

            <div>
                {
                   blogArray.sub.map((el,index)=>{
                    return (
                        <div style={{textAlign:'left',lineHeight:'25px' }}> 
                            <div className={postStyle.bpost_title_div}>
                                <h3 style={{marginRight:'10px'}}>{index+1}</h3>
                              
                                <h3 style={{color:'#0066ee'}}>{el.title}</h3>
                                <h3  style={{color:'rgb(65, 62, 62)'}}>
                                &nbsp;|&nbsp; {el.author}
                                </h3>
                            </div>
                            <div>
                                <img src={el.img} alt={el.title} />
                            </div>
                            <div >
                                <p style={{fontStyle:'italic',fontSize:'18px',color:'rgb(65, 62, 62)',fontWeight:300}}>{el.narration}</p>
                            </div>
                        </div>
                    )
                   })
                }
            </div>

            <div style={{marginTop:'20px'}}>
                <h3>ABOUT THE AUTHOR</h3>
                <div className={postStyle.bpost_adet_con}>
                    <img style={{width:'100px',height:'100px'}} src={blogArray.author[0].image} alt={blogArray.author[0].name} />
                    <div>
                        <h3>{blogArray.author[0].name}</h3>
                        <p>
                            {blogArray.author[0].about}
                        </p>
                    </div>
                </div>

            </div>
        </div>
        ) : (
            <div className={postStyle.loadercontainer}> 
             
            </div>
        )
        
       }
    </div>
  )
}
