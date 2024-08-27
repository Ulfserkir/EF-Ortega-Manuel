import React from 'react';
import { Fragment } from 'react';
import './Footer.css';
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Youtube from '../assets/youtube.png'

function Footer() {
  return (
    <>
    <div className='Footer'>
        <div className='Info'>
            <p>www.delipizza.com</p>
            <p>Síguenos en facebook</p>
        </div>
        
        <div className="Iconos">
        <img src={Facebook} alt="Facebook" className="social-icon" />
        <img src={Instagram} alt="Instagram" className="social-icon" />
        <img src={Youtube} alt="YouTube" className="social-icon" />
        </div>
    </div>
    </>
  );
}

export default Footer;
