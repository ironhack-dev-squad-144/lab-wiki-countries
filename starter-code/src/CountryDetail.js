import React from "react";
import countries from "./countries";
import { Link } from 'react-router-dom'

function cca3ToCountry(cca3) {
  return countries.find(country => country.cca3 === cca3);
}

export default function CountryDetail(props) {
  let cca3 = props.match.params.cca3; // Because of <Route path="/:cca3" component={CountryDetail} />
  let country = cca3ToCountry(cca3);

  if (!country) return ""

  return (
    <div>
      <h2>{country.name.common}</h2>
      <table className="table">
        <tbody>
          <tr>
            <th>Capital</th>
            <td>{country.capital.join(", ")}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <th>Borders</th>
            <td>
              <ul>
                {country.borders.map(cca3 => (
                  <li key={cca3}>
                    <Link to={"/" + cca3}>{cca3ToCountry(cca3).name.common}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
