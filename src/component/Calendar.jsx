import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { addLeave, getLeaves, getSchedule } from '../api/schedule';
import AlertScreen from './AlertScreen';
import APIError from '../api/error';

const localizer = momentLocalizer(moment);

const fnOrAnMap = {
  FN: {
    start: "09:00:00 AM",
    end: "01:00:00 PM"
  },
  AN: {
    start: "02:00:00 PM",
    end: "06:00:00 PM"
  }
}

const eventColors = {
  bookedSession: 'light blue',
  leave: '#e57373',
};

const eventStyleGetter = (event) => {
  const color = eventColors[event.type] || 'light blue';
  const style = {
    backgroundColor: color,
    borderRadius: '4px',
    opacity: 0.8,
    color: 'black',
    border: 'none',
    display: 'block',
  };
  return {
    style,
  };
};

const dayStyleGetter = (day) => {
  const style = {}
  if (moment(day).isBefore(moment().startOf('day'))) {
    style.backgroundColor = "#d6cece"
  } else if (moment(day).format('ddd') === 'Sun') {
    style.backgroundColor = "#dadbf0"
  }
  return {
    style
  }
}

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [mode, setMode] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("");
  const [message, setMessage] = useState("");
  const [availableSessions, setAvailableSessions] = useState({
    "FN": "Morning",
    "AN": "Afternoon"
  });

  useEffect(() => {
    loadEvents()
  }, []);

  const loadEvents = async () => {
    const leaves = await getLeaves()
    let events = []
    leaves.map((leave) => {
      events.push({
        title: `Holiday: ${leave.fnOrAn}`,
        start: new Date(leave.day + " " + fnOrAnMap[leave.fnOrAn].start),
        end: new Date(leave.day + " " + fnOrAnMap[leave.fnOrAn].end),
        type: "leave",
        session: leave.fnOrAn
      })
    })

    const schedule = await getSchedule()
    schedule.map((session) => {
      events.push({
        title: `Session: ${session.session} - ${session.modelName}`,
        start: new Date(session.date + " " + fnOrAnMap[session.session].start),
        end: new Date(session.date + " " + fnOrAnMap[session.session].end),
        type: "bookedSession",
        session: session.session
      })
    })
    setEvents(events)
  }


  const handleDateClick = ({ start, end }) => {
    setSelectedDate(moment(start).format("YYYY-MM-DD"))
    if (moment(start).isSameOrAfter(moment().startOf('day')) && (moment(start).format('ddd') !== 'Sun')) {
      setMode("scheduling");
      const available = {
        "FN": "Morning",
        "AN": "Afternoon"
      };
      events.forEach((event) => {
        if (event.start >= start && event.start < end && event.type === "bookedSession") {
          delete available[event.session]
        }
      })
      setAvailableSessions(available)
    } else if (moment(start).format('ddd') !== 'Sun') {
      setMode("displayMessage");
      setMessage("Click a future date to schedule leaves")
    } else {
      setMode("displayMessage");
      setMessage("We are not working on Sundays")
    }
  }

  const handleChangeSession = (event) => {
    setSelectedSession(event.target.value);
  };


  const flashAlert = (alertColor, alertMessage) => {
    setAlertColor(alertColor)
    setAlertMessage(alertMessage)
    setTimeout(() => {
      setAlertColor("")
      setAlertMessage("")
    }, 1500);
  }

  const bookSession = async () => {
    try {
      const body = {
        date: selectedDate,
        fnOrAn: selectedSession
      }
      await addLeave(body)  
      setMode("");
      setSelectedDate("");
      setSelectedSession("");
      flashAlert("success", "Leave is marked")
      loadEvents()
    }
    catch (exception) {
      console.log(exception)
      if (exception instanceof APIError && exception.code === 400) {
        console.log("An error was returned from API: ", exception.message)
        flashAlert("error", exception.message)
      } else {
        flashAlert("error", "An unexpected error occured while marking leaves")
      }
    }
  };

  return (
    <div>
      <AlertScreen alertColor={alertColor} alertMessage={alertMessage} />
      <h1>Schedule</h1>
      <Calendar
        localizer={localizer}
        selectable
        events={events}
        onSelectSlot={handleDateClick}
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
        dayPropGetter={dayStyleGetter}
        popup
      />

      {
        mode === "scheduling" &&
        <div>
          <FormControl sx={{ m: 1, maxWidth: 320 }}>
            <FormLabel id="session-controlled-radio-buttons-group">Choose from available slots on {moment(selectedDate).format("dddd, MMMM Do YYYY")} to mark leave</FormLabel>
            <RadioGroup
              aria-labelledby="session-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={selectedSession}
              onChange={handleChangeSession}
            >
              {
                Object.keys(availableSessions).length > 0 ?
                  Object.keys(availableSessions).map((availableSession) => {
                    return (
                      <FormControlLabel key={availableSession} value={availableSession} control={<Radio />} label={availableSessions[availableSession]} />
                    )
                  }) :
                  <h5>The trainer have marked leave for the day</h5>
              }
            </RadioGroup>
          </FormControl>
          {
            selectedSession && (
              <Button variant="contained" color="success" sx={{ margin: "20px" }} onClick={bookSession}>
                Mark Leave
              </Button>
            )
          }
        </div>
      }
      {
        mode === "displayMessage" &&
        <div>
          <h5>{message}</h5>
        </div>
      }
    </div>
  );
};

export default MyCalendar;