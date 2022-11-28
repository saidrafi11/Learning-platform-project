
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

const Products = () => {
   
    const products = useLoaderData();
    
    // console.log(products);
    const [productForModal, setProductForModal] = useState([])
    
    return (
        <div>
            <div className='flex flex-wrap justify-center'>
            

            {
                products?.map(product =><ProductCard key={product._id} product={product}
                    setProductForModal={setProductForModal}></ProductCard>)
            }





        </div>


        <div>

<BookingModal 
 productForModal={productForModal}></BookingModal> 
</div>
        </div>
    );
};

export default Products;