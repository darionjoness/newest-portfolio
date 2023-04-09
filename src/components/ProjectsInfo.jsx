import React from 'react'
import CryptoPrice from './img/newCryptoPrice-2.png'
import disneyPlusRebuild from './img/disneyPlusRebuild-2.png'
import timsStore from './img/tims-store-2.png'
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from 'framer-motion';

const ProjectsInfo = () => {
  return (
    <div className='projectsInfo'>
        <div className="projectsInfoItems container">
            <motion.div 
            animate={{x: 0}}
            initial={{x: -1000}}
            transition={{duration: 0.7}}
            className="project">
                <div className="projectImg">
                    <img src={CryptoPrice} alt="" />
                </div>
                <div className="projectText">
                    <h2>CryptoPrice.io</h2>
                    <p>CryptoPrice.io is a crypto app that shows the prices and charts of the selected crypto. I used an api that updates every 24 hours to accurately show the current price. Browse through and find the coin you would like to view. You can also view your own assets using the hamburger button in the top left and you can add money to your account but you can't spend it. You can also view exchanges, add item to your favorite list and more.</p>
                    <p>Tech Used: React, Typescript</p>
                    <div className="socialLinks">
                        <a target={'_blank'} href="https://cryptopriceio.netlify.app/">
                            <AiFillEye className='socialIcon' />
                        </a>
                        <a target={'_blank'} href="https://github.com/darionjoness/CryptoPriceApp">
                        <AiFillGithub className='socialIcon' />
                        </a>
                    </div>
                </div>
            </motion.div>
            <motion.div 
            initial={{x: 1000}}
            animate={{x: 0}}
            transition={{duration: 0.7}}
            className="project">
                <div className="projectText">
                    <h2>Disney Plus Rebuild</h2>
                    <p>This is a exact rebuild of the Disney Plus home page in April of 2022. Disney Plus changes there site often so it may not be the exact same to this day.</p>
                    <p>Tech Used: HTML, CSS, Javascript</p>
                    <div className="socialLinks">
                        <a target={'_blank'} href="https://disneyplusrebuild.netlify.app/">
                            <AiFillEye className='socialIcon' />
                        </a>
                        <a target={'_blank'} href="https://github.com/darionjoness/DisneyPlus-Rebuild">
                            <AiFillGithub className='socialIcon' />
                        </a>
                    </div>
                </div>
                <div className="projectImg">
                    <img src={disneyPlusRebuild} alt="" />
                </div>
            </motion.div>
            <motion.div 
            initial={{x: -1000}}
            animate={{x: 0}}
            transition={{duration: 0.7}}
            className="project">
            <div className="projectImg">
                    <img src={timsStore} alt="" />
                </div>
                <div className="projectText">
                    <h2>Tim's Store</h2>
                    <p>Tim's Store is a store that sells clothing, jewelry, beauty products & more! Use the filters to find the items you want, click on the item you want then when the modal pops up you can go ahead and add it to your cart. You can view your cart at anytime by clicking on the cart icon. When your done shopping, click checkout and you will be asked to fill out your information. After your done place the order and you will get confirmation!</p>
                    <p>Tech Used: HTML, CSS, Javascript</p>
                    <div className="socialLinks">
                        <a target={'_blank'} href="https://timsstore.netlify.app/">
                            <AiFillEye className='socialIcon' />
                        </a>
                        <a target={'_blank'} href="https://github.com/darionjoness/TimsStore">
                            <AiFillGithub className='socialIcon' />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default ProjectsInfo