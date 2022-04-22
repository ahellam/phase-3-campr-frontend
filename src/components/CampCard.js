import React from "react";
import { useHistory } from "react-router-dom"
import "../styles/CampCards.css";

function CampCard({ site, setReservations , reservations}) {
  const { 
    site_number, 
    daily_price, 
    camp_name, 
    description, 
    img_url, 
    has_picnic_table, 
    has_firepit, 
    has_bathrooms, 
    has_rv_hookup } = site;

    const history = useHistory();

  // console.log("Inside CampCard: Site Number: " + site.site_number);
  // console.log(site);


  function handleClick(id){
    // console.log(id)
    const startDate = document.getElementById('start_date').value.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2")
    const endDate = document.getElementById('end_date').value.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2")

    const resData = {
      user_id: 1,
      campsite_id: id,
      start_date: startDate,
      end_date: endDate,
    }

    // console.log("resData")
    // console.log(resData)
    fetch ("http://localhost:9292/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resData),
    })
    .then(res => res.json())
    .then((newRes) => {setReservations([...reservations, newRes])})
    .then(history.push("/reservations"))

  }

  return (
    <div className="campsite__card">
      <img src={img_url}></img>
      <div className="card__content">
        <h2 className="card__name"> {camp_name} </h2>
        <h4 className="card__sitenum"> Site: {site_number} </h4>
        <p className="card__description"> {description} </p>
        <ul className="card__amenities">
          {has_picnic_table && <li>{has_picnic_table ? "Picnic Table" : ""}</li>}
          {has_firepit && <li>{has_firepit ? "Fire Pit" : ""}</li>}
          {has_bathrooms && <li>{has_bathrooms ? "Bathrooms" : ""}</li>}
          {has_rv_hookup && <li>{has_rv_hookup ? "Rv Hookup" : ""}</li>}
        </ul>
        <h4 className="card__price"> ${daily_price} per night </h4>
      <button className="card__button" onClick={() =>handleClick(site.id)}>RESERVE</button>
      </div>
    </div>
  );
}

export default CampCard;