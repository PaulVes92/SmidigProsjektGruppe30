import React, { Component } from "react";

class Customers extends Component {
  state = {};
  render() {
    return (
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Fornavn</th>
              <th scope="col">Etternavn</th>
              <th scope="col">Epost</th>
              <th scope="col">Adresse</th>
              <th scope="col">Tlf</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Random</td>
              <td>blalaala</td>
              <td>asdasd@kasjdk.com</td>
              <td>gaten 0050 oslo</td>
              <td>54332233</td>
            </tr>
            <tr>
              <td>fasiji</td>
              <td>sgsdgdsg</td>
              <td>asdas@asfasf.dsd</td>
              <td>gaten 0050 oslo</td>
              <td>54332233</td>
            </tr>
            <tr>
              <td>asdasd</td>
              <td>aghhtj</td>
              <td>asfhjaa@asjdad.scon</td>
              <td>gaten 0050 oslo</td>
              <td>54332233</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Customers;
