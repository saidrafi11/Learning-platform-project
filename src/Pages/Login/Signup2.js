import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { HashLoader } from 'react-spinners';
import useToken from '../../hook/useToken';






const SignUp2 = () => {

  const { createUser, updateUserProfile, providerLogin, googleProvider } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const [token] = useToken(createdUserEmail)
  const from = location.state?.from?.pathname || '/';

  if(token){
    navigate(from, { replace: true })
  }

  const handleSignup = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value
    const role = form.role.value
    const image = event.target.image.files[0]
    setLoading(true)
    // console.log(name, email, password, image, role)

    const formData = new FormData()
    formData.append('image', image)
    const url = 'https://api.imgbb.com/1/upload?key=4f51f8f207774f0b8e370fbd62073326'

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)

        createUser(email, password)
          .then(result => {
            // console.log(email, password);
            const user = result.user;
            console.log(user)
            updateUserProfile(name, data.data.display_url, role)
              .then(() => {
                const userAcc = {
                  name: name,
                  email: user.email,
                  photoUrl: user.photoURL,
                  role: role
                }
                console.log(userAcc);
                fetch('https://wamp-server.vercel.app/insertuser', {
                  method: 'POST',
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(userAcc)
                }).then(res => res.json())
                  .then(data => {
                    console.log(data);
                    setCreatedUserEmail(user.email)
                    // getUserToken(email)
                    setLoading(false)

                    


                    if (data.acknowledged) {
                      console.log(data.acknowledged)



                    } else {
                      toast.success("User created successfully", "User created successfully", "success");

                      form.reset();
                    }
                  })
                  .catch(er => console.error(er))



              })

          })
          .catch(err => console.error(err))

      })
      .catch(err => console.log(err))




  }

  // const getUserToken = email => {
  //   fetch(`https://wamp-server.vercel.app/jwt?email=${email}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     if(data.accessToken){
  //       localStorage.setItem('accessToken', data.accessToken)
  //       navigate(from, { replace: true })
  //     }
  //   })
  // }


  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user

        console.log(user)

        const userAcc = {
          name: user?.displayName,
          email: user?.email,
          photoUrl: user?.photoURL,
          role: 'user'
        }
        console.log(userAcc);
        fetch('https://wamp-server.vercel.app/insertuser', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userAcc)
        }).then(res => res.json())
          .then(data => {
            console.log(data);
            setCreatedUserEmail(user.email)
            // getUserToken(user.email)
            setLoading(false)
            


            if (data.acknowledged) {
              console.log(data.acknowledged)



            } else {
              toast.success("Sign in success", "SSign in success", "success");
              // console.log('Sign in success')

            }
          })
          
          .catch(er => console.error(er))

          
      }).catch(error => console.error(error))
  }


  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col ">
        <h1 className="text-5xl font-bold">Signup now!</h1>
        <div className="card  w-full  ">


          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>



            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">

              </label>
            </div>



            <select name='role' className="input select-bordered select-sm w-full max-w-xs">
              <option value='user' selected>User</option>
              <option value='seller'>Seller</option>

            </select>



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


            {
              loading ?

                <>
                  <div className="form-control mt-6">

                    <input className="btn btn-info text-white" type="submit" value="Signup"></input>

                    <div className='mt-5'>
                      <button onClick={handleGoogleSignIn} className="btn btn-wide">Signup with google</button>
                    </div>




                  </div>
                </>

                :

                <>
                  <div>
                    <div className=' min-h-screen flex justify-center m-5'>
                      <HashLoader color="#36d7b7" />
                    </div>
                  </div>

                </>
            }




          </form>
          <p className='text-center pb-5'>Already have an account <Link to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp2;