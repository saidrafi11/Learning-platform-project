import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log(user);
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Homepage</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-5 mr-2' src='https://cdn-icons-png.flaticon.com/512/7782/7782751.png'></img>WAMP</Link>
      </div>



      <div className="navbar-end">


        {
          user?.uid ?

          <>
          <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to='/dashboard/myorders' className="justify-between">
                Dashboard
                <span className="badge">New</span>
              </Link>
            </li>
            {/* <li><Link to='/addproduct'>Add a product</Link></li> */}
            <li><a onClick={handleLogOut}>Logout</a></li>
          </ul>
          
        </div>
        <div>
        <label htmlFor="dashboard-drawer"  tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        </div>
        
</>

          
        :
           <div>
        <Link to='/login' className="btn btn-outline btn-info text-white">Login</Link>
        </div>


        
      }
        

        

      </div>
    </div>
  );
};

export default Navbar;