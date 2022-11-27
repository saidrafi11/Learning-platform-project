import React, { useEffect, useState } from 'react';

const useAdmin = email => {

    const [isAdmin, setIsAdmin] =useState(false)

    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/seller/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setIsAdmin(data.isSeller)
            })
        }
    },[email])


    return [isAdmin]
};

export default useAdmin;