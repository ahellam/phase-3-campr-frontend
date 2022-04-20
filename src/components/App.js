import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Filters from "./Filters";
import Campsites from "./Campsites";
import Reservations from "./Reservations";

const camprAPI = "http://localhost:9292/campsites"

function App() {
  const [campsites, setCampsites] = useState([]);

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
              <Campsites campsites={campsites}/>
            </Route>
            <Route path="/reservations">
              <Reservations />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
