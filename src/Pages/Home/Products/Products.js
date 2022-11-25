import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();
    
    
    return (
        <div className='flex flex-wrap justify-center'>
            

            {
                products.map(product=><ProductCard product={product}></ProductCard>)
            }
        </div>
    );
};

export default Products;