import {NavLink,Link} from 'react-router-dom'
import React from 'react'
import './App.css'


export default function Header(){
    return(
<div id="navbar">
<div id="logo-div">
    <Link to='' id="logo">Logo</Link>
    </div>
<div id='nav-links-div'>
    <NavLink to='/' className={({isActive})=>(isActive ? "active-link" : "inactive-link")}>
        Home</NavLink>
        <NavLink to='/shop' className={({isActive})=>(isActive ? "active-link" : "inactive-link")}>
        Shop</NavLink>
        <NavLink to='/service' className={({isActive})=>(isActive ? "active-link" : "inactive-link")}>
        Service</NavLink>
</div>

</div>
    )
}