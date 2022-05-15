import { useState } from 'react'
import './Seat.css'

export default function PostoCarrello({id})
{


    return(
        <div className='PostoCarrello'>           
            <p className='NumeroPostoCarrello'>{id}</p>
            <p className='PrezzoPostoCarrello'>8,50€</p>
        </div>
    )
}
