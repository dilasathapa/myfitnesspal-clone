import React from 'react'
import BlogSlideItem from './BlogSlideItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useSwiper } from 'swiper/react';

export default function BlogSlides() {
  const swiper = useSwiper();
  const blogArr=[
    {
        id:1,
        title:'These 10 Sugar Swaps Are Sure to Boost Heart Health',
        img:'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg',
        narration:''
    },
    {
        id:2,
        title:'How to Get Weight Loss Motivation Back in February',
        img:'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51980-featured-700x400.jpg',
        narration:''
    },
    {
        id:3,
        title:'Essential Guide to MyFitnessPal Premium',
        img:'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/27077-featured-700x400.jpg',
        narration:''
    },
    {
        id:4,
        title:'The Health Benefits of Chocolate',
        img:'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51920-featured-700x400.jpg',
        narration:''
    },
    {
        id:5,
        title:'Essential Guide to Sugar',
        img:'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/36365-featured-700x400.jpg',
        narration:''
    },
    {
        id:6,
        title:'15 Make-Ahead Breakfasts Under 300 Calories',
        img:'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg',
        narration:''
    }
]

  return (
    <div>
      <div style={{textAlign:"left"}}>
        <h3>TRENDING ARTICLES </h3>
      </div>

      <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  breakpoints={
    {
      0:{
        spaceBetween:10,
        slidesPerView:1
      },
      480:{
        spaceBetween:10,
        slidesPerView:2
      },
      768:{
        spaceBetween:15,
        slidesPerView:3
      },
      1024:{
        spaceBetween:15,
        slidesPerView:4
      },
      1280:{
        spaceBetween:10,
        slidesPerView:5
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
