import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blog = () => {




    const blogs = useLoaderData()
    console.log(blogs);
    return (
        <div className='p-5'>

      <div className="card w-full bg-base-100 shadow-xl">


        
        {/* blogs card */}


        {
          blogs.map(b => <BlogCard b={b}></BlogCard>)
        }
      </div>


    </div>
    );
};

export default Blog;