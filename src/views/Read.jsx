import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Blogs from "./../data/Blogs.json";

export const Read = () => {
  const { id, category } = useParams();

  const [blogsData, setBlogData] = useState({
    id: null,
    title: "",
    author: "Aarav Patel",
    date: "",
    category: "",
    excerpt: "",
    thumbnail: "",
  });

  useEffect(() => {
    const blog = Blogs.find((blog) => 
      blog.id == id && blog.category == category
    );

    setBlogData(blog);
  }, [id, category]);
  return (
    <div>
      <h1 className="text-2xl font-bold m-5 text-center">{blogsData.title}</h1>
      <img src={blogsData.thumbnail} alt="img" className="h-[400px] block mx-auto"/>
    </div>
  );
};
