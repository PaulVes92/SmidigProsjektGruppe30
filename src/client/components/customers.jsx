import React, { Component } from "react";
import ReactTable from "react-table";
//import "react-table/react-table.css";

class Customers extends Component {
  state = {};
  render() {
    const columns = [
      {
        Header: "Etternavn",
        accessor: "etternavn",
      },
      {
        Header: "Fornavn",
        accessor: "fornavn",
      },
      {
        Header: "Epost",
        accessor: "epost",
      },
      {
        Header: "Adresse",
        accessor: "adresse",
      },
      {
        Header: "Tlf",
        accessor: "tlf",
      },
    ];

    return <ReactTable>columns = {columns}</ReactTable>;
  }
}

export default Customers;

// const data = [
//   {
//     navn: "Ayaan",
//     etternavn: "swlot",
//     epost: "akdjask@sdkalskd.com",
//     adresse: "smaloveien 23",
//     tlf: "54216859",
//   },
//   {
//     navn: "Ayaan 2",
//     etternavn: "swlot 2",
//     epost: "akdjask2@sdkalskd.com",
//     adresse: "smaloveien 23 2",
//     tlf: "54216859 2",
//   },
//   {
//     navn: "Ayaan 3",
//     etternavn: "swlot 3",
//     epost: "akdjask@sdkalskd.com 3",
//     adresse: "smaloveien 3",
//     tlf: "54216859 3",
//   },
//   {
//     navn: "Ayaan 4",
//     etternavn: "swlot 4",
//     epost: "akdjask@sdkalskd.com 4",
//     adresse: "smaloveien 4",
//     tlf: "54216859 4",
//   },
//   {
//     navn: "Ayaan 5",
//     etternavn: "swlot 5",
//     epost: "akdjask@sdkalskd.com 5",
//     adresse: "smaloveien 23 5",
//     tlf: "54216859 5",
//   },
// ];
