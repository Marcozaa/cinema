import './ImmagineFilmHeader.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

function ImmagineFilmHeader({immagine, top, left}){
    return(
    <div>
         
            <img data-scroll data-scroll-position="left"  data-scroll-direction="horizontal" data-scroll-speed="2" src={immagine} style={{ top: `${top}`, left: `${left}` }}  className="img"/> 
        {/**
         * Inserisco un immagine nella pagina 
         */}
    </div>
    )
}

export default ImmagineFilmHeader;