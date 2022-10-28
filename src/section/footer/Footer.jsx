import React from 'react';
import "./footer.css";
import { vector, footer_text, i4G } from './import';

export default function Footer() {
  return (
    <div className='footer__container'>
        <div  className="zuri">
            <img src={vector} alt= "zuri_intern_logo" className='zuri_intern'/>
        </div>
        <div  className="fot__text">     
            <img src={footer_text} className="text" alt= "footer_txt-logo" />
        </div>
        <div className='i4gg'>
            <img src={i4G} className="i4gm" alt="i4g__logo"/>
        </div>
        
    </div>
   
  )
}
