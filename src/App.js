import React from "react";
import {  Route, Routes} from 'react-router-dom'

/*Components */
import Home from './Components/Home'
import TodoList from './Components/Todolist'



const App = () =>{
    return(
        <>
        <div className="app-main">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/todolist" element={<TodoList/>} />
                <Route path="/" element={<Home/>} />
            </Routes>

        </div>
        </>

    )
}

export default App