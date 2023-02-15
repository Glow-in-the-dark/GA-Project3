import { useState } from "react";
import Calendar from "react-calendar";
import Time from "./Time";
import "react-calendar/dist/Calendar.css";
import NumOfPax from "./NumOfPax";
import { async } from "postcss-js";

const CalendarDisp = (props) => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [timeSlot, setTimeSlot] = useState("");

  const getAppt = async (modifiedDate) => {
    const res = await fetch(
      "http://127.0.0.1:5001/volunteer-slots/availability",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedDate),
      }
    );
    return console.log(res);
  };

  const showAppt = () => {
    setShowTime(true);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const modifiedDate = `${year}-0${month + 1}-0${day}`;
    getAppt(modifiedDate);

    console.log(modifiedDate);
  };

  // console.log(`${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`);
  // console.log(`timeSlot is ${timeSlot}`);

  return (
    <div className="app">
      <h1 className="header">Select Time Slot</h1>
      <label>Find a time that works for you</label>
      <div>
        <Calendar onChange={setDate} value={date} onClickDay={showAppt} />
      </div>

      <p>
        <span>Your selected date is:</span>
        {date.toDateString()}
      </p>

      <Time showTime={showTime} date={date} setTimeSlot={setTimeSlot} />
      <p>
        <label>
          Can't find a suitable time slow? Find other ways to contribute here.
        </label>
      </p>
      <NumOfPax date={date} timeSlot={timeSlot} roles={props.roles} />
    </div>
  );
};

export default CalendarDisp;
