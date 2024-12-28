import React from 'react'
import {Link} from 'react-router-dom'

import './App.css'

 export default function Home(){
    return(
      <>
      <div id="first-section">
       <div id="left-div">
          <h1>Sneakers</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eos ipsum illo itaque recusandae ut delectus facere? Placeat, fugit! Sequi harum, a nobis eos eveniet cumque architecto eaque dolores? Dolorem.</p>
         
          <Link to="/shop"><button id="shop-btn">Shop Now</button></Link>
                      
       </div>
       <div id="right-div">
          <img src="image/shoe.png" height={400} id="bg-img"/>
       </div>
      </div>
      </>
    )
 }