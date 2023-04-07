import React from 'react'
import AboutMe from './img/aboutMe.jpg'
import { motion } from 'framer-motion'

const AboutInfo = () => {
  return (
    <div className='aboutInfo'>
        <div className="aboutInfoItems container">
            <motion.img 
            animate={{scale: 1}} 
            initial={{scale: 0}} 
            transition={{duration: 0.5, delay: 0.3}}
            src={AboutMe} 
            alt="" />
            <motion.h1 
            transition={{duration: 0.5}} 
            initial={{width: '0%'}} 
            animate={{width: '40%'}} 
            className="ribbon">
                <strong className="ribbon-content">Front end Developer</strong>
            </motion.h1>
            <motion.div 
            animate={{scale: 1}} 
            initial={{scale: 0}} 
            transition={{duration: 0.5, delay: 0.3}}
            className="aboutInfoParagraph">
                <p>Hi, my name is Darion Jones! I am a front end Developer from Stillwater, Oklahoma. I love to learn and build complex web applications!</p>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutInfo