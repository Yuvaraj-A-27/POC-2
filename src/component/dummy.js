import axios from 'axios'
import React, { useEffect } from 'react'

function Dummy(){

    useEffect(()=>{
        axios.post('https://fakestoreapi.com/auth/login',{
            username: "johnd",
            password: "m38rmF$"
        })
        .then(res => console.log(res))
    },[])

    return(
        <div>
            <p>checking</p>
        </div>
    )
}

export default Dummy;