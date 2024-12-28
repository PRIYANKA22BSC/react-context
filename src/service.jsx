import React from 'react'
import './App.css'

    
export default function Service(){
   return(
      <>
      <div id="contact-section-form">
      <form id="form">
        <label><b>Name:</b>  <input type="text" placeholder="Your Name" className="input" id="name" required/></label>
        <label><b>Email:</b>  <input type="email" placeholder="Your Email" className="input" id="email"  required/></label>
        <label><b>Phone:</b> <input type="number"  placeholder="Your Phone Number" className="input"    id="phone"   required/></label>
        <button id="submit-btn">Submit</button>
      </form>
    </div>
      </> 
   )
}