import React, { Component } from "react";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class Reciepts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "OrdreNr",
          field: "orderNumber",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Utleiedato",
          field: "date",
          sortable: true,
          filter: true,
        },
        { headerName: "Kundens epost", 
          field: "email", 
          sortable: true, 
          filter: true }
      ],
      rowData: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/reciepts")
      .then((res) => res.json())
      .then((rowData) => this.setState({ rowData }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          width: 1000,
          height: 600,
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        />
      </div>
    );
  }
}

export default Reciepts;
