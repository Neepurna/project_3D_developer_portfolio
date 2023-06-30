import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas, EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import videobg from '../assets/10.mp4'


const Hero = () => {
  return (

    <section className={`relative w-full h-screen mx-auto`}>
      <div className='About  absolute w-full inset-0 z-[-1] content-center'>
      
      <video src={videobg} autoPlay loop muted />
      
    </div>
      <div
        className={`absolute inset-0 md:top-[350px]   max-w-6xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        
          <h1 className={`${styles.heroSubText} text-white`}>
          Unite with the Divine:
          </h1>
          <p className={`${styles.heroHeadText}`}>
          Bring Hanumans Story To Every <br className='sm:block hidden' /> Community 
          In The World.
          </p>
          
      
      </div>

      
     
        {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};


export default Hero;
