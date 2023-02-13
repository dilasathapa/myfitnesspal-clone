import {useState,useEffect} from 'react'
import BlogSlideItem from './BlogSlideItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useSwiper } from 'swiper/react';

export default function BlogSlides() {
  const [blogArr,setBlogArr]=useState([])

  useEffect(()=>{
    try{
      fetch(`https://tame-jade-chinchilla-hose.cyclic.app/blogArray`)
      .then((res) => res.json())
      .then((data) => {
         console.log("data",data);
        setBlogArr(data);
      })
      .catch((err) => console.log(err));
    }catch(err){
            console.log(err)
    }
  },[])

  const swiper = useSwiper();


  return (
    <div>
      <div style={{textAlign:"left"}}>
        <h3>TRENDING ARTICLES </h3>
      </div>

      <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  breakpoints={
    {
      1280:{
        spaceBetween:20,
        slidesPerView:5
      },
      1024:{
        spaceBetween:30,
        slidesPerView:4
      },
      768:{
        spaceBetween:40,
        slidesPerView:3
      },
      480:{
        spaceBetween:50,
        slidesPerView:2
      },
      0:{
        spaceBetween:40,
        slidesPerView:1
      }


    }
  }
  navigation
  pagination={{ clickable: true }}
  //scrollbar={{ draggable: true }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
    >

      {
        blogArr.map((el)=>{
          return (
            <SwiperSlide key={el.id}>
              <BlogSlideItem
              image={el.img}
              title={el.title}
              ></BlogSlideItem>
            </SwiperSlide>
          )
        })
      }
      {/* <SwiperSlide>
      <BlogSlideItem image={'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg'} title={'These 10 Sugar Swaps Are Sure to Boost Heart Health'}></BlogSlideItem>
      </SwiperSlide>
      <SwiperSlide>
      <BlogSlideItem image={'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51980-featured-700x400.jpg'} title={'How to Get Weight Loss Motivation Back in February'}></BlogSlideItem>
      </SwiperSlide>
      <SwiperSlide>
      <BlogSlideItem image={'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg'} title={'These 10 Sugar Swaps Are Sure to Boost Heart Health'}></BlogSlideItem>
      </SwiperSlide>
      <SwiperSlide>
      <BlogSlideItem image={'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg'} title={'These 10 Sugar Swaps Are Sure to Boost Heart Health'}></BlogSlideItem>
      </SwiperSlide>
      <SwiperSlide>
      <BlogSlideItem image={'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg'} title={'These 10 Sugar Swaps Are Sure to Boost Heart Health'}></BlogSlideItem>
      </SwiperSlide>
      <SwiperSlide>
      <BlogSlideItem image={'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg'} title={'These 10 Sugar Swaps Are Sure to Boost Heart Health'}></BlogSlideItem>
      </SwiperSlide> */}
    
    </Swiper>

   
    </div>
  )
}
