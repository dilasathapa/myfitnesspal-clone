import React from "react";
import BlogPost from "./BlogPost";
import BlogFooter from "./BlogFooter";
import BlogHeader from "./BlogHeader";
import BlogNavbar from "./BlogNavbar";
import BlogSlides from "./BlogSlides";
import blogStyle from "./BlogStyles.module.css";

export default function BlogPostPage() {
  return (
    <div>
      <div className={blogStyle.bpage_main_cont}>
        <BlogSlides></BlogSlides>
        <br />
        <BlogPost></BlogPost>
      </div>

      <BlogFooter></BlogFooter>
    </div>
  );
}
