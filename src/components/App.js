import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";


import Navbar from "./Navbar";
import Filters from "./Filters";
import Campsites from "./Campsites";
import ReservationsList from "./ReservationsList";



const camprAPI = "http://localhost:9292"

function App() {
  const [campsites, setCampsites] = useState([]);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch(camprAPI+"/campsites")
    .then(res => res.json())
    .then(setCampsites)
  },[]);

  useEffect(() => {
    fetch(camprAPI+"/reservations")
    .then(res => res.json())
    .then(setReservations)
  },[]);
  
  function filteredCampsites() {
    const filterValues = [...document.querySelectorAll(".accomodation-button.active")];
    const activeFilters = filterValues.map((activeEl) => activeEl.getAttribute("data-value").split(' ').join('_') );
    let camprUrl = camprAPI + '/campsites?';
    for (let value of activeFilters) {
      camprUrl = `${camprUrl}&${value}=true`
    }

    fetch(camprUrl)
    .then((r) => r.json())
    .then((camps) => setCampsites(camps));
  }

  function handlePriceChange(e) {
    const camprUrl = `${camprAPI}/campsites?filter_price=${e.target.value}`
    fetch(camprUrl)
    .then((r) => r.json())
    .then((camps) => setCampsites(camps));
  }

  function deleteReservation(resToDelete) {
    fetch(`http://localhost:9292/reservations/${resToDelete.id}`, {
      method: "DELETE",
    });
    setReservations(reservations.filter((res) => res.id !== resToDelete.id))
  }

  function handleReservationFavorite(isFavorite, res) {
    fetch(`${camprAPI}/reservations/${res.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({"favorite": isFavorite})
    })
    .then(res => res.json)
    .then(refreshReservations)
  }

  function refreshReservations () {
    fetch(camprAPI+"/reservations")
    .then(res => res.json())
    .then(setReservations)
  }


  return (
    <Router>
      <div className="main-container">
        <div className="Nav">
          <Navbar />
          <Filters filteredCampsites={filteredCampsites} handlePriceChange={handlePriceChange} />
        </div>
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Campsites campsites={campsites} setReservations={setReservations} reservations={reservations}/>
            </Route>
            <Route path="/reservations">
              <ReservationsList reservations={reservations} deleteReservation={deleteReservation} handleReservationFavorite={handleReservationFavorite} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
