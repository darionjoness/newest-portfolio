import React from 'react'
import { BsPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { HiBars2 } from "react-icons/hi2";

const AboutNavbar = ({ onClick }) => {
  return (
    <div className='aboutNavbar'>
        <div className="aboutNavbarItems container">
            <div className="aboutNavLeft">
                <BsPersonFill className='personIcon' />
            </div>
            <div className="aboutNavRight">
                <li className='aboutList'>
                    <div className='aboutDot'></div>
                    <Link className='link' to={'/'}>About</Link>
                </li>
                <li>
                    <Link className='link' to={'/projects'}>Projects</Link>
                </li>
                <li>
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

export default AboutNavbar