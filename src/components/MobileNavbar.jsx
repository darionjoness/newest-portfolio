import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MobileNavbar = ({ toggleMobileNav, onClick, hideMobileNav }) => {
  return (
    <div className={`mobileNavbar ${toggleMobileNav ? 'show' : ''}`}>
        <div className="mobileNavbarItems">
            <li>
                <Link onClick={hideMobileNav} className='mobileLink' to={'/'}>About</Link>
            </li>
            <li>
                <Link onClick={hideMobileNav} className='mobileLink' to={'/projects'}>Projects</Link>
            </li>
            <li>
                <Link onClick={hideMobileNav} className='mobileLink' to={'/contact'}>Contact</Link>
            </li>
            <li>
                <Link target={'_blank'} onClick={hideMobileNav} to={'https://docs.google.com/document/d/1GZRPLZucZDs9_hNgdt8xMm1L76ja677a-3vIdDZyZGM/edit?usp=sharing'} className='resumeBtn'>Resume</Link>
            </li>
            <button onClick={onClick} className='closeMobileNavBtn'><AiOutlineClose /></button>
        </div>
    </div>
  )
}

export default MobileNavbar