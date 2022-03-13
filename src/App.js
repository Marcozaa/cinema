import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ImmagineFilmHeader from './components/ImmagineFilmHeader';
import Hero from './components/Hero';
import RettangoloHero from './components/RettangoloHero';
import Point from './components/Point';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Homepage from './pages/Homepage';
import { useRef } from 'react';

function App() {
   const containerRef = useRef(null)
  return (
    <div className="App">
      <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  containerRef={containerRef}
>
   <main data-scroll-container ref={containerRef}>
     <div data-scroll-container>
     <Homepage data-scroll-section/>
     <Homepage />
     <Homepage />
     <Homepage />
     </div>
     </main>
     </LocomotiveScrollProvider>
    </div>
  );
}

export default App;
