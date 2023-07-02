import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,HeroE} from "./components";
import Relation from "./components/Relation";
import Footer from "./components/footer";
import TokenomicsSection from "./components/Tokenomics";
import MemeToMetaverseSection from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          
        </div>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <HeroE />
        </div>
        
        <Relation/>
      
        <MemeToMetaverseSection/>
        {/* <Tech/> */}
        {/* <About /> */}
        <TokenomicsSection/>
        {/* <Experience /> */}
        
        {/* <Works /> */}
        
        
    
        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
