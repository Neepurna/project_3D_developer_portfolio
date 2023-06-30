import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import videobg from '../assets/10.mp4'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
  <div className="About absolute w-full inset-0 z-[-1] content-center">
    <video src={videobg} autoPlay loop muted />
  </div>

  <div className="min-h-screen flex flex-col items-center justify-center text-center">
    <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">Blockchain with <br />the divine</h1>
    <h2 className="text-xl md:text-xl lg:text-2xl text-white mb-6">Bring Hanuman's Story To Every Community In the World</h2>

    <div className="flex justify-center space-x-4">
    <a href='../assets/Litepaper.pdf'className="px-6 py-3 text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 rounded" download> Litepaper <br/> (Downloadable)
      
      </a>
      <a href="" className="px-6 py-3 text-lg font-medium text-white bg-green-500 hover:bg-green-600 rounded">
      Presale <br/> (coming soon)
      </a>
    </div>
  </div>
</section>
  );
};

export default Hero;
