import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Filters from "./Filters";
import Campsites from "./Campsites";
import ReservationsList from "./ReservationsList";


const camprAPI = "http://localhost:9292/campsites"
const resAPI = "http://localhost:9292/reservations"

function App() {
  const [campsites, setCampsites] = useState([]);
  const [reservations, setReservations] = useState([]);

  const [reservations, setReservations] = useState([])

  useEffect(() => {
      fetch(resAPI)
      .then(res => res.json())
      .then(setReservations)
  },[])

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

  return (
    <Router>
      <div className="main-container">
        <div className="Nav">
          <Navbar />
          <Filters filteredCampsites={filteredCampsites}/>
        </div>
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Campsites campsites={campsites} setReservations={setReservations} />
            </Route>
            <Route path="/reservations">
              <ReservationsList reservations={reservations} setReservations={setReservations}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
