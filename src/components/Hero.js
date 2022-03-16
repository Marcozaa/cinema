import './Hero.css';
import brush from '../brushteal.png'
import { Button } from '@mantine/core';

import { extendTheme, ChakraProvider } from '@chakra-ui/react'
function Hero({title, paragraph, button, gradient}){
    return(
        
        <div className="hero">
            <h1 className="title">{title}</h1>   
             <img className='brush' src={brush}/>       
            <p className="paragraph">{paragraph}</p>
             <Button variant="light" size="xl">
      Scopri nome
    </Button>
        </div>
    )
}

export default Hero;