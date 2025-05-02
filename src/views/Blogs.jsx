import React from "react";
import blogdata from "./../data/Blogs.json";
import { BlogData } from "../components/BlogData";

export const Blogs = () => {
  return (
    <div>
      <h1 className="m-3 text-4xl font-bold text-center">All Blogs</h1>
      {blogdata.map((blogscontent) => {
        const { id, title, author, date, category, excerpt } =
          blogscontent;

        return (
          <BlogData 
          id={id}
          title={title}
          author={author}
          date={date}
          category={category}
          excerpt={excerpt}/>
        )
      })}
    </div>
  );
};
