import { useState } from 'react'
import './Seat.css'

export default function PostoCarrello({row, number})
{


    return(
        <div className='PostoCarrello'>           
            <p className='NumeroPostoCarrello'>{row} {number}</p>
            <p className='PrezzoPostoCarrello'>8,50€</p>
        </div>
    )
}
