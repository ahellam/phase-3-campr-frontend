import React from "react";
import CampCard from "./CampCard";
import '../styles/Campsites.css';

function Campsites({ campsites, setReservations }) {
  return (
    <div className="Campsites">
        {campsites.map((site) => (
          <CampCard key={site.id} site={site} setReservations={setReservations}/>
        ))}
    </div>
  );
}

export default Campsites;
