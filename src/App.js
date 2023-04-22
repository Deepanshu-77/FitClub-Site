import './App.css';
import Footer from './Components/Footer/Footer';
import Join from './Components/Join/Join';
import Plans from './Components/Plans/Plans';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/Testimonials';
import Hero from './Components/hero section/Hero';
import Programs from './Components/hero section/Programs/Programs';
function App() {
  return (
    <div className="App">
          <Hero />
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
