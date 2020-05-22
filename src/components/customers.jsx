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
              <td>Random fornavn</td>
              <td>blalaala(etternavn)</td>
              <td>asdasd@kasjdk.com (epost)</td>
              <td>gaten 0050 oslo (adresse)</td>
              <td>54332233 (tlf)</td>
            </tr>
            <tr>
              <td>Random fornavn 2</td>
              <td>blalaala 2(etternavn)</td>
              <td>asdasd@kasjdk.com 2(epost)</td>
              <td>gaten 0050 oslo 2 (adresse)</td>
              <td>54332233 2 (tlf)</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Customers;
