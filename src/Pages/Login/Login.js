import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hook/useToken';

const Login = () => {

  const { login } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token]= useToken(loginUserEmail)
  console.log(token, loginUserEmail);

  const from = location.state?.from?.pathname || '/';

  if(token){
    navigate(from, { replace: true })
  }

  const handleLogin = event => {
    setLoading(true)

    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value

    // console.log(email, password)

    login(email, password)
      .then(result => {
        const currentUser = result.user;
        console.log(currentUser)
        setLoginUserEmail(currentUser?.email)
        setLoading(false)
        
      })
      .catch(err => {
        setLoading(false)
        console.log(err)})

  }
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col ">
        <h1 className="text-5xl font-bold">Login</h1>
        <div className="card  w-full  ">


          <form onSubmit={handleLogin} className="card-body">



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



            <div className="form-control mt-6">

              {
                loading ?

                <>
                <input className="btn btn-primary" type="submit" value="Login"></input>
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

              




            </div>
          </form>
          <p className='text-center pb-5'>New user <Link to='/signup'>Signup</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;