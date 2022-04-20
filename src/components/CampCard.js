import React from 'react'

function CampCard({site}) {
  const {site_number, daily_price, camp_name, description, img_url} = site
  console.log("Inside CampCard: Site Number: " + site.site_number);
  console.log(site);

  return (
    <div className="campsite-card">

      <h2> {camp_name} </h2>
      <h2> {description} </h2>
      <h2> Site: {site_number} </h2>
      <h2> ${daily_price} per night </h2>
      <img src={img_url}></img>

    </div>
  )
}

export default CampCard