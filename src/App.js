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
import Login from './pages/Login';
import CardAttore from './components/CardAttore';
import Registrati from './pages/Registrati';
import Profilo from './pages/Profilo'
import Movie from './pages/Movie';
import Footer, { FooterSimple } from './components/Footer.js';
import Acquisto from './pages/Acquisto';

function App() {
   const containerRef = useRef(null)
  return (
    
<> <Navbar />

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
      <Route path="login" element={<Login />} /> 
      <Route path="registrati" element={<Registrati />} /> 
      <Route path="attoreprova" element={<CardAttore />} /> 
      <Route path="invoices" element={<HomepageThird />} />
      <Route path="profilo" element={<Profilo/>} />
      <Route exact path="film/:nome" element={<Movie />} />
      <Route path='acquista/:nome' element={<Acquisto />} />

    </Routes>

<Footer/>
     </>
   
  );
}

export default App;
