// import React, { useContext } from 'react';

// import { Link} from 'react-router-dom';
// import AuthProvider from '../../Context/AuthProvider';



// const SignUp = () => {

//     const { createUser, } = useContext(AuthProvider)
//     // const [loading, setLoading] = useState(true)
//     // const location = useLocation()
//     // const navigate = useNavigate();
//     // const from = location.state?.from?.pathname || '/';

// const handleSignup = event => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value
//     const image = event.target.image.files[0]
//     // setLoading(true)
//     console.log(name, email, password, image)

//     const formData = new FormData()
//     formData.append('image', image)
//     const url = 'https://api.imgbb.com/1/upload?key=4f51f8f207774f0b8e370fbd62073326'

//     fetch(url, {
//         method: 'POST',
//         body: formData,
//       })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)

//         createUser(email, password)
//       .then(result => {
//         console.log(email, password);
//         const user = result.user;
//         console.log(user)
//         // updateUserProfile(name, data.data.display_url)
//         // .then(()=> {
//         //     toast.success('Please check your email for varification link')
//         // })
        
//       })
//       .catch(err => console.error(err))

//       })
//       .catch(err => console.log(err))
      


    
//   }

// //   const handleGoogleSignIn = ()=>{
// //     providerLogin(googleProvider)
// //     .then(result =>{
// //         const user = result.user
// //         navigate(from, {replace: true})
// //         console.log(user)
// //     }).catch(error =>console.error(error))
// // }


//     return (
//         <div className="hero min-h-screen ">
//       <div className="hero-content flex-col ">
//         <h1 className="text-5xl font-bold">Signup now!</h1>
//         <div className="card  w-full  ">


//           <form onSubmit={handleSignup}  className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
//             </div>


//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//             </div>



//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input type="password" name="password" placeholder="password" className="input input-bordered" required />
//               <label className="label">

//               </label>
//             </div>
//             <div className='form-control'>
//               <label htmlFor='image' className='block mb-2 text-sm'>
//                 Select Image:
//               </label>
//               <input
//                 required
//                 type='file'
//                 id='image'
//                 name='image'
//                 accept='image/*'
//               />
//             </div>


//             <div className="form-control mt-6">
             
//                     <input className="btn btn-primary" type="submit" value="Signup"></input>

//                     <div className='mt-5'>
//                       <button  className="btn btn-wide">Signup with google</button>
//                     </div>
                  

                  

//             </div>
//           </form>
//           <p className='text-center pb-5'>Already have an account <Link to='/login'>Login</Link></p>
//         </div>
//       </div>
//     </div>
//     );
// };

// export default SignUp;