import './Seat.css'

export default function Seat({row, number})
{
    return(
        <div className='Seat'>
            
            <p className='SeatName'>{row}, {number}</p>
            <p>Pagliacci</p>
        </div>
    )
}
