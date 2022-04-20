import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Filters from "./Filters";
import Campsites from "./Campsites";
import Reservations from "./Reservations";


function App() {
  const [campsites, setCampsites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/campsites")
    .then(res => res.json())
    .then(setCampsites)
  },[]);

  return (
    <Router>
      <div className="App">
        <div className="Nav">
          <Navbar />
        </div>
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Filters />
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
