
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const ProductCard = ({ product }) => {

    const { user } = useContext(AuthContext)
    const [isVerifiedSeller, setIsVerifiedSeller] =useState(false)
   

    



    const {
        _id,
        category_id,
        car_model, img,
        resale_price, original_price,
        years_of_use, seller,
        posting_time,  condition, 
        sellerEmail


    } = product;

    
    useEffect(()=>{

        fetch(`http://localhost:5000/verifiedseller?email=${
            sellerEmail}`)
        .then(res => res.json())
        .then(data => {

            if(data.length > 0 ){
                setIsVerifiedSeller(true)
               
            }
           
        })

    },[])


    const edit = { available: "Not available" };

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


        fetch('http://localhost:5000/allbookings', {
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


                    // fetch(`http://localhost:5000/allproducts?_id=${_id}`)
                    //     .then(res => res.json())
                    //     .then(data => {

                    //         console.log(data);
                    //     })


                    fetch(`http://localhost:5000/allproducts/${_id}`, {
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
        <div className="card w-96 bg-base-100 shadow-xl m-5">
            <figure><img src={img} alt={car_model} /></figure>
            <div className="card-body">
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

                <div className="card-actions flex ">
                    <div className="badge badge-info">Original price: {original_price}</div>
                    <div className="badge badge-secondary">Resale Price: {resale_price}</div>
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
                        <label htmlFor="my-modal-6" className="btn btn-sm btn-success text-white">Book now</label>
                    </div>

                </div>

            </div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />


            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center p-5">Confirm your booking</h3>
                    <div>
                        <form onSubmit={handleSubmit} >
                            <div className='grid grid-rows-6 grid-flow-col gap-4 justify-center w-full'>
                                <input name='name' type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs" defaultValue={user?.displayName} />

                                <input name='email' type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" defaultValue={user?.email} />

                                <input name='productName' type="text" placeholder="Your name"
                                    defaultValue={car_model} disabled className="input input-bordered w-full max-w-xs" />
                                <input name='price' type="text" placeholder="Price" defaultValue={resale_price} disabled className="input input-bordered w-full max-w-xs " />
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


        </div>
    );
};

export default ProductCard;