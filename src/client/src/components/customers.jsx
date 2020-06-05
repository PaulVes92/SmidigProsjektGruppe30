import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      rowSelection: "single",
      columnDefs: [
        {
          headerName: "Etternavn",
          field: "lastName",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Fornavn",
          field: "firstName",
          sortable: true,
          filter: true,
        },
        { headerName: "Epost", field: "email", sortable: true, filter: true },
        {
          headerName: "Tlf",
          field: "phoneNumber",
          sortable: true,
          filter: true,
        },
      ],
      rowData: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/customers")
      .then((res) => res.json())
      .then((rowData) => this.setState({ rowData }))
      .catch((err) => console.log(err));
  }

  deleteCustomer = () => {
    const selectedRows = this.gridOptions.selectedNodes();
    if (!selectedRows || selectedRows.length === 0) {
      return;
    }
    const selectedRow = selectedRows[0];
    window.rowDataserverside.splice(selectedRow.rowIndex, 1);
    this.purgeServerSideCache();
  };

  render() {
    return (
      <div className="col-md-1">
        <div
          className="ag-theme-balham"
          style={{
            width: 1410,
            height: 600,
          }}
        >
          <button className="btn-danger" onClick={this.deleteCustomer}>
            X
          </button>
          <AgGridReact
            key={this.state.id}
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            rowSelection={this.state.rowSelection}
          />
        </div>
      </div>
    );
  }
}

export default Customers;
