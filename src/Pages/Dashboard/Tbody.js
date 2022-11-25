import React from 'react';

const Tbody = ({order}) => {
    const {buyerName, email, img
, location, price,productName
,} = order
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
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{productName}</div>
              
            </div>
          </div>
        </td>
        <td>
         {price}
          <br/>
          
        </td>
        <td>{location}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Action</button>
        </th>
      </tr>

      
     
  
     
    
   
    );
};

export default Tbody;