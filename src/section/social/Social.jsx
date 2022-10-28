import React from 'react'
import "./social.css" 
import {icon, slack} from "./import"

export default function Social() {
  return (
    <div className='social__container'>
       <div className='social__container-icon'>
        <img src={icon} alt= "icon"/>
        <img src={slack} alt = "slack"  id="slack"/>
       </div> 

       
    </div>
  )
}
