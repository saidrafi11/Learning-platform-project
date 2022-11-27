
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import BookingModal from './BookingModal';

const ProductCard = ({ product }) => {
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

    const [productForModal, setProductForModal] = useState([])
    

    useEffect(()=>{

        fetch(`http://localhost:5000/product?id=${_id}`)
        .then(res => res.json())
        .then(data => {

            setProductForModal(data);
           
        })

    },[])
    console.log(productForModal);

    // useEffect(()=>{

    //     fetch(`http://localhost:5000/product?id=${_id}`)
    //     .then(res => res.json())
    //     .then(data => {

    //         setProductForModal(data);
           
    //     })

    // },[])



    
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
                        <label htmlFor="my-modal-6" className="btn btn-sm btn-success text-white">Book now</label>
                    </div>

                </div>

            </div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />


       {/* {
        productForModal?.map(product => <BookingModal product={product}></BookingModal>)
       }     */}
 <BookingModal productForModal={productForModal} product={product}
 handleSubmit={handleSubmit}
 user={user}
 ></BookingModal>

        </div>
    );
};

export default ProductCard;