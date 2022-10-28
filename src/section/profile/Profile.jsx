import React from 'react'
import "./profile.css"
import profile__img from "../../assert/profile__img.png"
import Avatar_share from "../../assert/Avatar_share.png"
import dot_Icon from "../../assert/dot_Icon.png"
import hoverstate from "../../assert/hoverstate.png"

export default function Profile() {
  return (
    <div className='task__profile'>
      <img src={Avatar_share} alt= "share_logo" className='share_icon'/>
      <img src={dot_Icon} alt="dot" className='dot_logo' />
      <div className='task__profile-img'>
        <img src={profile__img} alt="profile pics" className='pro__img' id="profile__img" /> 
        <div className='overlay'>
               <img src={hoverstate} className="hover_img" alt ="hover__img" />
          </div>          
      </div>
      
      <p id="twitter" >Annette Black</p>  
         
    
    </div>
  )
}
