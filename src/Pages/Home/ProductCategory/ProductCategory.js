import React from 'react';
import CategoryCard from './CategoryCard';

const ProductCategory = () => {
    const catagories = [
        {
            category_id: 'sedan',
            name:'Sedan',
            img: 'https://imgd.aeplcdn.com/600x337/n/cw/ec/96443/5-series-exterior-right-front-three-quarter-4.jpeg?q=75'
        },
        {
            category_id: 'suv',
            name:'SUV',
            img: 'https://www.hyundai.com.mx/content/dam/hyundaimx/mx/image/modelos/hibridos/tucson/comparadores/Seccion-Tucson-Componente-1-1600x590-1.jpg'
        },
        {
            category_id: 'sportscar',
            name:'Sports car',
            img: 'https://s7d1.scene7.com/is/image/scom/PZE_G1U_360e_033?$750p$'
        }
    ]

    return (
        <>
        <h2 className='text-3xl text-center font-bold'>Products by category</h2>
         <div className='flex flex-wrap justify-center'>
            
            {
                catagories.map(category=> <CategoryCard category={category}></CategoryCard>)
            }
        </div>
        </>
       
    );
};

export default ProductCategory;