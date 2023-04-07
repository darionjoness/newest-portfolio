import React from 'react'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const ContactInfo = () => {
  return (
    <div className='contactInfo'>
        <div className="contactInfoItems">
            <h1>Get in touch with me!</h1>
            <div className="contactBox">
                <h2>Want to connect?</h2>
                <div className="emailLink">
                    <a className='emailMe' href=''>👋🏼 Email Me</a>
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
            </div>
        </div>
    </div>
  )
}

export default ContactInfo