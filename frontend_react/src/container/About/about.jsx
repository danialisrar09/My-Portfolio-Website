import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 

import { images } from '../../constants';
import './About.scss';
import { urlFor, client } from '../../client';
 
const abouts = [
  { 
    title:'Web Development',
    description: 'We do Web Development',
    imgURL:images.about01
  },
  
  { 
    title:'Frontend Development',
    description: 'We do Frontend Development',
    imgURL:images.about02
  },
  
  { 
    title:'Backend Development',
    description: 'We do Backend Development',
    imgURL:images.about03
  },

  { 
    title:'MERN Stack Development',
    description: 'We do MERN Stack Development',
    imgURL:images.about04
  },
  
]
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() =>{
    const query = `*[_type == "abouts"]`;

    client.fetch(query) 
      .then((data) => setAbouts(data)); 
  }, []);

  return (
    <>
      <h2 className="head-text">I know that<span> Good Apps</span><br />means<span> Good Business</span></h2>
      <div className="app__profile">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type:"tween"}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="Bold-text"> {about.title} </h2>
            <h2 className="p-text"> {about.description} </h2> 

          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About