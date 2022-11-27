import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Tbody from './Tbody';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const [myOrders, setMyOrders] = useState([])


    useEffect(()=>{

        fetch(`http://localhost:5000/my-orders?email=${user?.email}`,{
          headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
            setMyOrders(data)
            console.log(data);
        })

    },[user])

    
    
  


    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Location</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

        {
            myOrders?.map(order => <Tbody key={order._id} order={order}></Tbody>)
        }
    </tbody>
  </table>
</div>
    );
};

export default MyOrders;