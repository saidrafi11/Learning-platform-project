import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setSeller] =useState(false)

    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/seller/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setSeller(data.isSeller)
            })
        }
    },[email])
    return [isSeller]
}

export default useSeller;