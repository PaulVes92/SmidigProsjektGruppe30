import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Produkter extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      posts:[]
    }

  }

  comcomponentDidMount(){
    const url ="";
    fetch(url, {
      method: "GET"
    }).then(response => response.jason()).then(posts => {
      this.setState({posts: posts})
    })
  }

  state = {};
  render() {
    const columns = [
      {
        Header: "Artikkelnummer",
        accessor: "artikkelnummer",
      },
      {
        Header:"Produkt ID",
        accsessor: "Produkt ID",
      },
      {
        Header:"Produkt navn",
        accsessor: "Produkt navn",
      },
      {
        Header:"Merke",
        accsessor: "Merke",
      },
      {
        Header:"Status",
        accsessor: "Status",
      },
      {
        Header:"ReturDato",
        accsessor: "ReturDato",
      },
      {
        Header:"Klar til utleie",
        accsessor: "Klar til utleie",
      },
    ]
    return (
      

      );
  }
}

export default Produkter;


// <div>
      //   <table className="table table-hover">
      //     <thead>
      //       <tr>
      //         <th scope="col">Artikkelnummer</th>
      //         <th scope="col">Produkt ID</th>
      //         <th scope="col">Produkt navn</th>
      //         <th scope="col">Merke</th>
      //         <th scope="col">Status</th>
      //         <th scope="col">ReturDato</th>
      //         <th scope="col">Klar til utleie</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>
      //         <td>Sykt</td>
      //         <td>blalaala(etternavn)</td>
      //         <td>asdasd@kasjdk.com (epost)</td>
      //         <td>gaten 0050 oslo (adresse)</td>
      //         <td>54332233 (tlf)</td>
      //       </tr>
      //       <tr>
      //         <td>Random fornavn 2</td>
      //         <td>blalaala 2(etternavn)</td>
      //         <td>asdasd@kasjdk.com 2(epost)</td>
      //         <td>gaten 0050 oslo 2 (adresse)</td>
      //         <td>54332233 2 (tlf)</td>
      //       </tr>
      //     </tbody>
      //   </table>
      // </div>