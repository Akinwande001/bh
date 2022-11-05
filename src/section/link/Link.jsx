import React from 'react'
import "./link.css"

export default function Link() {
  return (
      
    <div className='task__content-link__container'>
        <div className='task__content-links'>
          <button type='button' className='twitt'>Twitter Link</button>
         </div>
         <div className='task__content-links'>
          <button type='button'  ><a href ="https://training.zuri.team/"  id= "btn__zuri">Zuri Team</a></button>
         </div>
        <div className='task__content-links'>
          <button type='button' ><a href ="http://books.zuri.team" id= "books">Zuri Book</a></button>
        </div>
        <div className='task__content-links'>
          <button type='button'  ><a href ="https://books.zuri.team/python-for-beginners?ref_" id= "book__python" >Python Books</a></button>
        </div>
        <div className='task__content-links'>
          <button type='button'  ><a href ="https://background.zuri.team" id= "pitch">Background Check for Coders</a></button>
        </div>
        <div className='task__content-links'>
          <button type='button' ><a href ="https://books.zuri.team/design-rules" id= "book__design">Design Books</a></button>
        </div>   
        <Link to="/contact" id="contact" className='link-button' rel="noreferrer">Contact Me</Link>
   </div>
  )
}
