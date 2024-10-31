import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import './home.css';

const Home = () => {
  const navigate = useNavigate();
  const handleSeeMyWork = ()=>{
    navigate('projectsPage');
  };
  return (
    <motion.div 
      className="home" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}>
      <h1>Hi, I'm Subrata</h1>
      <p>Fullstack Developer |  Java | Lifelong Learner</p>
      <div className="social-links">
        <a href='https://www.linkedin.com/in/subrata-mohapatra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer'>
        <FaLinkedin className="icon linkedin" />
        </a>
        <a href='https://github.com/subrata-eng' target='_blank' rel='noopener noreferrer'>
        <FaGithub className="icon github"/>
        </a>
      </div>
      <button className="cta-button" onClick={handleSeeMyWork}>See My Work</button>
    </motion.div>
  );
};

export default Home;