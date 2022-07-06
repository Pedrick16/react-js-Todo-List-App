import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

/*Styles */
import './Styles/app.scss'

/*Components */
import App from './App'



ReactDom.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
 ,document.getElementById('root'))