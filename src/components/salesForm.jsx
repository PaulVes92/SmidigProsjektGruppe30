import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SalesForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <form className="form-group mr-2">
        <label>Fornavn</label>
        <input className="form-control" type="text" placeholder="" />
        <label>Etternavn</label>
        <input className="form-control" type="text" placeholder="" />
        <label>Email</label>
        <input className="form-control" type="text" placeholder="" />
        <label>Telefonnummer</label>
        <input className="form-control" type="text" placeholder="" />
        <label>Fra dato</label>
        <DatePicker
          className="form-control"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        ></DatePicker>
        <label>Til dato</label>
        <DatePicker
          className="form-control"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        ></DatePicker>
        <br></br>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SalesForm;

// class SalesForm extends Component {
//   state = {
//     startDate: new Date(),
//     endDate: new Date(),
//     setStartDate: new Date(),
//     setEndDate: new Date(),
//   };

//   handleChange = (date) => {
//     this.setState({
//       startDate: date,
//       endDate: date,
//     });
//   };

//   render() {
//     const [startDate, setStartDate] = useState(new Date("2014/02/08"));
//     const [endDate, setEndDate] = useState(new Date("2014/02/10"));

//     return (
//       <div>
//         <form>
//           <label>Fornavn</label>
//           <input type="text" placeholder="" />
//           <label>Etternavn</label>
//           <input type="text" placeholder="" />
//           <label>Email</label>
//           <input type="text" placeholder="" />
//           <label>Telefonnummer</label>
//           <input type="text" placeholder="" />
//           <label>Fra dato</label>
//           <DatePicker
//             selected={startDate}
//             onChange={(date) => setStartDate(date)}
//             selectsStart
//             startDate={startDate}
//             endDate={endDate}
//           ></DatePicker>
//           <DatePicker
//             selected={endDate}
//             onChange={(date) => setEndDate(date)}
//             selectsEnd
//             startDate={startDate}
//             endDate={endDate}
//             minDate={startDate}
//           ></DatePicker>
//         </form>
//       </div>
//     );
//   }
// }

// export default SalesForm;
