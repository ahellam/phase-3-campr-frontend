import "../styles/ResCard.css";

function Reservation({ res, deleteReservation, handleReservationFavorite }) {
  const {
    id,
    user_id,
    campsite_id,
    start_date,
    end_date,
    price_total,
    favorite
  } = res;
  

  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const sd = new Date(start_date).toLocaleDateString("en-US", options);
  const ed = new Date(end_date).toLocaleDateString("en-US", options);

  return (
    <div className="res__card">
      <h3>Reservation ID:{id}</h3>
      <p>Campsite ID: {campsite_id}</p>
      <h4>Dates Reserved:</h4>
      <p className="res__dates">
        {sd} to {ed}
      </p>
      <h4>Total Price: {`$${price_total}`}</h4>
      <button className="res__button" onClick={() => deleteReservation(res)}>CANCEL RESERVATION</button>
      <button className="favorite_button" onClick={() => handleReservationFavorite(!favorite, res)}>{favorite ? "Looking forward to it!" : "Not Excited :("}</button> 
    </div>
  );
}

export default Reservation;
