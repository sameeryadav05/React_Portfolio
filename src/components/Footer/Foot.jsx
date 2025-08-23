import React, { useEffect } from 'react'
import './Footer.scss'
import { motion } from 'framer-motion'
import { ChevronUp, ChevronDown, Linkedin, Github, Instagram, Mail } from "lucide-react"

const Foot = ({ showFooter, setShowFooter }) => {
  // adjust height based on screen size
  const isMobile = window.innerWidth < 768
  const hiddenY = isMobile ? 265 : 220


  return (
    <motion.div
      className="footer-container"
      initial={{ y: "100%" }}  // hidden by its own height
      animate={showFooter ? { y: 0 } : { y: "100%" }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <motion.div
        className="logo"
        onClick={() => setShowFooter(prev => !prev)}
      >
        {showFooter ? <ChevronDown size={30} /> : <ChevronUp size={30} />}
      </motion.div>

      <div className='foot-content'>
        <div className='name'>
            <h1>Sameer Yadav</h1>
            <p>MERN Stack Developer building modern, responsive web applications.</p>
        </div>  
        <div className='links'>
            <h1>Quick links</h1>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        <div className='social'>
          <h1>Connect</h1>
            <div className='socialIcons'>
              <div><a href='https://www.linkedin.com/in/sameer-yadav-b048a72a6/'><div><Linkedin size={18}/></div></a></div>
              <div><a href='https://github.com/sameeryadav05'><div><Github size={18}/></div></a></div>
              <div onClick={()=>{setShowFooter(false)}}><Mail size={18}/></div>
            </div>
        </div>
      </div>
                  <hr></hr>
      <div className='footer-text'>
          <div>© 2025 sameer manoj kumar yadav. All rights reserved.</div>
          <div>Designed & Built with ❤️ by sameer</div>
      </div>
    </motion.div>
  )
}

export default Foot
