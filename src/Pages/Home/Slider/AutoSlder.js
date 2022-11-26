import React, { useEffect, useState } from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const AutoSlder = () => {
    const [advirtiedProduct, setAdvirtiedProduct] = useState([])
    console.log(advirtiedProduct.length);
    const [loading, setLoading]= useState(true)
    console.log(loading);
    useEffect(() => {

        fetch('http://localhost:5000/advertise')
            .then(res => res.json())
            .then(data => {
                setAdvirtiedProduct(data)
                setLoading(false)
                console.log(data);
            })

    }, [])

    return (
        <div>
            <h1 className='text-3xl text-center p-5'>Advertisements</h1>
            <div className='my-5'>

                {
                   advirtiedProduct.length>0 ? 
                   <>
                   <Carousel
                    plugins={[
                        'infinite',
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 2000,
                            }
                        },
                    ]}
                    animationSpeed={1000}
                >


                    {
                        advirtiedProduct.map(product => <img src={product.img} />)
                    }



                </Carousel>
                   </>
                   :

                   <>
                   <h1 className='text-center font-bold text-sky-900'>No Advertisements to show</h1>
                   </>
                }
            </div>
        </div>
    );
};

export default AutoSlder;