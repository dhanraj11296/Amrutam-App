import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import "./Appointments.css"

function Appointments() {
  const [selectedModes, setSelectedModes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [datesList, setDatesList] = useState([]);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const morningSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'];
  const eveningSlots = ['4:00 PM', '4:15 PM', '4:30 PM', '4:45 PM', '5:00 PM', '5:15 PM'];


  
  const handleButtonClick = (mode) => {
    if (selectedModes.includes(mode)) {
      setSelectedModes(selectedModes.filter((m) => m !== mode));
    } else {
      setSelectedModes([...selectedModes, mode]);
    }
  };

  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  
  const addDateToList = () => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, 'EEE, dd MMM');
      if (!datesList.includes(formattedDate)) {
        setDatesList([...datesList, formattedDate]);
      }
      setSelectedDate(null); 
    }
  };

  
  const handleTimeSlotClick = (timeSlot) => {
    if (selectedTimeSlots.includes(timeSlot)) {
      setSelectedTimeSlots(selectedTimeSlots.filter((slot) => slot !== timeSlot));
    } else {
      setSelectedTimeSlots([...selectedTimeSlots, timeSlot]);
    }
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedModes.length === 0 || datesList.length === 0 || selectedTimeSlots.length === 0) {
      alert('Please select at least one session mode, date, and time slot.');
      return;
    }
    setAppointmentDetails({
      modes: selectedModes,
      dates: datesList,
      timeSlots: selectedTimeSlots,
    });
  };

  

  return (
    <div className="cont">

      <form onSubmit={handleSubmit}>
        
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          {['In-Clinic', 'Video', 'Chat'].map((mode) => (
            <button
              type="button"
              key={mode}
              onClick={() => handleButtonClick(mode)}
              style={{
                padding: '10px 20px',
                backgroundColor: selectedModes.includes(mode) ? '#4CAF50' : '#f0f0f0',
                color: selectedModes.includes(mode) ? '#fff' : '#000',
                border: '1px solid #ddd',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {mode}
            </button>
          ))}
        </div>

       
       
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="EEE, dd MMM yyyy"
            placeholderText="Select a date"
            customInput={
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4CAF50',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Open Calendar
              </button>
            }
          />
        </div>

        
        
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button
            type="button"
            onClick={addDateToList}
            style={{
              padding: '10px 20px',
              backgroundColor: '#008CBA',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Add Date
          </button>
        </div>

       
       
        <div style={{ marginBottom: '20px' }}>
          <h3>Selected Dates:</h3>
          {datesList.length > 0 ? (
            <ul>
              {datesList.map((date, index) => (
                <li key={index} style={{ fontSize: '16px', marginBottom: '5px' }}>
                  {date}
                </li>
              ))}
            </ul>
          ) : (
            <p>No dates selected.</p>
          )}
        </div>

        
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Morning Slots (9:00 AM - 11:00 AM):</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {morningSlots.map((slot) => (
              <button
                type="button"
                key={slot}
                onClick={() => handleTimeSlotClick(slot)}
                style={{
                  padding: '10px 15px',
                  backgroundColor: selectedTimeSlots.includes(slot) ? '#4CAF50' : '#f0f0f0',
                  color: selectedTimeSlots.includes(slot) ? '#fff' : '#000',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Evening Slots (4:00 PM - 5:15 PM):</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {eveningSlots.map((slot) => (
              <button
                type="button"
                key={slot}
                onClick={() => handleTimeSlotClick(slot)}
                style={{
                  padding: '10px 15px',
                  backgroundColor: selectedTimeSlots.includes(slot) ? '#4CAF50' : '#f0f0f0',
                  color: selectedTimeSlots.includes(slot) ? '#fff' : '#000',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        
        
        <button
          type="submit"
          style={{
            marginTop: '20px',
            padding: '10px',
            width: '100%',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Make An Appointment
        </button>
      </form>

      
      
      {appointmentDetails && (
        <div
          style={{
            marginTop: '30px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h3>Appointment Details:</h3>
          <p><strong>Session Modes:</strong> {appointmentDetails.modes.join(', ')}</p>
          <p><strong>Selected Dates:</strong></p>
          <ul>
            {appointmentDetails.dates.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
          <p><strong>Selected Time Slots:</strong> {appointmentDetails.timeSlots.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default Appointments;
