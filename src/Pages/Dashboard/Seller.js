import React from 'react';
import toast from 'react-hot-toast';

const Seller = ({seller}) => {
    const {_id, name, email, photoURL, role} = seller;
    // console.log(seller);

const handleDlt = _id => {
  const agree = window.confirm(`Are you sure you want to delete ${name} ?`)

  if(agree){
    fetch(`https://wamp-server.vercel.app/sellers/${_id}`, {
      method: 'DELETE',

    })
    .then(res => res.json())
    .then(data => {

    })
  }
}


const isVerified = {isVerifiedSeller: true};
const verify = (_id)=>{



  fetch(`https://wamp-server.vercel.app/allusers/${_id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type':'application/json'
                        },
                        body: JSON.stringify(isVerified)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('Verified!')
                            console.log(data);
                        })
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
        <th>
          <button onClick={()=>verify(_id)}  className="btn btn-ghost btn-xs">Verify</button>
        </th>
      </tr>
    );
};

export default Seller;