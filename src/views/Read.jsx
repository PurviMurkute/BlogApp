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
      <h1 className="text-xl md:text-4xl font-bold m-5 py-3 text-center bg-gray-100">{blogsData.title}</h1>
      <div className="flex justify-evenly my-5 mx-5 md:mx-1">
      <p className="me-3 md:me-1">Published On : <strong>{blogsData.date}</strong></p>
      <p >By : <strong>{blogsData.author}</strong></p>
      </div>
      <img src={blogsData.thumbnail} alt="img" className="h-[200px] md:h-[450px] block mx-auto rounded-lg bg-gray-100 px-2 md:px-10 py-5"/>
      <p className="bg-gray-100 mx-4 md:mx-50 my-5 md:my-7 text-justify px-5 md:px-20 py-4 md:py-10 text-md md:text-lg">{blogsData.excerpt}</p>
    </div>
  );
};
