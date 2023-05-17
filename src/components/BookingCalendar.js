import Calendar from 'react-calendar';
import React, { useState } from 'react';
import Firestore from './firestore';
import { v4 as uuidv4 } from 'uuid';


function BookingCalendar() {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  // Ensure that both date and time are selected
  if (!date || !selectedTime) {
    alert('Please select a date and time.');
    return;
  }

  // Format date and time
  const appointmentDate = date.toISOString().split('T')[0]; // Format date as 'YYYY-MM-DD'
  const appointmentTime = selectedTime;

  // Create an object with the appointment data
  const appointmentData = {
    id: uuidv4(), // Unique ID for the appointment
    appointmentDate,
    time: appointmentTime,
    // Other relevant appointment data
  };

  try {
    setIsLoading(true);
    await Firestore.addDoc(appointmentData);
    alert('Appointment saved successfully!');
  } catch (error) {
    setIsError(true);
    console.error('Error saving appointment:', error);
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="booking-calendar">
      <h2>Book an appointment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date-picker">Choose a date:</label>
        <Calendar id="date-picker" onChange={handleDateChange} value={date} />
        <label htmlFor="time-picker">Choose a time:</label>
        <select id="time-picker" onChange={handleTimeChange} value={selectedTime}>
          <option value="">Select a time</option>
          <option value="9:00am">9:00am</option>
          <option value="10:00am">10:00am</option>
          <option value="11:00am">11:00am</option>
          <option value="12:00pm">12:00pm</option>
          <option value="1:00pm">1:00pm</option>
          <option value="2:00pm">2:00pm</option>
          <option value="3:00pm">3:00pm</option>
          <option value="4:00pm">4:00pm</option>
          <option value="5:00pm">5:00pm</option>
          <option value="6:00pm">6:00pm</option>
          <option value="7:00pm">7:00pm</option>
          <option value="8:00pm">8:00pm</option>
          <option value="9:00pm">9:00pm</option>
        </select>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Book appointment'}
        </button>
        {isError && <p>An error occurred while saving the appointment.</p>}
      </form>
    </div>
  );
}

export default BookingCalendar;
