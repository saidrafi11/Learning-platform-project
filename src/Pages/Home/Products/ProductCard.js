
import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import BookingModal from './BookingModal';

const ProductCard = ({ product , setProductForModal}) => {
    // console.log(product);

    const { user } = useContext(AuthContext)
    const [isVerifiedSeller, setIsVerifiedSeller] =useState(false)
    
   
    // console.log(productForModal);
   
    const {
        _id,
        category_id,
        car_model, img,
        resale_price, original_price,
        years_of_use, seller,
        posting_time,  condition, 
        sellerEmail


    } = product;

    
    // const postTime = format(posting_time, "PP")
    // console.log(postTime);
    

    // useEffect(()=>{

    //     fetch(`https://wamp-server.vercel.app/product?id=${_id}`)
    //     .then(res => res.json())
    //     .then(data => {

    //         setProductForModal(data);
           
    //     })

    // },[])
    // console.log(productForModal);

    // useEffect(()=>{

    //     fetch(`https://wamp-server.vercel.app/product?id=${_id}`)
    //     .then(res => res.json())
    //     .then(data => {

    //         setProductForModal(data);
           
    //     })

    // },[])



    
    useEffect(()=>{

        fetch(`https://wamp-server.vercel.app/verifiedseller?email=${
            sellerEmail}`)
        .then(res => res.json())
        .then(data => {

            if(data.length > 0 ){
                setIsVerifiedSeller(true)
               
            }
           
        })

    },[])


    

    

    return (
        <div className="card w-96 bg-base-100 shadow-xl m-5 ">
    
           <figure><img src={img} alt={car_model} /></figure>
           


            
            <div className="card-body h">

                
                <h2 className="card-title">
                    {car_model}
                    <div className="badge badge-secondary">{category_id}</div>
                </h2>
                <p>Used: {years_of_use} years.</p>
                <p>Condition: {condition}</p>
                <p>Location: {seller.location}</p>
                <p>Posted on: {
                  posting_time
                }</p>

                <div className="card-actions flex justify-between">
                    <div className="badge badge-info text-white font-bold">Original price: {original_price} BDT</div>
                    <div className="badge badge-secondary text-white font-bold">Resale Price: {resale_price} BDT</div>
                </div>
                <div className='flex justify-between my-auto mt-3'>
                    <div className='flex justify-between '>
                        <div className="avatar max-w-3/4">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={seller.img_url} />
                            </div>

                        </div>
                        <div>
                            <div className='flex items-center'>
                                <div>
                                    <h1 className='mx-3 font-semibold flex-1'>{seller.name}</h1>
                                </div>
                                <div>

                                    {
                                        isVerifiedSeller ?
                                            <>
                                                <img className='w-4' src='https://cdn-icons-png.flaticon.com/512/6364/6364343.png' />
                                            </>
                                            :
                                            <>


                                            </>
                                    }

                                </div>

                            </div>


                            <h1 className='mx-3 
                    '>Seller</h1>




                        </div>
                    </div>

                    <div>
                        <label onClick={()=> setProductForModal(product)} htmlFor="bookingModal" className="btn btn-sm btn-success text-white">Book now</label>
                    </div>

                </div>

            </div>

            {/* <input type="checkbox" id="my-modal-6" className="modal-toggle" /> */}


       {/* {
        productForModal?.map(product => <BookingModal product={product}></BookingModal>)
       }     */}
 {/* <BookingModal productForModal={productForModal} product={product}
 handleSubmit={handleSubmit}
 user={user}
 ></BookingModal> */}

        </div>
    );
};

export default ProductCard;