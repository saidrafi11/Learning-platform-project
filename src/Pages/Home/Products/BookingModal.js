import React, { useEffect, useState } from 'react';

const BookingModal = ({productForModal,product, handleSubmit, user}) => {
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



    

    
    
    
    return (
        <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center p-5">Confirm your booking</h3>
                    <div>
                        <form onSubmit={handleSubmit} >
                            <div className='grid grid-rows-6 grid-flow-col gap-4 justify-center w-full'>
                                <input name='name' type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs" value={user?.displayName} />

                                <input name='email' type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" value={user?.email} />

                                <input name='productName' type="text" placeholder="Your name"
                                    value={car_model} disabled className="input input-bordered w-full max-w-xs" />
                                <input name='price' type="text" placeholder="Price" value={resale_price} disabled className="input input-bordered w-full max-w-xs " />
                                <input name='phone' type="text" placeholder="Phone number" className="input input-bordered w-full max-w-xs " />
                                <input name='location' type="text" placeholder="Location" className="input input-bordered w-full max-w-xs " />


                            </div>



                            <div className="modal-action">
                                <input htmlFor="my-modal-6" className='btn' type="submit" value="Confirm"></input>
                                <label htmlFor="my-modal-6" className="btn">Done</label>
                            </div>
                        </form>

                    </div>
                    {/* <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
    );
};

export default BookingModal;