import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {name , img, category_id} = category;
    return (
        <Link to={`/category/${category_id}`} className="card w-96 bg-base-100 shadow-xl image-full m-2">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-4xl font-extrabold  text-center my-auto">{name}</h2>
                
                <div className="card-actions justify-end">
                    
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;