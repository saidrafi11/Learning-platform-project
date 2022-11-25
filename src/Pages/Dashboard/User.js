import React from 'react';

const User = ({user}) => {
    const {_id, name, email, photoURL, role} = user;

    const handleDlt = _id => {
      const agree = window.confirm(`Are you sure you want to delete ${name} ?`)
    
      if(agree){
        fetch(`http://localhost:5000/users/${_id}`, {
          method: 'DELETE',
    
        })
        .then(res => res.json())
        .then(data => {
    
        })
      }
    }


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
          <button onClick={()=>handleDlt(_id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>

    
    );
};

export default User;