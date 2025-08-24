import React, { useEffect, useState } from 'react'
import './Hero.scss'
import {AnimatePresence, motion} from 'framer-motion'
import Tooltip from '@mui/material/Tooltip';
import { Download, DownloadIcon } from "lucide-react";
import About from '../About/About';
import useAboutStore from '../../AboutStore';
import { circle, earth2, express, meteor, moongo, node, react } from '../../assets/Photos';
const Hero = () => {
    // const [showAbout,setShowAbout] = useState(false);

  const AboutState = useAboutStore((state) => state.AboutState);
  const showAbout = useAboutStore((state) => state.showAbout);
  const hideAbout = useAboutStore((state) => state.hideAbout);
    const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {   // check if Esc is pressed
        hideAbout();              // call function to close About
      }
    };
  const handleScroll = () => {
    hideAbout();  // close About whenever scrolling happens
  };

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("scroll", handleScroll);
  };

}, []);

    
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);


  const steps = 100; // number of animation steps
  const x = [];
  const y = [];
  
  const velocityX = isMobile?10:20;  // horizontal speed
  const velocityY = isMobile?-10:-20; // initial upward speed
  const gravity = isMobile?0.5:0.5;     // downward acceleration

  for (let t = 0; t < steps; t++) {
    x.push(t * velocityX);
    y.push(velocityY * t + 0.5 * gravity * t * t);
  }
  return (
    <div className='hero'>
    <AnimatePresence mode='wait'>
      {AboutState&&<About/>}
    </AnimatePresence>



    <motion.img 
      initial={{ x:isMobile?"-20vw":"-45vw" , y:isMobile?"-80vh":"-20vh",rotate:240}} // top-right off-screen
      animate={{ x:isMobile?"100vw":"70vw", y:isMobile?"50vh":"100vh",    filter: [
      "drop-shadow(0 0 10px #ffcc66) drop-shadow(0 0 20px #ff9933) drop-shadow(0 0 40px #ff6600)",
      "drop-shadow(0 0 20px #fff099) drop-shadow(0 0 30px #ffcc66) drop-shadow(0 0 60px #ff9933)",
    ]}} // bottom center
    transition={{duration:4,delay:2,repeat:Infinity,repeatType:'loop',repeatDelay:10}}
    src={meteor}  className='comet2'/>
      <motion.img 
      initial={{scale:0.8}}
        animate={{ x, y ,scale:1}}
        transition={{duration:isMobile?20:35,ease:'linear',repeat: Infinity,repeatType: "loop"}}
      src={circle} loading='lazy' className='planet'/>
      <motion.div className='hero-content'
      // initial={{scale:0.6}}
      // transition={{delay:0.2,duration:0.3}}animate={{scale:1}}
      >
          <div className='intro'>
              <motion.div 
          
                animate={{
                scale: 1,
                opacity: 1,
                rotate: [0, 14, -8, 14, -4, 10, 0], // waving motion
                }}
                transition={{
                  duration: 1.5, // total wave time
                  ease: "easeInOut",
                  repeat: Infinity, // keep waving
                  repeatDelay: 1, // pause between waves
                }}
               className='Hi-logo'>👋</motion.div>
              <div className='intro-text'>
                <motion.h1 className='Hi'
                  initial={{scale:0.95,opacity:0}}
                  animate={{scale:1,opacity:1}}
                  transition={{delay:0.2}}
                >Hi,</motion.h1>
                <motion.h2
                  initial={{scale:0.9,opacity:0}}
                  animate={{scale:1,opacity:1}}
                  transition={{delay:0.2}}
                >i &nbsp;am</motion.h2>
                <motion.h1 
                  initial={{opacity:0,scale:0.95}}
                  animate={{scale:1,opacity:1}}
                  transition={{delay:0.45}}
                className='name'>Sameer <motion.span
                  initial={{opacity:0,scale:0.95}}
                  animate={{scale:1,opacity:1}}
                  transition={{delay:0.6}}
                >yadav</motion.span></motion.h1>
                <motion.h1
                  initial={{opacity:0}}
                  animate={{scale:1,opacity:1}}
                  transition={{delay:1.2}} 
                className='stack'>
                <Tooltip 
                title={<img src={moongo} className='tech moongo' style={{height:'1.5rem',width:'1.5rem'}}/>} placement='top' arrow
                  PopperProps={{
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [0, -10], // x-axis, y-axis offset in px
                        },
                      },
                    ],
                  }}
                ><span>M</span></Tooltip>
                 <Tooltip
                  title={<img src={express} className='tech moongo' style={{height:'1.55rem',width:'1.55rem',borderRadius:'50%'}}/>} placement='top' arrow
                  PopperProps={{
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [0, -10], // x-axis, y-axis offset in px
                        },
                      },
                    ],
                  }}
                 ><span>E</span></Tooltip>
                <Tooltip
                  title={<img src={react} className='tech moongo' style={{height:'1.5rem',width:'1.5rem'}}/>} placement='top' arrow
                  PopperProps={{
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [0, -10], // x-axis, y-axis offset in px
                        },
                      },
                    ],
                  }}
                ><span>R</span></Tooltip>
                <Tooltip
                  title={<img src={node} style={{height:'1.5rem',width:'1.5rem'}}/>} placement='top' arrow
                  PopperProps={{
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [0, -10], // x-axis, y-axis offset in px
                        },
                      },
                    ],
                  }}
                ><span>N</span></Tooltip>
                </motion.h1>
                <motion.p
                  initial={{opacity:0}}
                  animate={{scale:1,opacity:1}}
                  transition={{delay:1.4}}
                >stack Developer</motion.p>

                <div className='buttons'>
                  <motion.button
                  onClick={()=>showAbout()}
                  initial={{opacity:0}}
                  animate={{scale:1,opacity:1}}
                  transition={{delay:1.8}}
                  >About me</motion.button>
                  <motion.button
                  initial={{opacity:0}}
                  animate={{scale:1,opacity:1}}
                  transition={{delay:2}}
                  ><a href='#Skills'>Download Resume</a></motion.button>
                </div>
              </div>
          </div>
      </motion.div>

      <motion.img 
      animate={{rotate:360}}
      transition={{delay:0.5,duration:100,repeatType:'loop',repeat:Infinity}}
      src={earth2} loading='lazy' className='earth'/>
    </div>
  )
}

export default Hero
