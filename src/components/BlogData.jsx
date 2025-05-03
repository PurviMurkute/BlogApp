import React from 'react'
import { Link } from 'react-router'

export const BlogData = ({ id, title, author, date, category, excerpt }) => {
  return (
    <Link to={`/read/${id}/${category}`}>
    <div className='border-2 border-gray-300 bg-gray-50 mx-5 md:mx-10 my-7 py-4 px-5 md:px-7 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-100 hover:border-gray-300'>
      <h1 className='text-lg md:text-xl font-bold pb-1 text-justify'>{id}. {title}</h1>
      <div className='flex my-1'>
      <p className='me-3'>Author: <span className='font-bold'>{author}</span></p>
      <p className=''>Published On: <span className='font-bold'>{date}</span></p>
      </div>
      <p className='text-justify'>{excerpt.length > 100 ? excerpt.substring(0, 150) + "..." : excerpt}</p>
    </div>
    </Link>
  )
}
