import React, { useEffect, useState } from 'react'
import Reservation from './Reservation';
import '../styles/Reservations.css';

function ReservationsList({reservations, deleteReservation, handleReservationFavorite}) {
  return (
    <div className="Reservations">
        {reservations.map((res) => (
            <Reservation key={res.id} res={res} deleteReservation={deleteReservation} handleReservationFavorite={handleReservationFavorite}/>
        ))}
    </div>
  )
}

export default ReservationsList