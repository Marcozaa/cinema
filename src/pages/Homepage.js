import React from 'react'
import './homepage.css'
import Navbar from '../components/Navbar';
import ImmagineFilmHeader from '../components/ImmagineFilmHeader';
import Hero from '../components/Hero';
import RettangoloHero from '../components/RettangoloHero';
import Point from '../components/Point';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react';
import HomepageFirst from './HomepageFirst';
import Sponsors from '../components/Sponsors';
import HomepageSecond from './HomepageSecond';

// Import immagini sponsor
import redbull from '../images/redbull.png'
import bose from '../images/bose.png'
import bi from '../images/business-insider-2.png'
import hulu from '../images/hulu-2 (1).png'
import netflix from '../images/netflix-3.png'
export default function Homepage() {
   
  return (
    <div className='homepage'>
        
        <Navbar />

        <HomepageFirst />

        <Sponsors 
        paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} 
        first={netflix}
        second={bi}
        third={bose}
        fourth={hulu}
        fifth={redbull}
        />
     
      <HomepageSecond />
      
    
    </div>
  )
}
