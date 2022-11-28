import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Seller from './Seller';

const AllSellers = () => {

    const {user} = useContext(AuthContext)
    const [sellers, setSeller] = useState([])


    useEffect(()=>{

        fetch('https://wamp-server.vercel.app/allsellers')
        .then(res => res.json())
        .then(data => {
            setSeller(data)
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
        <th>Seller name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

        {
            sellers.map(seller =><Seller key={seller._id} seller={seller}></Seller>)
        }
    </tbody>
  </table>
</div>
    );
};

export default AllSellers;