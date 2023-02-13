import React from 'react'
import BlogArticleList from './BlogArticleList'
import BlogFooter from './BlogFooter'
import BlogHeader from './BlogHeader'
import BlogNavbar from './BlogNavbar'
import BlogSlides from './BlogSlides'
import blogStyle from "./BlogStyles.module.css";

export default function BlogPage() {
  return (
    <div>

        <div className={blogStyle.bpage_main_cont}>
        <BlogSlides></BlogSlides>
        <br />
        <BlogArticleList></BlogArticleList>
       
        </div>

        <BlogFooter></BlogFooter>
    </div>
  )
}
