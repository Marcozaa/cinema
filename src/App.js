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
import UniversalSearchComponent from './components/UniversalSearchComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomepageThird from './pages/HomepageThird';
import Browse from './pages/Browse';

function App() {
   const containerRef = useRef(null)
  return (
    

    <Routes>
      <Route path="/" element={<div className="App">
         <LocomotiveScrollProvider // Andando su localhost:3000/ renderizzeremo la homepage
              options={
                {
                  smooth: true,
                }
              }
              containerRef={containerRef}
            >
              <main data-scroll-container ref={containerRef}>
                <div data-scroll-container>
                <Homepage data-scroll-section/>
                
                </div>
                </main>
          </LocomotiveScrollProvider>
         </div>
        } />
      <Route path="browse" element={<Browse />} /> {/*Andando su localhost:300/browse renderizziamo il componente corrispondente */}
      <Route path="invoices" element={<HomepageThird />} />
    </Routes>

     
   
  );
}

export default App;
