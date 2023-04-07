import React from 'react'
import { BsPhoneFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { HiBars2 } from "react-icons/hi2";

const ContactNavbar = ({ onClick }) => {
  return (
    <div className='contactNavbar'>
        <div className="contactNavbarItems container">
            <div className="contactNavLeft">
                <BsPhoneFill className='contactIcon' />
            </div>
            <div className="contactNavRight">
                <li>
                    <Link className='link' to={'/'}>About</Link>
                </li>
                <li>
                    <Link className='link' to={'/projects'}>Projects</Link>
                </li>
                <li className='contactList'>
                    <div className='contactDot'></div>
                    <Link className='link' to={'/contact'}>Contact</Link>
                </li>
                <li>
                    <Link target={'_blank'} className='resumeBtn' to={'https://docs.google.com/document/d/1GZRPLZucZDs9_hNgdt8xMm1L76ja677a-3vIdDZyZGM/edit?usp=sharing'}>Resume</Link>
                </li>
            </div>
            <div className="barsBtn">
                <button onClick={onClick}><HiBars2 /></button>
            </div>
        </div>
    </div>
  )
}

export default ContactNavbar