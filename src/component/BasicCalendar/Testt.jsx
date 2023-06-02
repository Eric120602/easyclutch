import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isScheduling, setIsScheduling] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({
    start: null,
    end: null,
    title: ''
  });
  const [selectedType, setSelectedType] = useState('');
  const [availableVehicles, setAvailableVehicles] = useState([]);

  // Sample data for available vehicles based on type
  const vehicleOptions = {
    four_wheeler: ['Maruthi 800', 'Maruthi Waganar', 'Indigo XL'],
    two_wheeler: ['Honda Activa', 'Suzuki Access', 'Yamaha FZ'],
    three_wheeler:['Ape','Bajaj Maxima','Piajio'],
    heavy_wheeler:['Tipper','Bus','Ashok Leyland'],
  };

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setSelectedType(type);
    setAvailableVehicles(vehicleOptions[type] || []);
  };

  const handleSelectSlot = ({ start, end }) => {
    if (!isScheduling) {
      setIsScheduling(true);
      setCurrentEvent({
        start,
        end,
        title: ''
      });
    }
  };

  const handleInputChange = (event) => {
    setCurrentEvent((prevEvent) => ({
      ...prevEvent,
      title: event.target.value,
    }));
  };

  const handleVehicleChange = (e) => {
    const selectedVehicle = e.target.value;
    setCurrentEvent((prevEvent) => ({
      ...prevEvent,
      title: prevEvent.title+"," +selectedVehicle,
    }));
  };

  const handleNext = () => {
    if (currentEvent.title.trim() === '') {
      alert('Please enter an event title.');
    } else {
      setEvents((prevEvents) => [...prevEvents, currentEvent]);
      setIsScheduling(false);
      setCurrentEvent({
        start: null,
        end: null,
        title: '',
      });
    }
  };

  const vehicleTypes = Object.keys(vehicleOptions);

  return (
    <div>
      <h1>My Calendar</h1>
      <Calendar
        localizer={localizer}
        selectable
        events={events}
        onSelectSlot={handleSelectSlot}
        style={{ height: 500 }}
      />

      {isScheduling && (
        <div>
          <h2>Schedule Event</h2>
          <label>
          Event Title:
            <br/>
            <input
              id='morning'
              name="session"
              type="radio"
              value="morning"
              onChange={handleInputChange}
            /><label for="morning">Morning</label><br/>

            <input
            id='evening'
            name="session"
              type="radio"
              value="Evening"
              onChange={handleInputChange}
            /><label for="evening">Evening</label><br/>
          </label>
        </div>
      )}

      <label htmlFor="type">Select Vehicle Type:</label>
      <select id="type" value={selectedType} onChange={handleTypeChange}>
        <option value="">Select Type</option>
        {vehicleTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      {selectedType && (
        <div>
          <label htmlFor="vehicle">Select Vehicle:</label>
          <select id="vehicle" value={currentEvent.vehicle} onChange={handleVehicleChange}>
            <option value="">Select Vehicle</option>
            {availableVehicles.map((vehicle) => (
              <option key={vehicle} value={vehicle}>
                {vehicle}
              </option>
            ))}
          </select>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;