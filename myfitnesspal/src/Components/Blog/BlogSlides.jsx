import React from 'react'
import BlogSlideItem from './BlogSlideItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useSwiper } from 'swiper/react';

export default function BlogSlides() {
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
      </SwiperSlide>
      <SwiperSlide>
      <BlogSlideItem image={'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg'} title={'These 10 Sugar Swaps Are Sure to Boost Heart Health'}></BlogSlideItem>
      </SwiperSlide>
      <SwiperSlide>
      <BlogSlideItem image={'https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg'} title={'These 10 Sugar Swaps Are Sure to Boost Heart Health'}></BlogSlideItem>
      </SwiperSlide>
    
    </Swiper>

   
    </div>
  )
}
