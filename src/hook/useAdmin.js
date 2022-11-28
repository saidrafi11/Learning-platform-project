import React, { useEffect, useState } from 'react';

const useAdmin = email => {

    const [isAdmin, setIsAdmin] =useState(false)
    const [adminLoading, setAdminLoading]= useState(true)

    useEffect(()=>{
        if(email){
            fetch(`https://wamp-server.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data =>{
                // console.log(data);
                setIsAdmin(data.isAdmin)
                setAdminLoading(false)
                console.log(isAdmin);
            })
        }
    },[email])


    return [isAdmin, adminLoading]
};

export default useAdmin;