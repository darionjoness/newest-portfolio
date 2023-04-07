import React from 'react'
import AboutMe from './img/aboutMe.jpg'

const AboutInfo = () => {
  return (
    <div className='aboutInfo'>
        <div className="aboutInfoItems container">
            <img src={AboutMe} alt="" />
            <h1 className="ribbon">
                <strong className="ribbon-content">Front end Developer</strong>
            </h1>
            <div className="aboutInfoParagraph">
                <p>Hi, my name is Darion Jones! I am a front end Developer from Stillwater, Oklahoma. I love to learn and build complex web applications!</p>
            </div>
        </div>
    </div>
  )
}

export default AboutInfo