import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,HeroE} from "./components";
import Relation from "./components/Relation";
import Footer from "./components/footer";
import PieChart from "./components/Pie-Chart";
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
        <div className='relative z-0'>
        <Relation/>
        </div>
        
        {/* <Tech/> */}
        <About />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <PieChart />
    </div>
        <Experience />
        
        <Works />
        
        
        {/* <StarsCanvas /> */}
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
