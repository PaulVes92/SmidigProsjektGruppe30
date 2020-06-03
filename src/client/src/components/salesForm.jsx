import React, { useState, getDay } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SalesForm = () => {
  //Datepicker used from https://reactdatepicker.com/
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  //Added so calender doesn't show sundays as an option
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0;
  };

  return (
    <div className="container-fluid ml-1 mt-5">
      <h1 id="regKunde">Registrer ny kunde</h1>
      <form>
        <input className="field" type="text" placeholder="Fornavn" />
        <input className="field" type="text" placeholder="Etternavn" />
        <input className="field" type="text" placeholder="Email" />
        <input className="field" type="text" placeholder="Telefonnummer" />
        <input className="field" type="text" placeholder="Produkt id" />
        <button className="btns">Add</button>
        <br /> <br />
        <h1 id="regKunde">Leietid</h1>
        <DatePicker
          placeholderText="Fra dato"
          className="field2"
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
          className="field2"
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
        <button className="btns">Submit</button>
      </form>
    </div>
  );
};

export default SalesForm;
