import React from "react";
import CampCard from "./CampCard";
import '../styles/Campsites.css';

function Campsites({ campsites }) {
  return (
    <div className="Campsites">
        {campsites.map((site) => (
          <CampCard key={site.id} site={site} />
        ))}
    </div>
  );
}

export default Campsites;
