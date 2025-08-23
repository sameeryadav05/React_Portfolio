import React from 'react'
import './Navbar.scss'
import {motion} from 'framer-motion'
import Sidebar from '../Sidebar/Sidebar'
const Navbar = ({hide=false}) => {
  return (
    <motion.div 
    initial={{y:-100}}
    animate={{x:0,y:0}}
    exit={{y:-200}}
    transition={{duration:0.2}}
    className='navbar'>
            <motion.div 
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.5}
            whileDrag={{ scale: 1.5 , textShadow:'-20px -20px 0.5px #ffffff40',color:'white'}}
            initial={{opacity:0,scale:0.1}} animate={{opacity:1,scale:1}} transition={{type:'spring',stiffness:1000,damping:15,delay:0.1}}
            className='text'>{hide?"":"sameer_dev"}</motion.div>

            <Sidebar />
      
    </motion.div>
  )
}

export default Navbar
