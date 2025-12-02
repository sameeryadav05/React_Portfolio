import React, { useState } from 'react';
import './Sidebar.scss';
import { Menu, X } from 'lucide-react';
import {motion} from 'framer-motion'
import useAboutStore from '../../AboutStore';
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    initialForOpening: { x: 50, opacity: 0.1 },
    initialForClosing: { x: 0, opacity: 1 },
    animateForOpen: { x: 0, opacity: 1},
    animateForClosing: { x: 100, opacity: 0.1}
  };

    const AboutState = useAboutStore((state) => state.AboutState);
  const showAbout = useAboutStore((state) => state.showAbout);
  const hideAbout = useAboutStore((state) => state.hideAbout);
  return (
    <div className='sidebar'>
        {
           open&&<motion.div className='Navigation'
            initial={!open? "initialForClosing":"initialForOpening"}
            animate={!open?"animateForClosing":"animateForOpen"}
            // exit="animateForClosing" // plays when unmounting
            variants={variants}
            transition={{ type: 'spring', stiffness: 3000,damping:150,staggerChildren:0.2,delay:0.1}}
        //    transition={{type:'spring',stiffness:3000,damping:40}}
           >
            <motion.div whileHover={{scale:1.1}} className='Link' onClick={()=>setOpen(prev=>!prev)}><a  href='#Homepage'>Home</a></motion.div>

            <motion.div whileHover={{scale:1.1}} className='Link' onClick={()=>setOpen(prev=>!prev)}><a  href='#skills'>skills</a></motion.div>
            {/* <motion.div whileHover={{scale:1.1}} className='Link' onClick={()=>setOpen(prev=>!prev)}><a href='#Skills'>Skills</a></motion.div> */}
            <motion.div whileHover={{scale:1.1}} className='Link' onClick={()=>setOpen(prev=>!prev)}><a href='#projects'>Projects</a></motion.div>

            <motion.div whileHover={{scale:1.1}} className='Link' onClick={()=>setOpen(prev=>!prev)}><a href='#contact'>Contact</a></motion.div>
        </motion.div>
        }
        {!AboutState&&<motion.div className="menu" style={open?{color:'#cd0c0cff',border:'1px solid black'}:{}}  
        initial={{opacity:0,scale:0.1}} animate={{opacity:1,scale:1}} transition={{type:'spring',stiffness:50,delay:0.1}}
        onClick={()=>setOpen(prev=>!prev)}>{open?<X/>:<Menu/>}</motion.div>}
    </div>
  );
};

export default Sidebar;
