import React, { useEffect, useState } from 'react'
import Reservation from './Reservation';
import '../styles/Reservations.css';

function ReservationsList({reservations}) {
    

  return (
    <div className="Reservations">
        {reservations.map((res) => (
            <Reservation key={res.id} res={res} />
        ))}
    </div>
  )
}

export default ReservationsList