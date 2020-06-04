import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import no from "date-fns/locale/nb";

const Calendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0;
  };
  return (
    <div>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        locale={no}
        placeholderText="Fra dato"
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
        dateFormat="dd/MM/yyyy"
        locale={no}
        placeholderText="Til dato"
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
    </div>
  );
};

export default Calendar;
