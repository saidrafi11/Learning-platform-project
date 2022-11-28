
import React from 'react';
import toast from 'react-hot-toast';

const User = ({user}) => {
    const {_id, name, email, photoURL, role} = user;

    const handleDlt = _id => {
      const agree = window.confirm(`Are you sure you want to delete ${name} ?`)
    
      if(agree){
        fetch(`https://wamp-server.vercel.app/users/${_id}`, {
          method: 'DELETE',
    
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
            toast.success('User deleted!')

          }
          else{
            toast.error('Delete operation failed!')
          }
          
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