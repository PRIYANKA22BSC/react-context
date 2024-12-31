import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import Home from './home.jsx'
import Shop from './shop.jsx'
import Service from './service.jsx'
import Payment from './payment.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='' element={<App/>}>
        <Route path='/'element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/payment' element={<Payment/>}/>
        </Route>
    )  
)

createRoot(document.getElementById('root')).render( 
    <StrictMode>    
    <RouterProvider router={router}></RouterProvider>
    </StrictMode>


)
