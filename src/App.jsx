import './App.scss';
import {AnimatePresence} from 'motion/react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
// import Skills from './components/Skills/Skills';
import About from './components/About/About';
import useAboutStore from './AboutStore';
// import Paralax from './components/Paralax/Paralax';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import { Toaster } from "react-hot-toast";
function App() {
  const AboutState = useAboutStore((state) => state.AboutState);
  const showAbout = useAboutStore((state) => state.showAbout);
  const hideAbout = useAboutStore((state) => state.hideAbout);
  return (
    <div className='main'>
      <Toaster 
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: { zIndex: 999999 }
        }}
      />
    <section id='Homepage' className='Homepage'>
      {!AboutState&&<AnimatePresence mode='wait'><Navbar /></AnimatePresence>}
      <Hero/>
    </section>
    <section id='skills'>
    <Navbar />
      <Skills />
    </section>
    {/* <section id='Skills'><Navbar hide={true}/></section> */}
    {/* <section id='projects'><Paralax /></section> */}
    {/* <section><Navbar  hide={true}/></section> */}
    <Project/>
    <section id='contact' className='contact-section'><Navbar/><Contact/></section>
    
    </div>
  )
}

export default App
