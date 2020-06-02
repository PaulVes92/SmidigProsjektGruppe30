import React, { useState, getDay } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SalesForm = () => {
  //Datepicker used from https://reactdatepicker.com/
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  //Added so calender dosen't show sundays as an option
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0;
  };

  return (
    <div className="container-fluid ml-1 mt-5">
      <form>
        <label>Fornavn</label>
        <input className="form-control mt-2" type="text" placeholder="" />
        <label>Etternavn</label>
        <input className="form-control mt-2" type="text" placeholder="" />
        <label>Email</label>
        <input className="form-control mt-2" type="text" placeholder="" />
        <label>Telefonnummer</label>
        <input className="form-control mt-2" type="text" placeholder="" />
        <label>Produkt id</label>
        <input className="form-control mt-1" type="text" placeholder="" />
        <button className="btn-primary">Add</button>
        <br />
        <DatePicker
          placeholderText="Fra dato"
          className="form-control mt-3"
          todayButton="Fra dato"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          filterDate={isWeekday}
          showMonthDropdown
        ></DatePicker>
        <DatePicker
          placeholderText="Til dato"
          className="form-control mt-3"
          todayButton="Til dato"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          filterDate={isWeekday}
          showMonthDropdown
        ></DatePicker>
        <br></br>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default SalesForm;
