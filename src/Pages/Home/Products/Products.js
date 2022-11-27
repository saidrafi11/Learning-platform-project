
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
   
    const products = useLoaderData();
    
    // console.log(products);
    
    return (
        <div className='flex flex-wrap justify-center'>
            

            {
                products?.map(product =><ProductCard key={product._id} product={product}></ProductCard>)
            }


        </div>
    );
};

export default Products;