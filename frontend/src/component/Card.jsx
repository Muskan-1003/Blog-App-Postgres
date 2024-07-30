import React from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => {
  const apiURL = 'http://localhost:8080/';
  let blogData=props.blogData;
  return (
    <div className='bg-white shadow-md overflow-hidden rounded-xl'>
      <Link to={`/blog/${blogData.id}`}>
         <div className=' flex flex-col w-full'>
            <img src={apiURL+blogData.image}/>
            <div className='p-2'>
                <h2 className='mt-1 text-xl text-left truncate w-full '>{blogData.title}</h2>
                <p className='text-sm text-left opacity-70'>{blogData.category}</p>
            </div>
        </div>      
      </Link>
    </div>
  );
}

export default Card
