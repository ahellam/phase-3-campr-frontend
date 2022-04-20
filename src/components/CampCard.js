import React from "react";
import "../styles/CampCards.css";

function CampCard({ site }) {
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

  // console.log("Inside CampCard: Site Number: " + site.site_number);
  // console.log(site);

  return (
    <div className="campsite__card">
      <img src={img_url}></img>
      <div className="card__content">
        <h2 className="card__name"> {camp_name} </h2>
        <h4 className="card__sitenum"> Site: {site_number} </h4>
        <p className="card__description"> {description} </p>
        <ul className="card_amenities">
          {has_picnic_table && <li>{has_picnic_table ? "Picnic Table" : ""}</li>}
          {has_firepit && <li>{has_firepit ? "Fire Pit" : ""}</li>}
          {has_bathrooms && <li>{has_bathrooms ? "Bathrooms" : ""}</li>}
          {has_rv_hookup && <li>{has_rv_hookup ? "Rv Hookup" : ""}</li>}
          
        </ul>
        <h4 className="card__price"> ${daily_price} per night </h4>
      </div>
    </div>
  );
}

export default CampCard;
