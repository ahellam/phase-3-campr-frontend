import '../styles/ResCard.css';

function Reservation({res}) {
  // const {
  //   user_id,
  //   campsite_id,
  //   start_date,
  //   end_date,
  //   // total_price
  // } = res;
  
  return (
    <div className="res__card">
        <h3>Reservation ID:{res.id}</h3>
        <p>Campsite ID: {res.campsite_id}</p>
        <h4>Dates Reserved:</h4>
        <p className="res__dates">{res.start_date} to {res.end_date}</p>
        <h4>Total Price: {res.total_price}</h4>
        <button>CANCEL RESERVATION</button>
    </div>
  )
}

export default Reservation