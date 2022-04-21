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

  const [reservations, setReservations] = useState([])

  useEffect(() => {
      fetch(resAPI)
      .then(res => res.json())
      .then(setReservations)
  },[])

  useEffect(() => {
    fetch(camprAPI)
    .then(res => res.json())
    .then(setCampsites)
  },[]);

  return (
    <Router>
      <div className="main-container">
        <div className="Nav">
          <Navbar />
          <Filters />
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
