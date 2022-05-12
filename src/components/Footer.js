import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    //<div style={{background: 'black' , display: 'flex', justifyContent:'center', alignItems: 'center', height: '10vh'}}>Footer</div>

    <div className="footer-container">

        <div className="footer">
            <div className="third-of-footer">
                <p className="footer-title">Navigazione</p>
                <p className="footer-link"><a href="#">Browse</a></p>
                <p className="footer-link"><a href="#">Home</a></p>
                <p className="footer-link"><a href="#">Login</a></p>
            </div>
            <div className="third-of-footer">
                <p className="footer-title">Help</p>
                <p className="footer-link"><a href="#">Visualizzazione</a></p>
                <p className="footer-link"><a href="#">Ricerca</a></p>
                <p className="footer-link"><a href="#">Playlist</a></p>
            </div>
            <div className="third-of-footer">
                <p className="footer-title">I nostri partner</p>
                <p className="footer-link"><a href="#">RedBull</a></p>
                <p className="footer-link"><a href="#">Boose</a></p>
                <p className="footer-link"><a href="#">Hulu</a></p>
            </div>
        </div>
    </div>





  )
}
