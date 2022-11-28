import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/dashboard/myproducts';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const carModel = form.carModel.value;
        const yearsOfUse = form.yearsOfUse.value;
        const originalPrice = form.originalPrice.value
        const resalePrice = form.resalePrice.value
        const category_id = form.category_id.value
        const condition = form.condition.value
        const location = form.location.value
        const time = new Date()
        const image = event.target.image.files[0]
        // setLoading(true)
        console.log(carModel,yearsOfUse,originalPrice,resalePrice,category_id, image, time, location, condition)

        // const product = {
        //     car_model: carModel,
        //     years_of_use: yearsOfUse,
        //     original_price: originalPrice,
        //     resale_price: resalePrice,
        //     category_id: category_id,
        //     img: image,
        //     posting_time: time,
        //     seller:{
        //         name: user?.displayName,
        //         location: location,
        //         img_url: user?.photoURL

        //     }
        // }


        const formData = new FormData()
    formData.append('image', image)
    const url = 'https://api.imgbb.com/1/upload?key=4f51f8f207774f0b8e370fbd62073326'

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.data.display_url)

        const product = {
            car_model: carModel,
            years_of_use: yearsOfUse,
            original_price: originalPrice,
            resale_price: resalePrice,
            category_id: category_id,
            condition: condition,
            img: data.data.display_url,
            posting_time: time,
            sellerEmail: user?.email,
            available: true,
            seller:{
                name: user?.displayName,
                location: location,
                img_url: user?.photoURL

            }
        }


        fetch('https://wamp-server.vercel.app/insertproduct', {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(product)
              }).then(res => res.json())
                  .then(data => {
                      // navigate(from, {replace: true})
              
                      
                      if (data.acknowledged) {
                          console.log(data.acknowledged)
                          
                          
      
                      }else{
                          toast.success("Product added!", "Services added success", "success");
                          navigate(from, { replace: true })
                          form.reset();
                      }
                  })
                  .catch(er => console.error(er))


      })


      

    }





    return (
        <div className="hero min-h-screen mb-5">
      <div className="hero-content flex-col ">
        <h1 className="text-3xl font-bold">Add product</h1>
        <div className="card  w-full  ">


          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Car model</span>
              </label>
              <input type="text" name="carModel" placeholder="Car model" className="input input-bordered" required />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Years of use</span>
              </label>
              <input type="text" name="yearsOfUse" placeholder="Years of use" className="input input-bordered" required />
            </div>



            <div className="form-control">
              <label className="label">
                <span className="label-text">Original price</span>
              </label>
              <input type="text" name="originalPrice" placeholder="Original Price" className="input input-bordered" required />
              <label className="label">

              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resale price</span>
              </label>
              <input type="text" name="resalePrice" placeholder="resale Price" className="input input-bordered" required />
              <label className="label">

              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
              <label className="label">

              </label>
            </div>
        

<div>
<label className="label">
                <span className="label-text">Select category</span>
              </label>
              <select name='category_id' className="input select-bordered select-sm w-full max-w-xs">
              <option value='sedan'>Sedan</option>
              <option value='suv'>SUV</option>
              <option value='sportscar'>Sports Car</option>

            </select>

</div>
<div>
<label className="label">
                <span className="label-text">Select condition</span>
              </label>
              <select name='condition' className="input select-bordered select-sm w-full max-w-xs">
              <option value='Excellent'>Excellent</option>
              <option value='Good'>Good</option>
              <option value='Fair'>Fair</option>

            </select>

</div>
            



            <div className='form-control'>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>


            <div className="form-control mt-6">

              <input className="btn btn-primary" type="submit" value="Submit"></input>

              




            </div>
          </form>
          
        </div>
      </div>
    </div>
    );
};

export default AddAProduct;