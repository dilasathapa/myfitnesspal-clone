import React from 'react'
import BlogArticleList from './BlogArticleList'
import BlogFooter from './BlogFooter'
import BlogHeader from './BlogHeader'
import BlogNavbar from './BlogNavbar'
import BlogSlides from './BlogSlides'


export default function BlogPage() {
  return (
    <div>

        <BlogHeader></BlogHeader>
        <BlogNavbar></BlogNavbar>
        <br />
        <div style={{margin:'10px 200px'}}>
        <BlogSlides></BlogSlides>
        <br />
        <BlogArticleList></BlogArticleList>
       
        </div>

        <BlogFooter></BlogFooter>
    </div>
  )
}
