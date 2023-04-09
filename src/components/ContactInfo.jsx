import React from 'react'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <div className='contactInfo'>
        <div className="contactInfoItems">
            <motion.h1
            initial={{x: -1000}}
            animate={{x: 0}}
            transition={{duration: 0.7, delay: 0.3}}
            >Get in touch with me!</motion.h1>
            <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}} 
            transition={{duration: 0.5}}
            className="contactBox">
                <h2>Want to connect?</h2>
                <div className="emailLink">
                    <a className='emailMe' href='mailto: darionjones2555@gmail.com'>👋🏼 Email Me</a>
                </div>
                <p>darionjones2555@gmail.com</p>
                <div className="contactLinks">
                    <a target={'_blank'} href="https://www.linkedin.com/in/darion-jones-52a001227/">
                        <AiFillLinkedin />
                    </a>
                    <a target={'_blank'} href="https://github.com/darionjoness">
                        <AiFillGithub />
                    </a>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default ContactInfo