import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../api/Api';
import parse from 'html-react-parser';
import dateFormat  from "dateformat";
// const now = new Date();


const Blog = () => {
  const apiURL = 'http://localhost:8080/';
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getBlogById(id);
        setBlog(response.data[0]);
      } catch (err) {
        setError('Failed to fetch blog data.');
      } 
    }
    fetchData();
  }, [id]);



  return (
    <div className='flex flex-col md:flex-row justify-center items-start p-6 bg-gray-100'>
      {blog ? (
        <>
          <div className="flex flex-col w-full md:w-[40%] p-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <h1 className='text-2xl font-bold text-gray-800 mb-4'>{blog.title}</h1>
            <div className="flex mt-3 mb-3 text-gray-500">
              <small>{dateFormat(blog.createdon, " mmmm dS, yyyy, h:MM TT" )      || 'Date not available'}</small>
            </div>
            {/* <img className='rounded-lg mb-4 shadow-md' src={apiURL+blog.image || "https://via.placeholder.com/600x400"} alt="Blog" />
             */}
              <div className="w-full h-[250px] bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${apiURL+blog.image})`}}></div>
          </div>
          <div className="flex flex-col w-full md:w-[65%] p-4 bg-white shadow-lg rounded-lg mt-6 md:mt-0 md:ml-6">
            <h2 className='text-xl font-semibold text-gray-800 mb-2'>{blog.category || 'Category not available'}</h2>
            <p className='text-gray-700'>{parse(blog.post) || 'Content not available'}</p>
          </div>
        </>
      ) : (
        <div>Blog not found</div>
      )}
    </div>
  );
};

export default Blog;
