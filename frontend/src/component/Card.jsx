import React from 'react'

const Card = (props) => {
  let blogData=props.blogData;
  return (
    <div className='bg-white shadow-md overflow-hidden rounded-xl'>
         <div className=' flex flex-col w-full'>
            <img src={blogData.image}/>
            <div className='p-2'>
                <h2 className='mt-1 text-xl text-left'>{blogData.title}</h2>
                <p className='text-sm text-left opacity-70'>{blogData.description}</p>
            </div>
        </div>      
    </div>
  )
}

export default Card
