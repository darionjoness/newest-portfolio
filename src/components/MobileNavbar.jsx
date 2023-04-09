import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

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
                <Link target={'_blank'} onClick={hideMobileNav} to={'https://docs.google.com/document/d/1GZRPLZucZDs9_hNgdt8xMm1L76ja677a-3vIdDZyZGM/edit?usp=sharing'} className='mobileResumeBtn'>Resume</Link>
            </li>
            <button onClick={onClick} className='closeMobileNavBtn'><AiOutlineClose /></button>
            <div className="mobileSocialLinks">
                <a target={'_blank'} href="https://www.linkedin.com/in/darion-jones-52a001227/"><AiFillLinkedin /></a>
                <a target={'_blank'} href="https://github.com/darionjoness"><AiFillGithub /></a>
            </div>
        </div>
    </div>
  )
}

export default MobileNavbar