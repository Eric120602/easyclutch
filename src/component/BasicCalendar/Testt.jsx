import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class MyCalendar extends React.Component {
  state = {
    events: [],
    isScheduling: false,
    currentEvent: {
      start: null,
      end: null,
      title: '',
    },
  };

  handleSelectSlot = ({ start, end }) => {
    if (!this.state.isScheduling) {
      this.setState({
        isScheduling: true,
        currentEvent: {
          start,
          end,
          title: '',
        },
      });
    }
  };

  handleInputChange = (event) => {
    const { currentEvent } = this.state;
    this.setState({
      currentEvent: {
        ...currentEvent,
        title: event.target.value,
      },
    });
  };

  handleNext = () => {
    const { currentEvent } = this.state;
    if (currentEvent.title.trim() === '') {
      alert('Please enter an event title.');
    } else {
      this.setState((prevState) => ({
        events: [...prevState.events, currentEvent],
        isScheduling: false,
        currentEvent: {
          start: null,
          end: null,
          title: '',
        },
      }));
    }
  };

  render() {
    const { events, isScheduling, currentEvent } = this.state;

    return (
      <div>
        <h1>My Calendar</h1>
        <Calendar
          localizer={localizer}
          selectable
          events={events}
          onSelectSlot={this.handleSelectSlot}
          style={{ height: 500 }}
        />

        {isScheduling && (
          <div>
            <h2>Schedule Event</h2>
            <label>
              Event Title:
              <input
                type="text"
                value={currentEvent.title}
                onChange={this.handleInputChange}
              />
            </label>
            <button onClick={this.handleNext}>Next</button>
          </div>
        )}
      </div>
    );
  }
}

export default MyCalendar;