import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hook/useAdmin';
import useSeller from '../../hook/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
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
                        <> <h1 className='mx-auto text-sky-900 font-bold'>Dashboard</h1></>

                        <li className='text-black'><Link to='/dashboard/myorders'>My orders</Link></li>


                        {
                            isSeller && <>

                                <li><Link to='/dashboard/addproduct'>Add a product</Link></li>

                                <li className='text-black'><Link to='/dashboard/myproducts'>My products</Link></li>

                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li className='text-black'><Link to='/dashboard/allsellers'>All sellers</Link></li>
                                <li className='text-black'><Link to='/dashboard/allusers'>All users</Link></li>

                            </>



                        }

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;