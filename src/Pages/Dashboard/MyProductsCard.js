import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const MyProductCard = ({ product }) => {
const [btn, setBTN] = useState(true);
const [available, setAvailable] = useState(true)



    console.log(product);
    const {
        _id,
        category_id,
        car_model, img,
        resale_price, original_price,
        years_of_use, seller,
        posting_time,
        

    } = product;
    console.log(
        available
    );

    useEffect(()=>{

        fetch(`http://localhost:5000/available?id=${_id}`)
        .then(res => res.json())
        .then(data => {
            if(data.length>0){
                setAvailable(false)
                console.log(data.length);
            }
            console.log({avaiable: data});
        })

    },[product])




    const handleAdvertise = () => {

        const advirtiseProduct = product;


        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advirtiseProduct)
        }).then(res => res.json())
            .then(data => {
                // navigate(from, {replace: true})


                if (data.acknowledged) {
                    console.log(data.acknowledged)



                } else {
                    toast.success("Good job!", "Services added success", "success");
                    console.log('advirtise success')
                    setBTN(false)

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
                <p>Status: available: {available}</p>
                <p>Used: {years_of_use} years.</p>
                <p>Location: {seller.location}</p>
                <p>Posted on: {
                    posting_time
                }</p>

                <div className="card-actions flex justify-between">
                    <div className="badge badge-info text-white font-bold">Original price: {original_price} BDT</div>
                    <div className="badge badge-secondary text-white font-bold">Resale Price: {resale_price} BDT</div>
                </div>
                <div className=''>
                    <div className='flex justify-between items-center'>
                        


                        

                        {
                             available?
                            <>
                                <div>
                            <label htmlFor="my-modal-6" className="btn btn-sm btn-success text-white" onClick={handleAdvertise}>Advertise</label>
                        </div>


                            <div className="badge badge-success text-white font-bold">Available</div>
                            </>
                            :
                            <>
                            <div className="badge badge-error text-white font-bold">Booked</div>
                            </>
                        }
                    </div>



                </div>

            </div>






        </div>
    );
};

export default MyProductCard;