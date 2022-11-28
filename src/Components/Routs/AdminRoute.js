import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hook/useAdmin';

const AdminRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email)
   console.log(isAdmin);

    const location = useLocation()
    if (loading || adminLoading) {
        return <div className='flex justify-center'>
            <HashLoader color="#36d7b7" />
        </div>
    }

    if (user && isAdmin) {
        return children;
    }


    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default AdminRoute;