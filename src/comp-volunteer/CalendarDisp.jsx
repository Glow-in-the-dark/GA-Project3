import { useState } from "react";
import Calendar from "react-calendar";
import Time from "./Time";
import "react-calendar/dist/Calendar.css";

const CalendarDisp = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  return (
    <div className="app">
      <h1 className="header">Select Time Slot</h1>
      <label>Find a time that works for you</label>
      <div>
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={() => setShowTime(true)}
        />
      </div>

      <p>
        <span>Your selected date is:</span>
        {date.toDateString()}
      </p>

      <Time showTime={showTime} date={date} />
      <p>
        <label>
          Can't find a suitable time slow? Find other ways to contribute here.
        </label>
      </p>
    </div>
  );
};

export default CalendarDisp;
