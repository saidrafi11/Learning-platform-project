import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ProductCard from '../Home/Products/ProductCard';
import MyProductCard from './MyProductsCard';

const MyProducts = () => {

    const {user} = useContext(AuthContext)
const [myProducts, setMyProducts] = useState([])



    useEffect(()=>{

        fetch(`http://localhost:5000/my-products?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyProducts(data)
            console.log(data);
        })

    },[user])


    return (
        <div>
            <>
        <h2 className='text-3xl text-center font-bold'>My products</h2>
         <div className='flex flex-wrap justify-center'>
            
         {
                myProducts.map(product=><MyProductCard product={product}></MyProductCard>)
            }
        </div>
        </>
        </div>
    );
};

export default MyProducts;