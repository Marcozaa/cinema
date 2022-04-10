import React from 'react'
import './cardAttore.css'
import WikipediaLogo from '../images/wikipedialogo.png'
export default function CardAttore({image}) {
  return (
    <div>
        <div class="container">
  <div class="card card0" style={{    background: `url(${'https://image.tmdb.org/t/p/original'+image})`,
      }}>
    <div class="border">
      <h2>Al Pacino</h2>
      <div class="icons">
       
      </div>
    </div>
  </div>
  
</div>
    </div>
  )
}
