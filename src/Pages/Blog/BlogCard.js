import React from 'react';

const BlogCard = ({b}) => {
    const {Q, A} = b
    return (
        <div className="card-body ">
    <h2 className="card-title">{Q}</h2>
    <p>{A}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
    );
};

export default BlogCard;