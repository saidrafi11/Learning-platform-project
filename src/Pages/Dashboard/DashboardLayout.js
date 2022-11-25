import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex p-5">
                    <Outlet></Outlet>
                    
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100  text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <> <h1  className='mx-auto text-sky-900 font-bold'>Dashboard</h1></>
                       
                        
                        <li><Link to='/dashboard/addproduct'>Add a product</Link></li>
                            <li className='text-black'><Link to='/dashboard/myorders'>My orders</Link></li>
                            <li className='text-black'><Link to='/dashboard/myproducts'>My products</Link></li>
                            <li className='text-black'><Link to='/dashboard/allsellers'>All sellers</Link></li>
                            <li className='text-black'><Link to='/dashboard/allusers'>All users</Link></li>
                          
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;