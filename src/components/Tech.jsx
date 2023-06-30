import React from "react";
import { services } from "../constants";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, img }) => (
  
  <Tilt className='md:mr-12 xs:w-[150px] w-full'>
   
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='  w-full item-center green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={img}
          alt='web-development'
          className='w-50 h-50 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const Tech = () => {
  return (
    
    
<div>
<h3 className={`${styles.AboutHeadText} text-center `}>Meme  to Metaverse</h3>
<div className=' mt-2  flex flex-wrap gap-20'>
        
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        </div>
    <div className='mt-0 flex flex-row flex-wrap justify-center gap-5'>
      
      {/* {technologies.map((technology) => (
        <div className='w-40 h-full' key={technology.name}>
      
          <BallCanvas icon={technology.icon} />
          
        </div>
      ))} */}
     
    </div>
    </div>
    
  );
};

export default SectionWrapper(Tech, "");
