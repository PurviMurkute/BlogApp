import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Blogs from "./../data/Blogs.json";

export const Read = () => {
  const { id, category } = useParams();

  const [blogsData, setBlogData] = useState({
    id: null,
    title: "",
    author: "",
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
      <h1 className="text-4xl font-bold m-5 py-3 text-center bg-gray-100">{blogsData.title}</h1>
      <div className="flex justify-evenly my-5">
      <p>Published On : <strong>{blogsData.date}</strong></p>
      <p >By : <strong>{blogsData.author}</strong></p>
      </div>
      <img src={blogsData.thumbnail} alt="img" className="h-[450px] block mx-auto rounded-lg bg-gray-100 px-10 py-5"/>
      <p className="bg-gray-100 mx-50 my-7 text-justify px-20 py-10 text-md">{blogsData.excerpt}</p>
    </div>
  );
};
