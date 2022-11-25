import React from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const AutoSlder = () => {
    return (
        <div className='my-5'>
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
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_hUYF0-6lBkcpDF6zd4sLEW-o8bS-oOxFg&usqp=CAU' />
                {/* <img src={imageTwo} /> */}
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRRhhkTZzwO203i_Zd77Um7kh48xkLpgvhQ&usqp=CAU' />
            </Carousel>
        </div>
    );
};

export default AutoSlder;