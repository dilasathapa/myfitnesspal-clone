import React from "react";
import BlogPost from "./BlogPost";
import BlogFooter from "./BlogFooter";
import BlogHeader from "./BlogHeader";
import BlogNavbar from "./BlogNavbar";
import BlogSlides from "./BlogSlides";

export default function BlogPostPage() {
  return (
    <div>
      <BlogHeader></BlogHeader>
      <BlogNavbar></BlogNavbar>
      <br />
      <div style={{ margin: "10px 200px" }}>
        <BlogSlides></BlogSlides>
        <br />
        <BlogPost></BlogPost>
      </div>

      <BlogFooter></BlogFooter>
    </div>
  );
}
