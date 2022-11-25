import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import User from './User';

const AllUsers = () => {
    const {user} = useContext(AuthContext)
    const [users, setUser] = useState([])

    useEffect(()=>{

        fetch('http://localhost:5000/allusers')
        .then(res => res.json())
        .then(data => {
            setUser(data)
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
              <th>User name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
      
              {
                  users.map(user =><User key={user._id} user={user}></User>)
              }
          </tbody>
        </table>
      </div>
    );
};

export default AllUsers;