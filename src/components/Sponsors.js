import React from 'react'
import './sponsors.css'
import redbull from '../images/redbull.png'
import bose from '../images/bose.png'
import bi from '../images/business-insider-2.png'
import hulu from '../images/hulu-2 (1).png'
import netflix from '../images/netflix-3.png'
import { Divider } from '@mantine/core'
export default function Sponsors({paragraph}) {
  return (
    <div className="sponsors">
      
      <div className="sponsorsCointainer">
         <img className='sponsor' src={netflix}/>
        <img className='sponsor' src={bose}/>
        <img className='sponsor' src={bi}/>
        <img className='sponsor' src={hulu}/>
        <img className='sponsor' src={redbull}/>
      </div>
      <div className="bottom">
        <p className="paragraph">{paragraph}</p>
      </div>
      <Divider />
    </div>
  )
}
