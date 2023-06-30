import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";


import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";







const About = () => {
  return (
    <>
    
       <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h1 className={`${styles.AboutHeadText} `}>Immerse yourself in the awe-inspiring world of Hanuman as
you embark on a spiritual journey like no other.</h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`${styles.AboutSubText} mt-5 `}
      >
        Hanuman Universe token is a meme token built on the Binance Smart Network. With a total
supply of 40,000,000,000,000 $HUT, it offers awareness, belongingness, connectivity, guidance,
and comfort with the blockchain experience.

1% donation tax, equal opportunities, and space to grow on pancakeswap, and engage in a
vibrant community that embraces a sense of family, connection to tradition, perseverance, and
empowerment.


{/* <h3 className={styles.sectionSubText}>
- Limited Supply: $HUT has a limited supply of 40 trillion tokens, which means that there is
a finite amount of tokens that will ever be created.
</h3>
<h3 className={styles.sectionSubText}>
- Decentralized: $HUT is a decentralized cryptocurrency, which means that it is not
controlled by any central authority. This feature ensures that the token is resistant to
censorship and provides a high level of security.
</h3> */}


      </motion.p>
      
     
     
{/* <video src={videobg}/> */}

      
{/* <h3 className={`${styles.AboutHeadText} text-center mt-10`}>Tokenomics</h3>
<h3 className={styles.AboutSubText}>We believe in transparency and fairness. Our token distribution is as follows:</h3>
      <div className=' mt-10 flex flex-wrap gap-0'>
        
      
     
      

      <div className=' mt-2  flex flex-wrap gap-20'>
        
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        </div>
      </div> */}
      
     
    </>
    
  );
};

export default SectionWrapper(About, "about");
