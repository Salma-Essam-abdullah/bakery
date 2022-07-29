
import './App.css';

import Header from './shared/Header';

import DemoCarousel from './slider/slider';
import BestSellers from './sections/BestSellers';
import SimpleSlider from './slider/slider2';
import SimpleSlider1 from './slider/slider3';
import Cakes from './sections/Cakes';
import Baker from './sections/Baker';
import Story from './sections/Story';
import Contact from './sections/Contact';
import About from './sections/About';
import Footer from './sections/Footer';
function App() {

  return (
    <>
   <Header/>
<DemoCarousel/>
<SimpleSlider/>
 <SimpleSlider1/>
 <BestSellers/>
 <Cakes/>
 <Baker/>
 <Story/>
 <Contact/>
 <About/>
 <Footer/>
    </>

  );
}

export default App;
