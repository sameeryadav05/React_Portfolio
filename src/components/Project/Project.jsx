import React, { useRef } from "react";
import "./Project.scss";
import { motion, useScroll, useSpring } from "framer-motion";
// import Navbar from "../navbar/Navbar";
import { ExternalLink, GitBranch, Github, LucideGithub } from 'lucide-react';
import portfolio from '../../assets/portfolio.png';
import Gemini from '../../assets/Gemini.png';
import NoteSaver from '../../assets/NoteSaver.png';
// import { Target } from "lucide-react";

const items = [
  {
    id: 1,
    githuburl:'https://github.com/sameeryadav05/React_Portfolio',
    visiturl:'',
    title: "Personal Portfolio",
    imgUrl:portfolio,
    description: "A modern, responsive developer portfolio built with React and Material UI, highlighting my skills, experience, and projects. It uses Zustand for efficient global state management, ensuring smooth UI performance. Forms like contact and feedback are built with Formik and validated with Yup for a secure, seamless user experience. The interface combines Material UI’s sleek components with custom design and Sass styling for an accessible and visually appealing experience across devices.",
  },
  {
    id: 2,
        githuburl:'https://github.com/sameeryadav05/Gemini-AI-clone',
    visiturl:'https://gemini-ai-theta-nine.vercel.app/',
    title: "Gemini AI Clone",
    imgUrl:Gemini,
    description:
      "A feature-rich AI-powered web application inspired by Google’s Gemini AI. This project leverages React for a dynamic and responsive frontend, Context API for efficient state management, and Axios for seamless API integration and asynchronous data handling. Users can interact with the AI, ask questions, and receive intelligent responses in real-time, demonstrating advanced integration of external AI services. The application combines an intuitive UI with robust state management and clean code architecture, resulting in a smooth and engaging user experience.",
  },
  {
    id: 3,
        githuburl:'https://github.com/sameeryadav05/Note',
    visiturl:'https://note-pew3.vercel.app/',
    title: "Note Saver App",
    imgUrl:NoteSaver,
    description:
      "Note Saver is a streamlined and responsive note-taking web application built with React and Material UI, offering users an intuitive interface for organizing tasks and ideas. The app utilizes Redux for powerful state management, ensuring seamless data flow and effortless updates across the UI. Notes are securely stored in the browser’s local storage, providing instant data persistence without requiring a backend. The application features dynamic theming, real-time editing, and a polished Material UI design—demonstrating effective use of modern frontend technologies and robust state management.",
  },
];
const Single = ({ item }) => {
  return (
    <section className="project-section">
      <motion.div
  initial={{ opacity: 0, y: 100, scale: 0.88, boxShadow: "0 0 0 #0000"}}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
    boxShadow: "0 8px 40px 0 #245bff33"
  }}
  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}

       className="projectDiv">
        <div className="project-img">
          <motion.img
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.2}
           src={item.imgUrl}/>
        </div>
        <div className="project-content">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        <div className="buttons"><button><a href={item.githuburl}>Github<span><Github size={18} style={{ marginLeft: 6 }} /></span></a></button>
       {item.id==1?null: <button><a href={item.visiturl}>Visit <span><ExternalLink size={18} style={{ marginLeft: 6 }}/></span></a></button>}
        </div>
        </div>
      </motion.div>
    </section>
  );
};

const Project = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end","start start"],

    });
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
  return (
    <>
      <div className="project-container" id="projects" ref={ref}>
        <div className="progress">
          <h1>Projects</h1>
          <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Project;
