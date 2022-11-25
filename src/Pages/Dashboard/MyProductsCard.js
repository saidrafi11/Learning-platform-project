

const MyProductCard = ({ product }) => {

    
    console.log(product);
    const {
        _id,
        category_id,
        car_model, img,
        resale_price, original_price,
        years_of_use, seller,
        posting_time
    } = product;



    

    return (
        <div className="card w-96 bg-base-100 shadow-xl m-5">
            <figure><img src={img} alt={car_model} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {car_model}
                    <div className="badge badge-secondary">{category_id}</div>
                </h2>
                <p>Used: {years_of_use} years.</p>
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
                          

                        </div>
                        
                    </div>

                    

                </div>
                
            </div>

       


            

        </div>
    );
};

export default MyProductCard;