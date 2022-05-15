import { useState } from 'react'
import './Seat.css'

export default function Seat({row, number})
{
    const [mouseEnterStyle, setMouseEnterStyle] = useState(false);
    const [postoScelto, setPostoScelto] = useState("");


    const afterClick = ({row}) => {
        setPostoScelto(row)

        console.log({postoScelto})
        //console.log({row}, {number})
    }

    const MouseEnter = () => {
        mouseEnterStyle ? setMouseEnterStyle(false) : setMouseEnterStyle(true); 
    }

    return(
        <section className={mouseEnterStyle ? "SeatOver" : "SeatNotOver"}>
            <div className='Seat' onClick={afterClick} onMouseEnter={MouseEnter} onMouseLeave={MouseEnter}>           
                <p className='SeatName'>{row} {number}</p>
            </div>
            <p>{postoScelto}</p>
        </section>

        
    )
}
