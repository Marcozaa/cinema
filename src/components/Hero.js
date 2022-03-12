import './Hero.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
function Hero({title, paragraph, button}){
    return(
        
        <div className="hero">
            <h1 className="title">{title}</h1>                
            <p className="paragraph">{paragraph}</p>
            <Button >cds</Button>
        </div>
    )
}

export default Hero;