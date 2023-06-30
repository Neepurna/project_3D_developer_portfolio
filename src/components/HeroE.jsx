import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import videobg from '../assets/10.mp4'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className='About  absolute w-full inset-0 z-[-1] content-center'>
      
      <video src={videobg} autoPlay loop muted />
      
    </div>

      <div

        className={`absolute inset-0 top-[300px]  text-center  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5"> */}
          {/* <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" /> */}
        {/* </div> */}

        <div>
          <h1 className={`${styles.heroSubText}`}>
          Unite with the Divine:
          </h1>
          <p className={`${styles.heroHeadText} mt-2`}>
          Bring Hanumans’s Story <br className="sm:block hidden" /> To Every
Community <br/>In The World
            
          </p>
          {/* <p className="absolute bottom-8 text-secondary">
            *Touch the computer to rotate...
          </p> */}
        </div>
      </div>

      {/* <div className="absolute  w-full sm:w-[60%] h-screen sm:right-[5%]">
        <ComputersCanvas />
      </div> */}

      {/* <div className="absolute xs:bottom-16 bottom-0 w-full hidden sm:flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-slate-900 flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 32, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-4 rounded-full bg-[#915EFF]"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
