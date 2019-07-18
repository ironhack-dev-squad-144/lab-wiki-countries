import React from "react";
import "./App.css";
import countries from "./countries";
import { NavLink, Link, Route } from "react-router-dom";
import CountryDetail from "./CountryDetail";

function App(props) {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          WikiCountries
        </Link>
      </nav>
      <div className="row">
        <div className="col-5">
          <div className="list-group">
            {countries.map(c => (
              <NavLink
                key={c.cca3}
                className="list-group-item list-group-item-action"
                to={"/" + c.cca3}
              >
                {c.flag} {c.name.common}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="col-7">
          <Route path="/:cca3" component={CountryDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;
