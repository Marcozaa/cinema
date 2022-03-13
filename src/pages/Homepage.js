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
export default function Homepage() {
   
  return (
    <div className='homepage'>
        
        <Navbar />

        <HomepageFirst />

        <Sponsors paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} />
     
      
    
    </div>
  )
}
