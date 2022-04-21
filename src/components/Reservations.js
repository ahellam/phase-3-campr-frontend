import React from 'react'

function Reservations({reservations}) {
  return (
    <div>
        {reservations.map((res) => (
          <>
            <p>{res.start_date} - {res.end_date} Total Price: ${res.price_total}</p>
            <button>DELETE</button>
          </>
        ))}
    </div>
  )
}

export default Reservations