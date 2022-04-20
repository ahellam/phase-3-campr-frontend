import React from 'react'

function CampCard({site}) {
  const {site_number, daily_price} = site
  console.log("Inside CampCard: Site Number: " + site.site_number);
  console.log(site);

  return (
    <div className="campsite-card">
      <h2> Site: {site_number} </h2>
      <h2> ${daily_price} per night </h2>
    </div>
  )
}

export default CampCard