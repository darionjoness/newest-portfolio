import React from 'react'
import CryptoPrice from './img/newCryptoPrice.png'
import disneyPlusRebuild from './img/disneyPlusRebuild.png'
import timsStore from './img/tims-store.png'
import { AiFillFolder } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { HiBars2 } from "react-icons/hi2";

const ProjectsNavbar = ({ onClick }) => {
  return (
    <div className='projectsNavbar'>
        <div className="projectsNavbarItems container">
            <div className="projectsNavLeft">
                <AiFillFolder className='folderIcon' />
            </div>
            <div className="projectsNavRight">
                <li>
                    <Link className='link' to={'/'}>About</Link>
                </li>
                <li className='projectsList'>
                    <div className='projectsDot'></div>
                    <Link className='link' to={'/projects'}>Projects</Link>
                </li>
                <li>
                    <Link className='link' to={'/contact'}>Contact</Link>
                </li>
                <li>
                    <Link target={'_blank'} className='link' to={'https://docs.google.com/document/d/1GZRPLZucZDs9_hNgdt8xMm1L76ja677a-3vIdDZyZGM/edit?usp=sharing'}>Resume</Link>
                </li>
            </div>
            <div className="barsBtn">
                <button onClick={onClick}><HiBars2 /></button>
            </div>
        </div>
    </div>
  )
}

export default ProjectsNavbar