import React from "react";
import {useNavigate} from 'react-router-dom'


const Home =() =>{
    const navigate = useNavigate()
    const handleOnClick =() =>{
        navigate('/todolist')
    }
 

    return(
        <>
        <div className="home-mains">
        <div className="home-main">
            <h1>Welcome To My TodoList</h1>
            <button onClick={handleOnClick}>Start Now</button>
        </div>

        </div>
        </>
    )
}

export default Home