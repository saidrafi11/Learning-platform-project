import { useEffect, useState } from "react";

const useToken = email => {

    const [token, setToken] = useState('')

    useEffect(() => {
        fetch(`https://wamp-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    setToken(data.accessToken)
                    // navigate(from, { replace: true })
                }
            })
    }, [email])
    return [token];
}

export default useToken;