import React from 'react';

const User = ({user}) => {
    const {name, email, photoURL, role} = user
    return (
        
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              
            </div>
          </div>
        </td>
        <td>
         {email}
          <br/>
          
        </td>
        <td>{role}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Action</button>
        </th>
      </tr>

    
    );
};

export default User;