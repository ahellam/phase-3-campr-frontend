import React from "react";
import CampCard from "./CampCard";
import "../styles/Campsites.css";

function Campsites({ campsites, setReservations, reservations }) {
  return (
    <div className="Campsites">
      {campsites.map((site) => (
        <CampCard
          key={site.id}
          site={site}
          setReservations={setReservations}
          reservations={reservations}
        />
      ))}
    </div>
  );
}

export default Campsites;
