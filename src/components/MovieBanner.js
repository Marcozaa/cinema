import React from 'react'
import './movieBanner.css'
export default function MovieBanner({title, number, img}) {
  return (
    <div>
    <div 
    className='movieBanner'
    style={{ backgroundImage: `url(${img})` }}> 

    <div className="nome">{title}</div>
    <div className="number">{number} titoli</div>    
    </div>
    </div>
  )
}
