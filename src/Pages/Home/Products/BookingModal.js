import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({productForModal}) => {
console.log(productForModal);
const {user} = useContext(AuthContext)

    const {
        _id,
        category_id,
        car_model, img,
        resale_price, original_price,
        years_of_use, seller,
        posting_time,  condition, 
        sellerEmail


    } = productForModal;

    
    const edit = { available: false };
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const productName = form.productName.value
        const price = form.price.value
        const phone = form.phone.value
        const location = form.location.value
        console.log(name, email, productName, price, location, phone);


        const bookingInfo = {
            product_id: _id,
            buyerName: name,
            email: email,
            productName: productName,
            price: price,
            phone: phone,
            location: location,
            img: img

        }


        fetch('https://wamp-server.vercel.app/allbookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        }).then(res => res.json())
            .then(data => {
                // navigate(from, {replace: true})


                if (data.acknowledged) {
                    console.log(data.acknowledged)



                } else {
                    toast.success("Product booked!", "Services added success", "success");
                    console.log('product added success')
                    form.reset();


                    // fetch(`https://wamp-server.vercel.app/allproducts?_id=${_id}`)
                    //     .then(res => res.json())
                    //     .then(data => {

                    //         console.log(data);
                    //     })


                    fetch(`https://wamp-server.vercel.app/allproducts/${_id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(edit)
                    })
                        .then(res => res.json())
                        .then(data => {

                            console.log(data);
                        })
                }
            })
            .catch(er => console.error(er))


    }

    

    
    
    
    return (

      <>
      
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
        
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
                                <input htmlFor="bookingModal" className='btn' type="submit" value="Confirm"></input>
                                <label htmlFor="bookingModal" className="btn">Done</label>
                            </div>
                        </form>

                    </div>
                    {/* <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div> */}
                </div>
            </div>

      </>
    );
};

export default BookingModal;