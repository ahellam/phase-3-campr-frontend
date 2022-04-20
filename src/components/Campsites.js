import React from "react";
import CampCard from "./CampCard";

function Campsites({ campsites }) {
  return (
    <div>
      <h1>Campsite Cards Go Here</h1>
      <div>
        {campsites.map((site) => (
          <CampCard key={site.id} site={site} />
        ))}
      </div>
    </div>
  );
}

export default Campsites;
