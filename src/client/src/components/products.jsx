import React, { Component } from "react";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "Id", field: "id", sortable: true, filter: true },
        { headerName: "Name", field: "name", sortable: true, filter: true },
        { headerName: "Price", field: "price", sortable: true, filter: true },
        {
          headerName: "Comment",
          field: "comment",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Category",
          field: "category",
          sortable: true,
          filter: true,
        },
        { headerName: "Size", field: "size", sortable: true, filter: true },
        { headerName: "Status", field: "status", sortable: true, filter: true },
      ],
      rowData: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((rowData) => this.setState({ rowData }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          width: 500,
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

export default Products;
