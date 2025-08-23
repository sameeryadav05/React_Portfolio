import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import './About.scss'
import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion'
import useAboutStore from '../../AboutStore'

const About = () => {
  const fullText = `" I’m a full-stack MERN developer passionate about building scalable, user-friendly web applications. I enjoy blending creativity with problem-solving, from crafting clean, responsive interfaces to developing robust backends. Always eager to learn and explore new technologies, I focus on delivering impactful digital solutions.`

  const [displayedText, setDisplayedText] = useState("")
  const AboutState = useAboutStore((state) => state.AboutState);
  const showAbout = useAboutStore((state) => state.showAbout);
  const hideAbout = useAboutStore((state) => state.hideAbout);

  const Skills = ["#Javascript","#React.js","#Redux","#Node.js","#Express.js","#MoongoDB","#Mongoose","#Cloudinary","#Sass","#Html","#CSS","#TailwindCSS","#git","#github","#AWS","#SystemDesign","#figma","#Zustand","#MaterialUi","#DaisyUi","#Python","#C++","#Docker"]

  const chipStyle = {
                            backgroundColor: "#454e56", // nice blue
                            // backgroundColor:'Transparent',
                            color: "#ccc",   
                            border:'1px solid #454e56',           // white text
                            fontWeight: 500,
                            borderRadius: "16px",       // pill style
                            px: 1,                    // horizontal padding
                            py: 0.3                    // vertical padding
                        }

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayedText(prev => prev + fullText.charAt(i))
      i++
      if (i >= fullText.length) clearInterval(interval)
    }, 40) // typing speed
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ x: 0, y: 0 }}
      exit={{ y: 1000 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 150, damping: 20 }}
    //   onClick={() => hideAbout()}
      className='AboutContainer'
    >
      <motion.div 
      className='About'>
      
        <div className='head'>
          <h1>About &nbsp;<span>Me</span></h1>
          <h1 className='cross' onClick={() => hideAbout()}><X /></h1>
        </div>

        <div className='about-main'>
          <div className='content'>
            <div className='text'>
              <p>{displayedText}<span className="cursor">|</span></p>
            </div>

            <motion.div  className='ChipContainer'>
                {
                    Skills.map((curr,index)=>(<span><Chip size='small' key={index} label={curr} sx={chipStyle}/></span>))
                }
            </motion.div>
          </div>

          <img src='../src/assets/portfolioimage2.webp' className='about-img' />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
