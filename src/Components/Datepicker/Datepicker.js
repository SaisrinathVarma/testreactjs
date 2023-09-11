import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Datepicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='bord'>
      <h1>Enter Daate</h1>
      <DatePicker className='bg-slate-500'
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy" // Customize the date format
        isClearable // Allow clearing the selected date
        showYearDropdown // Show a dropdown for selecting the year
        scrollableYearDropdown // Allow scrolling through years in the dropdown
      />
      {selectedDate && (
        <p>You selected: {selectedDate.toLocaleDateString()}</p>
      )}
    </div>
  );
}

export default Datepicker;

