import './ImmagineFilmHeader.css'
function ImmagineFilmHeader({immagine, top, left}){
    return(
    <div>
            <img src={immagine} style={{ top: `${top}`, left: `${left}` }}  className="img"/> 
        {/**
         * Inserisco un immagine nella pagina 
         */}
    </div>
    )
}

export default ImmagineFilmHeader;